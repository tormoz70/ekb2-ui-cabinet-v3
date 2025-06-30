import DBGFilter from "../../components/dgrid/DBGFilter";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import Box from "@mui/material/Box";
import {localConfigs} from "../../configs/localConfigs";
import {TextField} from "@mui/material";
import {DateUtils} from "../../utils/DateUtils";
import {useEffect, useState} from "react";
import {RootState, useAppDispatch, useAppSelector} from "../../redux/store";
import {DelayedLaunch} from "../../utils/DelayedLaunch";
import {ListItemDto, ListResponse, SsoUser} from "../../ekb2-api";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import RefreshIcon from '@mui/icons-material/Refresh';
import {loadDataStat, setDataStatFilter} from "../../redux/datastat/dataStatThunk";
import {DataStatFilter} from "../../redux/datastat/types";
import AsyncAutocomplete from "../../components/combobox/AsyncAutocomplete";
import {filmsApi} from "../../api/filmsApi";
import {sroomsApi} from "../../api/sroomsApi";
import {LoadStatFilter} from "../../redux/loadstat/types";
import {Pagginator} from "../../redux/types";
import {GridSortModel} from "@mui/x-data-grid";

export interface DataStatFilterFormProps {
    height: number,
}

const delayedSetDataStatFilter: DelayedLaunch = new DelayedLaunch();

export default function DataStatFilterForm (props: DataStatFilterFormProps) {
    const dispatch = useAppDispatch();
    const { currentSToken } = useAppSelector((state: RootState) => state.appStateState);
    const { user }: {user: SsoUser} = useAppSelector((state: RootState) => state.userProfileState)
    const { isLoading }: { isLoading: boolean } = useAppSelector((state: RootState) => state.dataStatState);
    const { filter }: { filter: DataStatFilter } = useAppSelector((state: RootState) => state.dataStatState);
    const { pagginator }: { pagginator: Pagginator } = useAppSelector((state: RootState) => state.dataStatState);
    const { sorter }: { sorter: GridSortModel } = useAppSelector((state: RootState) => state.dataStatState);

    const [refreshKey, setRefreshKey] = useState(0);
    const [selectedFilm, setSelectedFilm] = useState(null as ListItemDto | undefined);
    const [selectedFromDate, setSelectedFromDate] = useState(DateUtils.subtractDays(new Date(), 7));
    const [selectedToDate, setSelectedToDate] = useState(DateUtils.addDays(new Date(), 7));

    useEffect(() => {
        if(currentSToken) {
            //delayedSetDataStatFilter.runDelayed(() => {
                dispatch(loadDataStat(currentSToken, filter, pagginator, sorter));
            //}, 1000);
        }
    }, [filter, refreshKey]);

    useEffect(() => {
            dispatch(setDataStatFilter({
                ...filter,
                showDateFrom: DateUtils.toString(selectedFromDate)
            } as DataStatFilter));
    }, [selectedFromDate]);
    useEffect(() => {
        dispatch(setDataStatFilter({
            ...filter,
            showDateTo: DateUtils.toString(selectedToDate)
        } as DataStatFilter));
    }, [selectedToDate]);

    useEffect(() => {
        dispatch(setDataStatFilter({
            ...filter,
            selectedPuId: selectedFilm?.id
        } as DataStatFilter));
    }, [selectedFilm]);

    useEffect(() => {
        if(!filter.orgId) {
            dispatch(setDataStatFilter({
                ...filter,
                orgId: user.orgId
            } as DataStatFilter));
        }
    }, [user]);


    useEffect(() => {
        const timer = setTimeout(() => {
            fetchFilms(undefined, filter.selectedPuId).then((a) => {
                setSelectedFilm(a.data.length > 0 ? a.data[0] : null);
            });
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const fetchFilms = async (query, id): Promise<ListResponse> => {
        return await filmsApi(currentSToken, query, id);
    };
    const fetchSRooms = async (query) => {
        try {
            let currentOrgId: number = filter.orgId as number || user.orgId as number;
            return await sroomsApi(currentSToken, currentOrgId, query);
        } catch (error) {
            console.error('Error fetching srooms:', error);
            return [];
        }
    };

    const handleChangeShowDateFrom = (e) => {
        setSelectedFromDate(e);
    };

    const handleChangeShowDateTo = (e) => {
        setSelectedToDate(e);
    };

    const handleChangeOrgId = (e) => {
        dispatch(setDataStatFilter({
            ...filter,
            orgId: e.target.value
        } as DataStatFilter));
    };

    const handleFilmChange = (selected: ListItemDto) => {
        setSelectedFilm(selected);
        dispatch(setDataStatFilter({
            ...filter,
            selectedPuId: selected ? selected.id : undefined
        } as LoadStatFilter));
    };

    const handleSRoomChange = (selected: ListItemDto) => {
        dispatch(setDataStatFilter({
            ...filter,
            selectedSRoomId: selected ? selected.id : undefined
        } as LoadStatFilter));
    };

    var prevKey = 0;
    const handleRefresh = () => {
        setRefreshKey(prevKey => prevKey + 1);
    };

    return(
        <DBGFilter height={props.height} >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Box
                        sx={{
                            pt: 1,
                            display: 'flex',
                            gap: 1,
                            width: '100%',
                            overflowX: 'auto',
                            flexDirection: 'row',
                        }}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<RefreshIcon />}
                            onClick={handleRefresh}
                            disabled={isLoading}
                        >
                            {isLoading ? <CircularProgress size={24} /> : ''}
                        </Button>
                        <DateTimePicker
                            localeText={localConfigs.dateTimePicker}
                            ampm={false}
                            format="dd.MM.yyyy HH:mm"
                            label="Сеанс с"
                            value={selectedFromDate}
                            onChange={handleChangeShowDateFrom}
                        />
                        <DateTimePicker
                            localeText={localConfigs.dateTimePicker}
                            ampm={false}
                            format="dd.MM.yyyy HH:mm"
                            label="Сеанс по"
                            value={selectedToDate}
                            onChange={handleChangeShowDateTo}
                        />
                        <TextField
                            label="Демонстратор"
                            name="orgIdInput"
                            value={filter.orgId}
                            onChange={handleChangeOrgId}
                        />
                        <AsyncAutocomplete
                            width={150}
                            label="Кинозал"
                            fetchOptions={fetchSRooms}
                            value={filter.selectedSRoomId}
                            onChange={handleSRoomChange}
                        />
                        <AsyncAutocomplete
                            width={250}
                            dropdownWidth={'450px'}
                            label="Фильм"
                            fetchOptions={fetchFilms}
                            //value={filter.selectedPu}
                            initialValue={selectedFilm}
                            //initialValue={"121015625"}
                            //externalValue={selectedValue}
                            onChange={handleFilmChange}
                        />

                    </Box>
                </Box>
            </LocalizationProvider>
        </DBGFilter>
    );
}
