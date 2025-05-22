import DBGFilter from "../../components/dgrid/DBGFilter";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import Box from "@mui/material/Box";
import {localConfigs} from "../../configs/localConfigs";
import {TextField} from "@mui/material";
import {DateUtils} from "../../utils/DateUtils";
import {useEffect, useState} from "react";
import {setLoadStatFilter} from "../../redux/loadstat/loadStatThunk";
import {LoadStatFilter} from "../../redux/loadstat/types";
import {RootState, useAppDispatch, useAppSelector} from "../../redux/store";
import {DelayedLaunch} from "../../utils/DelayedLaunch";
import {LoadStatListResponse} from "../../ekb2-api";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import RefreshIcon from '@mui/icons-material/Refresh';

// todo: засунуть настройки фильтра в сторе
interface LocalFilter {
    regFrom: Date;
    regTo?: Date | undefined;
    orgId: string;
    sessPrntOrgId: string;
    sessOrgId: string;
    packetName: string;
    curPstate: string;
    message: string;
    ip: string;
    loadMethod: string;
    isTest: string;
};

const defaultFilter = {
    regFrom: DateUtils.subtractDays(new Date(), 7),
    regTo: new Date(),
    orgId: '',
    sessPrntOrgId: '',
    sessOrgId: '',
    packetName: '',
    curPstate: '',
    message: '',
    ip: '',
    loadMethod: '',
    isTest: '',
} as LocalFilter;

export interface LoadingStatFilterFormProps {
    height: number,
};

const delayedSetFilter: DelayedLaunch = new DelayedLaunch();

export default function LoadingStatFilterForm (props: LoadingStatFilterFormProps) {
    const dispatch = useAppDispatch();
    const { currentSToken } = useAppSelector((state: RootState) => state.appStateState);
    const { isLoading }: { response: LoadStatListResponse } = useAppSelector((state: RootState) => state.loadStatState);
    const [refreshKey, setRefreshKey] = useState(0);

    const [localFilter, setLocalFilter] = useState<LocalFilter>(defaultFilter);

    useEffect(() => {
        if(currentSToken && localFilter.regFrom) {
            delayedSetFilter.runDelayed(() => {
                dispatch(setLoadStatFilter({
                    regFrom: DateUtils.toString(localFilter.regFrom),
                    regTo: DateUtils.toString(localFilter.regTo),
                    orgId: localFilter.orgId,
                    sessOrgId: localFilter.sessOrgId,
                    packetName: localFilter.packetName,
                    curPstate: localFilter.curPstate,
                } as LoadStatFilter));
            }, 1000)
        }
    }, [localFilter, refreshKey]);

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
                            } as LocalFilter)}
                        />
                        <TextField
                            label="Поставщик"
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
                            label="Демонстратор"
                            name="sessOrgIdInput"
                            value={localFilter.sessOrgId}
                            onChange={(e) => {
                                setLocalFilter({
                                    ...localFilter,
                                    sessOrgId: e.target.value
                                } as LocalFilter)
                            }}
                        />
                        <TextField
                            label="Пакет"
                            name="packetNameInput"
                            value={localFilter.packetName}
                            onChange={(e) => {
                                setLocalFilter({
                                    ...localFilter,
                                    packetName: e.target.value
                                } as LocalFilter)
                            }}
                        />
                        <TextField
                            label="Состояние"
                            name="curPstateFilter"
                            value={localFilter.curPstate}
                            onChange={(e) => {
                                setLocalFilter({
                                    ...localFilter,
                                    curPstate: e.target.value
                                } as LocalFilter)
                            }}
                        />
                    </Box>
                {/*    <Box sx={{*/}
                {/*        mt: 1,*/}
                {/*        display: 'flex',*/}
                {/*        flexDirection: 'row',*/}
                {/*        gap: 1*/}
                {/*    }}>*/}
                {/*    </Box>*/}
                </Box>
            </LocalizationProvider>
        </DBGFilter>
    );
}
