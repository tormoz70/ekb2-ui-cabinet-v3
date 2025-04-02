import Backdrop from '@mui/material/Backdrop';
import React, { useEffect, useState } from 'react';
import { LoadingViewMsg, LoadingViewMsgLine, useStyles } from './style';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {setBlockingError} from "../../../redux/_main/faetures/appStateSlice";

const DEFAULT_ACCEPT_MSG = 'Продолжить работу';


const BlockingErrorView = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { blockingError, blockingCallback } = useSelector((state: RootState) => state.appStateState);

    const onContinue = () => {
        dispatch(setBlockingError(undefined));
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