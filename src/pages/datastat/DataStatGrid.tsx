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
  { field: 'sessId',
    headerName: 'ID сеанса',
    width: 100,
    disableColumnMenu: true,
    headerClassName: 'super-app-theme--header'
  },
  {
    field: 'regionRev',
    headerName: 'Регион',
    type: 'string',
    width: 180,
    description: 'Регион',
    disableColumnMenu: true,
  },
  {
    field: 'nasPunktRev',
    headerName: 'Город',
    type: 'string',
    width: 150,
    description: 'Город',
    disableColumnMenu: true,
  },
  {
    field: 'orgId',
    headerName: 'ID демонстратора',
    type: 'string',
    width: 80,
    description: 'ID демонстратора',
    disableColumnMenu: true,
  },
  {
    field: 'org',
    headerName: 'Демонстратор',
    type: 'string',
    width: 120,
    description: 'Демонстратор',
    disableColumnMenu: true,
  },
  {
    field: 'sroomName',
    headerName: 'Кинозал',
    type: 'string',
    width: 100,
    description: 'Кинозал',
    disableColumnMenu: true,
  },
  {
    field: 'showDate',
    headerName: 'Дата/время сеанса',
    type: 'date',
    width: 170,
    valueFormatter: (value) => { return DateUtils.formatIsoDate(value); },
    disableColumnMenu: true,
    description: 'Дата/время сеанса',
  },
  {
    field: 'puNum',
    headerName: 'Номер ПУ',
    type: 'string',
    width: 100,
    description: 'Номер ПУ',
    disableColumnMenu: true,
  },
  {
    field: 'puNumFound',
    headerName: 'Номер ПУ (по реестру)',
    type: 'string',
    width: 100,
    description: 'Номер ПУ (по реестру)',
    disableColumnMenu: true,
  },
  {
    field: 'sessTitle',
    headerName: 'Название сеанса',
    type: 'string',
    width: 180,
    description: 'Название сеанса',
    disableColumnMenu: true,
  },
  {
    field: 'filmNameOrig',
    headerName: 'Название фильма',
    type: 'string',
    width: 180,
    description: 'Название фильма по реестру',
    disableColumnMenu: true,
  },
  {
    field: 'tckts',
    headerName: 'Билетов',
    type: 'number',
    width: 70,
    disableColumnMenu: true,
    description: 'Кол-во проданных билетов',
  },
  {
    field: 'tcktsStorn',
    headerName: 'Возвратов',
    type: 'number',
    width: 70,
    disableColumnMenu: true,
    description: 'Кол-во возвращенных билетов',
  },
  {
    field: 'tcktsFree',
    headerName: 'Бесплатных',
    type: 'number',
    width: 70,
    disableColumnMenu: true,
    description: 'Кол-во бесплатных билетов',
  },
  {
    field: 'summ',
    headerName: 'Выручка',
    type: 'number',
    //valueFormatter: (params) => `$${params.value.toFixed(2)}`,
    width: 70,
    disableColumnMenu: true,
    description: 'Сумма выручки',
  },
  {
    field: 'summDisc',
    headerName: 'Скидка',
    type: 'number',
    width: 70,
    disableColumnMenu: true,
    description: 'Сумма скидки',
  },
  {
    field: 'priceFact',
    headerName: 'Сред. цена',
    type: 'number',
    width: 70,
    disableColumnMenu: true,
    description: 'Средняя цена билета',
  },

];

export interface DataStatGridProps {
  topPadding: number,
};

export default function DataStatGrid(props: DataStatGridProps) {
  const dispatch = useAppDispatch();
  const { selectedPage, currentSToken } = useAppSelector((state: RootState) => state.appStateState);
  const { filter }: { filter: DataStatFilter } = useAppSelector((state: RootState) => state.dataStatState);
  const { pagginator }: { pagginator: Pagginator } = useAppSelector((state: RootState) => state.dataStatState);
  const { sorter }: { sorter: Sorter } = useAppSelector((state: RootState) => state.dataStatState);
  const { response }: { response: DataStatListResponse } = useAppSelector((state: RootState) => state.dataStatState);
  const { isLoading }: { response: DataStatListResponse } = useAppSelector((state: RootState) => state.dataStatState);

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