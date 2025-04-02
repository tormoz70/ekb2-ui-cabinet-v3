import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import styled from "styled-components";
import { MODAL_ZINDEX } from "../../../App.constants";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            color: '#ece0ff',
            display: 'flex',
            zIndex: MODAL_ZINDEX + 2,
            flexDirection: 'column',
            position: 'absolute',
        }
    })
);


export const LoadingViewMsg = styled.div`
    font-size: 16px;
    padding: 10px 0;
    overflow: auto;
    max-height: 80%;
    max-width: 80%;

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
`;

export const LoadingViewMsgLine = styled.div`
    display: flex;
    justify-content: center;
`;