import {GridColDef, GridSortModel} from '@mui/x-data-grid';
import DGrid from "../../components/dgrid/DGrid";
import {RootState, useAppDispatch, useAppSelector} from "../../redux/store";
import {useEffect, useMemo, useRef, useState} from "react";
import {DateUtils} from "../../utils/DateUtils";
import {DataStatListResponse, DataStatSessions} from "../../ekb2-api";
import sizeConfigs from "../../configs/sizeConfigs";
import {Pagginator, Sorter} from "../../redux/types";
import {loadDataStat, setDataStatPagginator, setDataStatSorter} from "../../redux/datastat/dataStatThunk";
import {DataStatFilter} from "../../redux/datastat/types";

const columns: GridColDef<(DataStatSessions[])[number]>[] = [
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
    field: 'cur_pstate',
    headerName: 'Состояние',
    type: 'string',
    width: 120,
    disableColumnMenu: true,
  },
  {
    field: "show_date",
    headerName: 'Дата сеанса',
    width: 170,
    valueFormatter: (value) => { return DateUtils.formatIsoDateMin(value); },
    disableColumnMenu: true,
  },
  {
    field: 'zip_name',
    headerName: 'Имя zip-пакета',
    type: 'string',
    width: 270,
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
    field: 'ip',
    headerName: 'IP адрес',
    width: 120,
    disableColumnMenu: true,
  },

];

export interface DataStatGridProps {
  topPadding: number,
};

export default function DataStatGrid(props: DataStatGridProps) {
  const dispatch = useAppDispatch();
  const { selectedPage, currentSToken } = useAppSelector((state: RootState) => state.appStateState);
  const { filter }: { filter: DataStatFilter } = useAppSelector((state: RootState) => state.loadStatState);
  const { pagginator }: { pagginator: Pagginator } = useAppSelector((state: RootState) => state.loadStatState);
  const { sorter }: { sorter: Sorter } = useAppSelector((state: RootState) => state.loadStatState);
  const { response }: { response: DataStatListResponse } = useAppSelector((state: RootState) => state.loadStatState);
  const { isLoading }: { response: DataStatListResponse } = useAppSelector((state: RootState) => state.loadStatState);

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
    dispatch(setDataStatPagginator({
      page: paginationModel.page,
      limit: paginationModel.pageSize,
    } as Pagginator));
  }

  const setSorter = () => {
    dispatch(setDataStatSorter({
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
    if(selectedPage === 'datastat') {
      console.log(" --- selectedPage: " + selectedPage);
      if(!pagginator.page) {
        setPagginator();
      }
    }
  }, [selectedPage]);

  useEffect(() => {
    if(currentSToken && pagginator && pagginator.page !== undefined) {
      dispatch(loadDataStat(currentSToken, filter, pagginator, sorter));
    }
  }, [filter, pagginator, sorter]);

  return (
      <DGrid
          heightDeltaMinus={sizeConfigs.sidebar.height + sizeConfigs.statusBar.height + props.topPadding + 15}
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
  );
}