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

export interface LocalFilter {
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

export interface LoadingStatFilterFormProps {
    height: number,
};

export default function LoadingStatFilterForm (props: LoadingStatFilterFormProps) {
    const dispatch = useAppDispatch();
    const { currentSToken } = useAppSelector((state: RootState) => state.appStateState);

    const delayedSetFilter: DelayedLaunch = new DelayedLaunch((value: string) => {
        setLocalFilter({
            ...localFilter,
            orgId: value
        } as LocalFilter)
    }, 1000)


    const defaultFilter = {
        regFrom: DateUtils.subtractDays(new Date(), 7),
        regTo: new Date(),
    } as LocalFilter;

    const [localFilter, setLocalFilter] = useState<LocalFilter>(defaultFilter);

    const setFilter = () => {
        dispatch(setLoadStatFilter({
            regFrom: DateUtils.toString(localFilter.regFrom),
            regTo: DateUtils.toString(localFilter.regTo),
            orgId: localFilter.orgId
        } as LoadStatFilter));
    }

    useEffect(() => {
        if(currentSToken) {
            setFilter();
        }
    }, [localFilter]);

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
                            } as LocalFilter)}
                        />
                        <TextField
                            label="Поставщик"
                            name="orgIdInput"
                            value={localFilter.orgId}
                            onChange={(e) => {
                                delayedSetFilter.runDelayed(e.target.value);
                            }}
                        />
                        <TextField
                            label="Демонстратор"
                            name="sessOrgIdInput"
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
                            name="packetNameInput"
                            // value={formData.password}
                            // onChange={handleChange}
                            // error={!!errors.password}
                            // helperText={errors.password}
                            //fullWidth
                            //required
                        />
                        <TextField
                            label="Zip-пакет"
                            name="zipPacketNameInput"
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
