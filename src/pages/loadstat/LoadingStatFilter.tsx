import DBGFilter from "../../components/dgrid/DBGFilter";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import Box from "@mui/material/Box";
import {localConfigs} from "../../configs/localConfigs";
import {TextField} from "@mui/material";
import {DateUtils} from "../../utils/DateUtils";
import {useEffect, useState} from "react";
import {loadLoadStat, setLoadStatFilter} from "../../redux/loadstat/loadStatThunk";
import {LoadStatFilter} from "../../redux/loadstat/types";
import {RootState, useAppDispatch, useAppSelector} from "../../redux/store";
import {DelayedLaunch} from "../../utils/DelayedLaunch";
import {LoadStatListResponse} from "../../ekb2-api";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import RefreshIcon from '@mui/icons-material/Refresh';
import {Pagginator} from "../../redux/types";
import {GridSortModel} from "@mui/x-data-grid";

// todo: засунуть настройки фильтра в сторе
// interface LocalFilter {
//     regFrom: Date;
//     regTo?: Date | undefined;
//     orgId: string;
//     sessPrntOrgId: string;
//     sessOrgId: string;
//     packetName: string;
//     curPstate: string;
//     message: string;
//     ip: string;
//     loadMethod: string;
//     isTest: string;
// };

// const defaultFilter = {
//     regFrom: DateUtils.subtractDays(new Date(), 7),
//     regTo: new Date(),
//     orgId: '',
//     sessPrntOrgId: '',
//     sessOrgId: '',
//     packetName: '',
//     curPstate: '',
//     message: '',
//     ip: '',
//     loadMethod: '',
//     isTest: '',
// } as LocalFilter;

export interface LoadingStatFilterFormProps {
    height: number,
};

const delayedSetFilter: DelayedLaunch = new DelayedLaunch();

export default function LoadingStatFilterForm (props: LoadingStatFilterFormProps) {
    const dispatch = useAppDispatch();
    const { currentSToken } = useAppSelector((state: RootState) => state.appStateState);
    const { isLoading }: { isLoading: boolean } = useAppSelector((state: RootState) => state.loadStatState);
    const { isLoaded }: { isLoaded: boolean } = useAppSelector((state: RootState) => state.loadStatState);
    const { filter }: { filter: LoadStatFilter } = useAppSelector((state: RootState) => state.loadStatState);
    const { pagginator }: { pagginator: Pagginator } = useAppSelector((state: RootState) => state.loadStatState);
    const { sorter }: { sorter: GridSortModel } = useAppSelector((state: RootState) => state.loadStatState);

    const [refreshKey, setRefreshKey] = useState(0);

    //const [localFilter, setLocalFilter] = useState<LocalFilter>(defaultFilter);

    // useEffect(() => {
    //     if(currentSToken && filter.regFrom) {
    //         delayedSetFilter.runDelayed(() => {
    //             // dispatch(setLoadStatFilter({
    //             //     regFrom: DateUtils.toString(filter.regFrom),
    //             //     regTo: DateUtils.toString(filter.regTo),
    //             //     orgId: filter.orgId,
    //             //     sessOrgId: filter.sessOrgId,
    //             //     packetName: filter.packetName,
    //             //     curPstate: filter.curPstate,
    //             // } as LoadStatFilter));
    //             dispatch(setLoadStatFilter(filter));
    //         }, 1000)
    //     }
    // }, [filter, refreshKey]);

    // const handleChangeFilter = (filter: LoadStatFilter) => {
    //     if (currentSToken && filter.regFrom) {
    //         delayedSetFilter.runDelayed(() => {
    //             dispatch(setLoadStatFilter(filter));
    //         }, 1000)
    //     }
    // };

    useEffect(() => {
        if(currentSToken) {
            delayedSetFilter.runDelayed(() => {
                dispatch(loadLoadStat(currentSToken, filter, pagginator, sorter));
            }, 1000);
        }
    }, [filter]);

    const handleChangeRegFrom = (e) => {
        dispatch(setLoadStatFilter({
            ...filter,
            regFrom: DateUtils.toString(e)
        } as LoadStatFilter));
    };

    const handleChangeRegTo = (e) => {
        dispatch(setLoadStatFilter({
            ...filter,
            regTo: DateUtils.toString(e)
        } as LoadStatFilter));
    };

    const handleChangeOrgId = (e) => {
        dispatch(setLoadStatFilter({
            ...filter,
            orgId: e.target.value
        } as LoadStatFilter));
    };
    const handleChangeSessOrgId = (e) => {
        dispatch(setLoadStatFilter({
            ...filter,
            sessOrgId: e.target.value
        } as LoadStatFilter));
    };
    const handleChangePacketName = (e) => {
        dispatch(setLoadStatFilter({
            ...filter,
            packetName: e.target.value
        } as LoadStatFilter));
    };
    const handleChangeCurPstate = (e) => {
        dispatch(setLoadStatFilter({
            ...filter,
            curPstate: e.target.value
        } as LoadStatFilter));
    };

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
                            {/*{isLoading ? <CircularProgress size={24} /> : ''}*/}
                        </Button>
                        <DateTimePicker
                            localeText={localConfigs.dateTimePicker}
                            ampm={false}
                            format="dd.MM.yyyy HH:mm"
                            label="Получен с"
                            value={DateUtils.fromString(filter.regFrom)}
                            onChange={handleChangeRegFrom}
                        />
                        <DateTimePicker
                            localeText={localConfigs.dateTimePicker}
                            ampm={false}
                            format="dd.MM.yyyy HH:mm"
                            label="Получен по"
                            value={DateUtils.fromString(filter.regTo)}
                            onChange={handleChangeRegTo}
                        />
                        <TextField
                            label="Поставщик"
                            name="orgIdInput"
                            value={filter.orgId}
                            onChange={handleChangeOrgId}
                        />
                        <TextField
                            label="Демонстратор"
                            name="sessOrgIdInput"
                            value={filter.sessOrgId}
                            onChange={handleChangeSessOrgId}
                        />
                        <TextField
                            label="Пакет"
                            name="packetNameInput"
                            value={filter.packetName}
                            onChange={handleChangePacketName}
                        />
                        <TextField
                            label="Состояние"
                            name="curPstateFilter"
                            value={filter.curPstate}
                            onChange={handleChangeCurPstate}
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
