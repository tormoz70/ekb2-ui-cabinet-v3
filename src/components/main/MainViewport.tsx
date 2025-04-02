import {styled} from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";

const MainViewport = styled('div', {
    shouldForwardProp: (prop) => prop !== 'open'})<{
        open?: boolean;
}>(({theme, open}) => ({
    width: '100%',
    marginTop: `${sizeConfigs.sidebar.height}px`,
    position: 'relative',
    height: `calc(100vh - ${sizeConfigs.sidebar.height + sizeConfigs.statusBar.height}px)`,
    display: 'inline-block',
    padding: theme.spacing(1),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${sizeConfigs.sidebar.width}px`,
    ...(open && {
        width: `calc(100% - ${sizeConfigs.sidebar.width}px)`,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

export default MainViewport;