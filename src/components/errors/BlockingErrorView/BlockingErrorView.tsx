import Backdrop from '@mui/material/Backdrop';
import { LoadingViewMsg, LoadingViewMsgLine, useStyles } from './style';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Button from '@mui/material/Button';
import {RootState, useAppDispatch, useAppSelector} from "../../../redux/store";
import {appStateSlice} from "../../../redux/appState/appStateSlice";

const DEFAULT_ACCEPT_MSG = 'Продолжить работу';


const BlockingErrorView = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();

    const { blockingError, blockingCallback } = useAppSelector((state: RootState) => state.appStateState);

    const onContinue = () => {
        dispatch(appStateSlice.actions.setBlockingError(undefined));
        if(blockingCallback) blockingCallback.call(this, []);
    }
    return <Backdrop className={classes.backdrop} open={!!(blockingError)}>
        <ErrorOutlineIcon fontSize="large" color="inherit" />
        <LoadingViewMsg>
            {(blockingError ? blockingError.message : "").split("\n").map((i, key) => {
                return <LoadingViewMsgLine key={key}>{i}</LoadingViewMsgLine>;
            })}
        </LoadingViewMsg>
        <Button variant="contained" color="primary" onClick={onContinue}>
            {DEFAULT_ACCEPT_MSG}
        </Button>
    </Backdrop>
};

export default BlockingErrorView;