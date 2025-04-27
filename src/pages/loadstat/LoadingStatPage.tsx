import Box from '@mui/material/Box';
import {GridColDef, GridSortModel} from '@mui/x-data-grid';
import DGrid from "../../components/dgrid/DGrid";
import {RootState, useAppDispatch, useAppSelector} from "../../redux/store";
import {ChangeEvent, useCallback, useEffect, useMemo, useRef, useState} from "react";
import {loadLoadStat, setLoadStatFilter, setLoadStatSorter} from "../../redux/loadstat/loadStatThunk";
import {LoadStatFilter, Sorter} from "../../redux/loadstat/types";
import {DateUtils} from "../../utils/DateUtils";
import {LoadStatListResponse, LoadStatLog, SsoUser} from "../../ekb2-api";
import sizeConfigs from "../../configs/sizeConfigs";
import DBGFilter from "../../components/dgrid/DBGFilter";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {localConfigs} from "../../configs/localConfigs";
import {TextField} from "@mui/material";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DelayedLaunch} from "../../utils/DelayedLaunch";

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
  const { user }: {user: SsoUser} = useAppSelector((state: RootState) => state.userProfileState);
  const { filter }: { filter: LoadStatFilter } = useAppSelector((state: RootState) => state.loadStatState);
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

  const delayedSetFilter: DelayedLaunch = new DelayedLaunch(() => {
    setFilter();
  }, 2000)

  interface LocalFilter {
    regFrom: Date;
    regTo?: Date | undefined;
    orgId?: string | undefined;
    sessPrntOrgId?: string | undefined;
    sessOrgId?: string | undefined;
    packetName?: string | undefined;
    curPstate?: string | undefined;
    message?: string | undefined;
    ip?: string | undefined;
    loadMethod?: string | undefined;
    isTest?: string | undefined;
  };

  const defaultFilter = {
    regFrom: DateUtils.subtractDays(new Date(), 7),
    regTo: new Date(),
  } as LocalFilter;

  const [localFilter, setLocalFilter] = useState<LocalFilter>(defaultFilter);

  const [orgIdSelected, setOrgIdSelected] = useState('');
  const orgIdHandleChange = useCallback((e) => setOrgIdSelected(e.target.value), []);

  const setFilter = () => {
    dispatch(setLoadStatFilter({
      page: paginationModel.page,
      limit: paginationModel.pageSize,
      regFrom: DateUtils.toString(localFilter.regFrom),
      regTo: DateUtils.toString(localFilter.regTo),
      orgId: localFilter.orgId
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
      //setFilter();
      delayedSetFilter.runDelayed();
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

  const loadingStatFilterProps = {
    height: 150,
  };

  interface LoadingStatFilterFormProps {
    height: number,
  }

  const LoadingStatFilterForm = function (props: LoadingStatFilterFormProps) {
    return(


        <DBGFilter height={props.height} >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Box sx={{
                display: 'block',
                flexDirection: 'column',
              }}>
                <Box
                    justifyContent="space-between"
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      gap: 1
                    }}>
                  <DateTimePicker
                    localeText={localConfigs.dateTimePicker}
                    ampm={false}
                    format="dd.MM.yyyy HH:mm"
                    label="Получен с"
                    value={localFilter.regFrom}
                    onChange={(newValue) => setLocalFilter({
                      ...localFilter,
                      regFrom: newValue
                    } as LocalFilter)}
                  />
                  <DateTimePicker
                      localeText={localConfigs.dateTimePicker}
                      ampm={false}
                      format="dd.MM.yyyy HH:mm"
                      label="Получен по"
                      value={localFilter.regTo}
                      onChange={(newValue) => setLocalFilter({
                          ...localFilter,
                          regTo: newValue
                        } as LocalFilter)
                      }
                  />
                  <TextField
                      label="Поставщик"
                      name="orgIdInput"
                      value={orgIdSelected}
                      onChange={orgIdHandleChange}
                  />
                  <TextField
                      label="Демонстратор"
                      name="Пакет"
                  />
                </Box>
                <Box sx={{
                  mt: 1,
                  mb: 1,
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 1
                }}>
                  <TextField
                      label="Пакет"
                      name="Пакет"
                      // value={formData.password}
                      // onChange={handleChange}
                      // error={!!errors.password}
                      // helperText={errors.password}
                      //fullWidth
                      //required
                  />
                  <TextField
                      label="Zip-пакет"
                      name="Пакет"
                      // value={formData.password}
                      // onChange={handleChange}
                      // error={!!errors.password}
                      // helperText={errors.password}
                      //required
                  />
                </Box>
              </Box>
          </LocalizationProvider>
        </DBGFilter>
    );
  }

  return (
      <Box >
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