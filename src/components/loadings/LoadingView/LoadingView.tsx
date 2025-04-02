import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { LoadingViewMsg, LoadingViewMsgLine, useStyles } from './style';
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

const DEFAULT_LOADING_MSG = 'Выполняется загрузка';
const DEFAULT_ACCEPT_MSG = 'Продолжить работу';

// interface LoadingViewProps {
//     loading?: boolean
//     msg?: string
// }

const LoadingView = () => {
    const classes = useStyles();

    const { blockingWaiting } = useSelector((state: RootState) => state.appStateState);


    return <Backdrop className={classes.backdrop} open={!!(blockingWaiting)}>
        {blockingWaiting && <CircularProgress color="inherit" />}
        <LoadingViewMsg>
            {blockingWaiting?.split("\n").map((i, key) => {
                return <LoadingViewMsgLine key={key}>{i}</LoadingViewMsgLine>;
            }) || (blockingWaiting ? DEFAULT_LOADING_MSG : '')}
        </LoadingViewMsg>
    </Backdrop>
};

export default LoadingView;