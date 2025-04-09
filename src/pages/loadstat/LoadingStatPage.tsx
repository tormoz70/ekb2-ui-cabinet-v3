import Box from '@mui/material/Box';
import {GridColDef, GridSortModel} from '@mui/x-data-grid';
import DGrid from "../../components/dgrid/DGrid";
import {RootState, useAppDispatch, useAppSelector} from "../../redux/store";
import {useEffect, useMemo, useRef, useState} from "react";
import {loadLoadStat, setLoadStatFilter, setLoadStatSorter} from "../../redux/loadstat/loadStatThunk";
import {LoadStatFilter, Sorter} from "../../redux/loadstat/types";
import {DateUtils} from "../../utils/DateUtils";
import {LoadStatListResponse, LoadStatLog, SsoUser} from "../../ekb2-api";
import {loadStatSlice} from "../../redux/loadstat/loadStatSlice";


const columns: GridColDef<(LoadStatLog[])[number]>[] = [
  { field: 'id', headerName: 'ID пакета', width: 100 },
  {
    field: 'date_incoming',
    headerName: 'Дата поступления',
    width: 170,
    valueFormatter: (value) => { return DateUtils.formatIsoDate(value); },
  },
  {
    field: 'date_processing',
    headerName: 'Дата обработки',
    width: 170,
    valueFormatter: (value) => { return DateUtils.formatIsoDate(value); },
  },
  {
    field: 'org_id',
    headerName: 'ID поставщика',
    type: 'string',
    width: 80,
    description: 'ID поставщика',
  },
  {
    field: 'sess_org_id',
    headerName: 'ID демонстратора',
    type: 'string',
    width: 80,
    description: 'ID демонстратора',
  },
  {
    field: 'packet_name',
    headerName: 'Имя xml-пакета',
    type: 'string',
    width: 270,
  },
  {
    field: "show_date",
    headerName: 'Дата сеанса',
    width: 170,
    valueFormatter: (value) => { return DateUtils.formatIsoDate(value); },
  },
  {
    field: 'zip_name',
    headerName: 'Имя zip-пакета',
    type: 'string',
    width: 270,
  },

];

export default function LoadingStatPage() {
  const dispatch = useAppDispatch();
  const { selectedPage, currentSToken } = useAppSelector((state: RootState) => state.appStateState);
  const { user }: {user: SsoUser} = useAppSelector((state: RootState) => state.userProfileState);
  const { filter }: { filter: LoadStatFilter } = useAppSelector((state: RootState) => state.loadStatState);
  const { sorter }: { sorter: Sorter } = useAppSelector((state: RootState) => state.loadStatState);
  const { response }: { response: LoadStatListResponse } = useAppSelector((state: RootState) => state.loadStatState);
  const { isLoading }: { response: LoadStatListResponse } = useAppSelector((state: RootState) => state.loadStatState);

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

  const setFilter = () => {
    const dateTo: Date = new Date();
    const dateFrom: Date = DateUtils.subtractDays(dateTo, 7);
    dispatch(setLoadStatFilter({
      page: paginationModel.page,
      limit: paginationModel.pageSize,
      forceOrgId: user.orgId,
      regFrom: DateUtils.toString(dateFrom),
      regTo: DateUtils.toString(dateTo)
    } as LoadStatFilter));
  }

  const setSorter = () => {
    dispatch(setLoadStatSorter({
      fieldName: sortModel[0]?.field,
      direction: sortModel[0]?.sort
    } as Sorter));
  }

  useEffect(() => {
    if(currentSToken && filter && filter.page !== undefined) {
      setFilter();
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
      if(!filter.page) {
        setFilter();
      }
    }
  }, [selectedPage]);

  useEffect(() => {
    if(currentSToken && filter && filter.page !== undefined) {
      dispatch(loadLoadStat(currentSToken, filter, sorter));
    }
  }, [filter, sorter]);

  // todo:
  // 1. оформить headers,
  // 2. сделать isLoading,
  // 3. сделать сортировку на сервере
  return (
      <Box >
        <DGrid
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
            localeText={{
              MuiTablePagination: {
                labelRowsPerPage: "На странице",
                labelDisplayedRows: ({ from, to, count }) =>
                    `${from} - ${to} из ${count === -1 ? `более чем ${to}` : count}`,
              },
            }}
        />
      </Box>
  );
}