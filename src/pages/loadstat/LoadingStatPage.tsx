import Box from '@mui/material/Box';
import {GridColDef, GridSortModel} from '@mui/x-data-grid';
import DGrid from "../../components/dgrid/DGrid";
import {RootState, useAppDispatch, useAppSelector} from "../../redux/store";
import {useEffect, useMemo, useRef, useState} from "react";
import {
  loadLoadStat,
  setLoadStatPagginator,
  setLoadStatSorter
} from "../../redux/loadstat/loadStatThunk";
import {LoadStatFilter, Pagginator, Sorter} from "../../redux/loadstat/types";
import {DateUtils} from "../../utils/DateUtils";
import {LoadStatListResponse, LoadStatLog} from "../../ekb2-api";
import sizeConfigs from "../../configs/sizeConfigs";
import LoadingStatFilterForm from "./LoadingStatFilter";

const columns: GridColDef<(LoadStatLog[])[number]>[] = [
  { field: 'id',
    headerName: 'ID пакета',
    width: 100,
    disableColumnMenu: true,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'date_incoming',
    headerName: 'Дата поступления',
    width: 170,
    valueFormatter: (value) => { return DateUtils.formatIsoDate(value); },
    disableColumnMenu: true,
  },
  {
    field: 'date_processing',
    headerName: 'Дата обработки',
    width: 170,
    valueFormatter: (value) => { return DateUtils.formatIsoDate(value); },
    disableColumnMenu: true,
  },
  {
    field: 'org_id',
    headerName: 'ID поставщика',
    type: 'string',
    width: 80,
    description: 'ID поставщика',
    disableColumnMenu: true,
  },
  {
    field: 'sess_org_id',
    headerName: 'ID демонстратора',
    type: 'string',
    width: 80,
    description: 'ID демонстратора',
    disableColumnMenu: true,
  },
  {
    field: 'packet_name',
    headerName: 'Имя xml-пакета',
    type: 'string',
    width: 270,
    disableColumnMenu: true,
  },
  {
    field: "show_date",
    headerName: 'Дата сеанса',
    width: 170,
    valueFormatter: (value) => { return DateUtils.formatIsoDate(value); },
    disableColumnMenu: true,
  },
  {
    field: 'zip_name',
    headerName: 'Имя zip-пакета',
    type: 'string',
    width: 270,
    disableColumnMenu: true,
  },

];

export default function LoadingStatPage() {
  const dispatch = useAppDispatch();
  const { selectedPage, currentSToken } = useAppSelector((state: RootState) => state.appStateState);
  const { filter }: { filter: LoadStatFilter } = useAppSelector((state: RootState) => state.loadStatState);
  const { pagginator }: { pagginator: Pagginator } = useAppSelector((state: RootState) => state.loadStatState);
  const { sorter }: { sorter: Sorter } = useAppSelector((state: RootState) => state.loadStatState);
  const { response }: { response: LoadStatListResponse } = useAppSelector((state: RootState) => state.loadStatState);
  const { isLoading }: { response: LoadStatListResponse } = useAppSelector((state: RootState) => state.loadStatState);

// --- pagination & sorting
  const rowCountRef = useRef(response?.totalCount || 0);
  const rowCount = useMemo(() => {
    if (response?.totalCount !== undefined) {
      rowCountRef.current = response.totalCount === 999999999 ? -1 : response.totalCount;
    }
    return rowCountRef.current;
  }, [response?.totalCount]);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 50,
  });
  const [sortModel, setSortModel] = useState<GridSortModel>([
    {
      field: 'id',
      sort: 'desc',
    },
  ]);
  const handleSortChange = (model: GridSortModel) => {
    const modelJson = JSON.stringify(model)
    console.log(" --- handleSortChange model: " + modelJson);
    if (modelJson !== JSON.stringify(sortModel)) {
      setSortModel(model);
    }
  };
// ------------------------------------------------------------------------------

  const setPagginator = () => {
    dispatch(setLoadStatPagginator({
      page: paginationModel.page,
      limit: paginationModel.pageSize,
    } as Pagginator));
  }

  const setSorter = () => {
    dispatch(setLoadStatSorter({
      fieldName: sortModel[0]?.field,
      direction: sortModel[0]?.sort
    } as Sorter));
  }

  useEffect(() => {
    if(currentSToken && pagginator && pagginator.page !== undefined) {
      setPagginator();
    }
  }, [paginationModel]);

  useEffect(() => {
    if(currentSToken) {
      setSorter();
    }
  }, [sortModel]);

  useEffect(() => {
    if(selectedPage === 'loadstat') {
      console.log(" --- selectedPage: " + selectedPage);
      if(!pagginator.page) {
        setPagginator();
      }
    }
  }, [selectedPage]);

  useEffect(() => {
    if(currentSToken && pagginator && pagginator.page !== undefined) {
      dispatch(loadLoadStat(currentSToken, filter, pagginator, sorter));
    }
  }, [filter, pagginator, sorter]);

  const loadingStatFilterProps = {
    height: 150,
  };



  return (
      <Box>
        <LoadingStatFilterForm height={loadingStatFilterProps.height}/>
        <DGrid
            heightDeltaMinus={sizeConfigs.sidebar.height + sizeConfigs.statusBar.height + loadingStatFilterProps.height + 15}
            rows={response?.data}
            columns={columns}
            pageSize={response?.limit}
            checkboxSelection={false}
            disableRowSelectionOnClick
            rowCount={rowCount}
            loading={isLoading}
            paginationMode="server"
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            sortingMode="server"
            sortModel={sortModel}
            onSortModelChange={(model) => handleSortChange(model)}
        />
      </Box>
  );
}