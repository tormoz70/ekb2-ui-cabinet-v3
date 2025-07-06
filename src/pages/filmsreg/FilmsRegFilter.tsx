import DBGFilter from "../../components/dgrid/DBGFilter";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {localConfigs} from "../../configs/localConfigs";
import {Box, Button, TextField, CircularProgress} from "@mui/material";
import {DateUtils} from "../../utils/DateUtils";
import {useEffect, useState} from "react";
import {RootState, useAppDispatch, useAppSelector} from "../../redux/store";
import {DelayedLaunch} from "../../utils/DelayedLaunch";
import {ListCommonDto, SsoUser} from "../../ekb2-api";
import RefreshIcon from '@mui/icons-material/Refresh';
import {loadFilmsReg, setFilmsRegFilter} from "../../redux/filmsreg/filmsRegThunk";
import {FilmsRegFilter} from "../../redux/filmsreg/types";
import AsyncAutocomplete from "../../components/combobox/AsyncAutocomplete";
import {Pagginator} from "../../redux/types";
import {GridSortModel} from "@mui/x-data-grid";

export interface FilmsRegFilterFormProps {
    height: number,
}

const delayedSetFilmsRegFilter: DelayedLaunch = new DelayedLaunch();

export default function FilmsRegFilterForm (props: FilmsRegFilterFormProps) {
    const dispatch = useAppDispatch();
    const { currentSToken } = useAppSelector((state: RootState) => state.appStateState);
    const { user }: {user: SsoUser} = useAppSelector((state: RootState) => state.userProfileState)
    const { isLoading }: { isLoading: boolean } = useAppSelector((state: RootState) => state.filmsRegState);
    const { filter }: { filter: FilmsRegFilter } = useAppSelector((state: RootState) => state.filmsRegState);
    const { pagginator }: { pagginator: Pagginator } = useAppSelector((state: RootState) => state.filmsRegState);
    const { sorter }: { sorter: GridSortModel } = useAppSelector((state: RootState) => state.filmsRegState);

    const [refreshKey, setRefreshKey] = useState(0);
    const [selectedHolding, setSelectedHolding] = useState(undefined as string | undefined);
    const [selectedOrg, setSelectedOrg] = useState(undefined as string | undefined);
    const [selectedFilm, setSelectedFilm] = useState(undefined as string | undefined);
    const [selectedFromDate, setSelectedFromDate] = useState(DateUtils.subtractDays(new Date(), 7));
    const [selectedToDate, setSelectedToDate] = useState(DateUtils.addDays(new Date(), 7));

    useEffect(() => {
        if(currentSToken) {
            dispatch(loadFilmsReg(currentSToken, filter, pagginator, sorter));
        }
    }, [filter, refreshKey]);

    useEffect(() => {
            dispatch(setFilmsRegFilter({
                ...filter,
                seldFrom: DateUtils.toString(selectedFromDate)
            } as FilmsRegFilter));
    }, [selectedFromDate]);
    useEffect(() => {
        dispatch(setFilmsRegFilter({
            ...filter,
            seldTo: DateUtils.toString(selectedToDate)
        } as FilmsRegFilter));
    }, [selectedToDate]);

    useEffect(() => {
        const _fetchData = async () => {
            dispatch(setFilmsRegFilter({
                ...filter,
                filmName: selectedFilm
            } as FilmsRegFilter));
        };
        delayedSetFilmsRegFilter.runDelayed(() => {
            _fetchData();
        }, 800);
    }, [selectedFilm]);

    useEffect(() => {
        const _fetchData = async () => {
            dispatch(setFilmsRegFilter({
                ...filter,
                orgId: selectedOrg
            } as FilmsRegFilter));
        };
        delayedSetFilmsRegFilter.runDelayed(() => {
            _fetchData();
        }, 800);

    }, [selectedOrg]);

    useEffect(() => {
        const _fetchData = async () => {
            dispatch(setFilmsRegFilter({
                ...filter,
                holding: selectedHolding
            } as FilmsRegFilter));
        };
        delayedSetFilmsRegFilter.runDelayed(() => {
            _fetchData();
        }, 800);

    }, [selectedHolding]);

    const handleChangeSeldFrom = (e) => {
        setSelectedFromDate(e);
    };

    const handleChangeSeldTo = (e) => {
        setSelectedToDate(e);
    };

    const handleChangeHolding = (e) => {
        setSelectedHolding(e.target.value);
    };

    const handleChangeOrg = (e) => {
        setSelectedOrg(e.target.value);
    };

    const handleFilmChange = (e) => {
        setSelectedFilm(e.target.value);
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
                            onChange={handleChangeSeldFrom}
                        />
                        <DateTimePicker
                            localeText={localConfigs.dateTimePicker}
                            ampm={false}
                            format="dd.MM.yyyy HH:mm"
                            label="Сеанс по"
                            value={selectedToDate}
                            onChange={handleChangeSeldTo}
                        />
                        <TextField
                            label="Киносеть"
                            name="holdingInput"
                            value={selectedHolding}
                            onChange={handleChangeHolding}
                            slotProps={{ inputLabel: { shrink: true } }}
                        />
                        <TextField
                            label="Демонстратор"
                            name="orgInput"
                            value={selectedOrg}
                            onChange={handleChangeOrg}
                            slotProps={{ inputLabel: { shrink: true } }}
                        />

                    </Box>
                </Box>
            </LocalizationProvider>
        </DBGFilter>
    );
}
