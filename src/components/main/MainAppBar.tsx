import {styled} from "@mui/material";
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const MainAppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    backgroundColor: colorConfigs.appBar.backgroundColor,
    height: `${sizeConfigs.sidebar.height}px`,
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        backgroundColor: colorConfigs.appBar.backgroundColor,
        width: `calc(100% - ${sizeConfigs.sidebar.width}px)`,
        marginLeft: `${sizeConfigs.sidebar.width}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default MainAppBar;