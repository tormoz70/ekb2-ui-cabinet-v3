import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import DGrid from "../../components/dgrid/DGrid";
import {RootState, useAppDispatch, useAppSelector} from "../../redux/store";
import {useEffect} from "react";
import {loadLoadStat, setLoadStatFilter} from "../../redux/loadstat/loadStatThunk";
import {LoadStatFilter} from "../../redux/loadstat/types";
import {DateUtils} from "../../utils/DateUtils";
import {LoadStatListResponse, LoadStatLog, SsoUser} from "../../ekb2-api";

const columns: GridColDef<(LoadStatLog[])[number]>[] = [
  { field: 'id', headerName: 'ID пакета', width: 100 },
  {
    field: 'date_incoming',
    headerName: 'Дата поступления',
    width: 170,
  },
  {
    field: 'date_processing',
    headerName: 'Дата обработки',
    type: 'datetime',
    width: 170,
  },
  {
    field: 'org_id',
    headerName: 'ID поставщика',
    type: 'string',
    width: 80,
  },
  {
    field: 'sess_org_id',
    headerName: 'ID демонстратора',
    type: 'string',
    width: 80
    //valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
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
    type: 'string',
    width: 170,
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
  const { response }: { response: LoadStatListResponse } = useAppSelector((state: RootState) => state.loadStatState);

  useEffect(() => {
    if(selectedPage === 'loadstat') {
      console.log(" --- selectedPage: " + selectedPage);
      if(!filter.page) {
        const dateTo: Date = new Date();
        const dateFrom: Date = DateUtils.subtractDays(dateTo, 7);

        dispatch(setLoadStatFilter({
          page: 0,
          limit: 20,
          forceOrgId: user.orgId,
          regFrom: DateUtils.toString(dateFrom),
          regTo: DateUtils.toString(dateTo)
        } as LoadStatFilter));
      }
    }
  }, [selectedPage]);

  useEffect(() => {
    if(currentSToken && filter && filter.page !== undefined) {
      console.log(" --- loadStatFilter changed to: " + filter);
      dispatch(loadLoadStat(currentSToken, filter));
    }
  }, [filter]);

  return (
      <Box >
        <DGrid
            rows={response?.data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 50,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection={false}
            disableRowSelectionOnClick
        />
      </Box>
  );
}