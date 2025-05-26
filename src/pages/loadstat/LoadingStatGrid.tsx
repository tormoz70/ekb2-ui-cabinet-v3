import {GridColDef, GridSortModel} from '@mui/x-data-grid';
import DGrid from "../../components/dgrid/DGrid";
import {RootState, useAppDispatch, useAppSelector} from "../../redux/store";
import {useEffect, useMemo, useRef, useState} from "react";
import {
  loadLoadStat,
  setLoadStatPagginator,
  setLoadStatSorter
} from "../../redux/loadstat/loadStatThunk";
import {LoadStatFilter} from "../../redux/loadstat/types";
import {DateUtils} from "../../utils/DateUtils";
import {LoadStatListResponse, LoadStatLog} from "../../ekb2-api";
import sizeConfigs from "../../configs/sizeConfigs";
import {Pagginator} from "../../redux/types";

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

export interface LoadingStatGridProps {
  topPadding: number,
};

export default function LoadingStatGrid(props: LoadingStatGridProps) {
  const dispatch = useAppDispatch();
  const { selectedPage, currentSToken } = useAppSelector((state: RootState) => state.appStateState);
  const { filter }: { filter: LoadStatFilter } = useAppSelector((state: RootState) => state.loadStatState);
  const { pagginator }: { pagginator: Pagginator } = useAppSelector((state: RootState) => state.loadStatState);
  const { sorter }: { sorter: GridSortModel } = useAppSelector((state: RootState) => state.loadStatState);
  const { response }: { response: LoadStatListResponse } = useAppSelector((state: RootState) => state.loadStatState);
  const { isLoading }: { isLoading: boolean } = useAppSelector((state: RootState) => state.loadStatState);
  const { isLoaded }: { isLoaded: boolean } = useAppSelector((state: RootState) => state.loadStatState);

// --- pagination & sorting
  const rowCountRef = useRef(response?.totalCount || 0);
  const rowCount = useMemo(() => {
    if (response?.totalCount !== undefined) {
      rowCountRef.current = response.totalCount === 999999999 ? -1 : response.totalCount;
    }
    return rowCountRef.current;
  }, [response?.totalCount]);
// ------------------------------------------------------------------------------

  const setPagginator = (model) => {
    if(model) {
      dispatch(setLoadStatPagginator(model));
    }
  }

  const setSorter = (model) => {
    if(model) {
      dispatch(setLoadStatSorter(model));
    }
  }

  useEffect(() => {
    if(!isLoaded && selectedPage === 'loadstat') {
      if(currentSToken && pagginator && pagginator.page !== undefined) {
        dispatch(loadLoadStat(currentSToken, filter, pagginator, sorter));
      }
    }
  }, [selectedPage]);

  useEffect(() => {
    if(currentSToken && pagginator && pagginator.page !== undefined) {
      dispatch(loadLoadStat(currentSToken, filter, pagginator, sorter));
    }
  }, [pagginator, sorter]);

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
          paginationModel={pagginator}
          onPaginationModelChange={setPagginator}
          sortingMode="server"
          sortModel={sorter}
          onSortModelChange={setSorter}
      />
  );
}