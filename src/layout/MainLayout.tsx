import {
    Box,
    CssBaseline,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import Sidebar from "../components/sidebar/Sidebar";
import {Outlet} from "react-router-dom";
import {RootState, useAppDispatch, useAppSelector} from "../redux/store";
import {appStateSlice} from "../redux/appState/appStateSlice";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import MainViewport from "../components/main/MainViewport";
import MainAppBar from "../components/main/MainAppBar";
import LoginDialog from "../components/login/Login";
import LoadingView from "../components/loadings/LoadingView/LoadingView";
import BlockingErrorView from "../components/errors/BlockingErrorView/BlockingErrorView";
import MainBootstrap from "./MainBootstrap";
import MainStatusBar from "../components/main/MainStatusBar";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {useState} from "react";
import NotificationsModal from "../components/modals/NotificationsModal";


const MainLayout = () => {
    const dispatch = useAppDispatch();
    const { navOpened } = useAppSelector((state: RootState) => state.appStateState)
    const { user } = useAppSelector((state: RootState) => state.userProfileState)
    const [ notificationsOpen, setNotificationsOpen ] = useState(false)

    const handleNavOpen = () => {
        dispatch(appStateSlice.actions.setNavOpened(true));
    };

    const handleLoginOpen = () => {
        dispatch(appStateSlice.actions.setLoginOpened(true));
    };
    const showNotifications = () => {
        setNotificationsOpen(true);
    };

    const notificationsClose = () => {
        setNotificationsOpen(false);
    }

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                width: "100%"
            }}>
                <CssBaseline/>
                <MainBootstrap/>
                <LoadingView/>
                <BlockingErrorView/>
                <MainAppBar position="fixed" open={navOpened}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleNavOpen}
                            edge="start"
                            sx={{mr: 2, ...(navOpened && {display: 'none'})}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" align='left' noWrap component="div" sx={{flexGrow: 1}}>
                            Кабинет [{user.orgId}-{user.orgName}]
                        </Typography>
                        <NotificationsModal openModal={notificationsOpen} onClose={notificationsClose}/>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{mr: 5}}
                            onClick={showNotifications}
                        >
                            <NotificationsNoneIcon/>
                        </IconButton>
                        <LoginDialog/>
                        <Typography variant="h6" align='right' noWrap component="div" sx={{flexGrow: 0}}>
                            <div>{user.login}</div>
                        </Typography>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{ml: 2}}
                            onClick={handleLoginOpen}
                        >
                            <LogoutIcon/>
                        </IconButton>
                    </Toolbar>
                </MainAppBar>
                <Sidebar/>
                {/*<Divider/>*/}
                <MainViewport open={navOpened}>
                    <Box component="main">
                        <Outlet/>
                    </Box>
                </MainViewport>
            </Box>
            <MainStatusBar>
                <Typography>Status</Typography>
            </MainStatusBar>
        </Box>
    )
}

export default MainLayout;