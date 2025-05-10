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
import {ListCommonDto, SsoUser} from "../../ekb2-api";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import RefreshIcon from '@mui/icons-material/Refresh';
import {setDataStatFilter} from "../../redux/datastat/dataStatThunk";
import {DataStatFilter} from "../../redux/datastat/types";
import AsyncAutocomplete from "../../components/combobox/AsyncAutocomplete";
import {filmsApi} from "../../api/filmsApi";

interface LocalFilter {
    showDateFrom: Date;
    showDateTo?: Date | undefined;
    orgId: string;
    sroomId: number;
    selectedPuId: number | undefined;
};

export interface DataStatFilterFormProps {
    height: number,
};

const delayedSetFilter: DelayedLaunch = new DelayedLaunch();

export default function DataStatFilterForm (props: DataStatFilterFormProps) {
    const dispatch = useAppDispatch();
    const { currentSToken } = useAppSelector((state: RootState) => state.appStateState);
    const { user }: {user: SsoUser} = useAppSelector((state: RootState) => state.userProfileState)
    const { isLoading }: { isLoading: boolean } = useAppSelector((state: RootState) => state.loadStatState);
    const [refreshKey, setRefreshKey] = useState(0);
    const [selectedFilm, setSelectedFilm] = useState<ListCommonDto>(null);

    const defaultFilter = {
        showDateFrom: DateUtils.subtractDays(new Date(), 7),
        showDateTo: DateUtils.addDays(new Date(), 2),
        orgId: user.orgId,
        sroomId: 0,
        selectedPuId: undefined,
    } as LocalFilter;

    const [localFilter, setLocalFilter] = useState<LocalFilter>(defaultFilter);

    useEffect(() => {
        if(currentSToken && localFilter.showDateFrom) {
            delayedSetFilter.runDelayed(() => {
                dispatch(setDataStatFilter({
                    showDateFrom: DateUtils.toString(localFilter.showDateFrom),
                    showDateTo: DateUtils.toString(localFilter.showDateTo),
                    orgId: localFilter.orgId || user.orgId,
                    sroomId: localFilter.sroomId,
                    selectedPuId: localFilter.selectedPuId,
                } as DataStatFilter));
            }, 1000)
        }
    }, [localFilter, refreshKey]);

    const handleRefresh = () => {
        setRefreshKey(prevKey => prevKey + 1);
    };

    const fetchFilms = async (query) => {
        try {
            return await filmsApi(currentSToken, query);
        } catch (error) {
            console.error('Error fetching users:', error);
            return [];
        }
    };

    const handleFilmChange = (selected: ListCommonDto) => {
        setSelectedFilm(selected)
        setLocalFilter({
            ...localFilter,
            selectedPuId: selected ? selected.id : undefined
        } as LocalFilter)
        console.log('Selected IDs:', selected);
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
                        <AsyncAutocomplete
                            label="Фильм"
                            fetchOptions={fetchFilms}
                            value={selectedFilm}
                            onChange={handleFilmChange}
                        />

                        <DateTimePicker
                            localeText={localConfigs.dateTimePicker}
                            ampm={false}
                            format="dd.MM.yyyy HH:mm"
                            label="Сеанс с"
                            value={localFilter.showDateFrom}
                            onChange={(newValue) => setLocalFilter({
                                ...localFilter,
                                regFrom: newValue
                            } as LocalFilter)}
                        />
                        <DateTimePicker
                            localeText={localConfigs.dateTimePicker}
                            ampm={false}
                            format="dd.MM.yyyy HH:mm"
                            label="Сеанс по"
                            value={localFilter.showDateTo}
                            onChange={(newValue) => setLocalFilter({
                                ...localFilter,
                                regTo: newValue
                            } as LocalFilter)}
                        />
                        <TextField
                            label="Демонстратор"
                            name="orgIdInput"
                            value={localFilter.orgId}
                            onChange={(e) => {
                                setLocalFilter({
                                    ...localFilter,
                                    orgId: e.target.value
                                } as LocalFilter)
                            }}
                        />
                        <TextField
                            label="Кинозал"
                            name="sroomIdInput"
                            value={localFilter.sroomId}
                            onChange={(e) => {
                                setLocalFilter({
                                    ...localFilter,
                                    sroomId: e.target.value
                                } as LocalFilter)
                            }}
                        />
                        {/*<TextField*/}
                        {/*    label="Фильм"*/}
                        {/*    name="filmInput"*/}
                        {/*    value={localFilter.film}*/}
                        {/*    onChange={(e) => {*/}
                        {/*        setLocalFilter({*/}
                        {/*            ...localFilter,*/}
                        {/*            film: e.target.value*/}
                        {/*        } as LocalFilter)*/}
                        {/*    }}*/}
                        {/*/>*/}
                    </Box>
                </Box>
            </LocalizationProvider>
        </DBGFilter>
    );
}
