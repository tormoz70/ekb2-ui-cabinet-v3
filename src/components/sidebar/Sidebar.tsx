import {Box, Divider, Drawer, IconButton, List, Stack, styled, Typography, useTheme} from "@mui/material"
import sizeConfigs from "../../configs/sizeConfigs";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {setNavOpened} from "../../redux/_main/faetures/appStateSlice";

const DrawerHeader = styled('div')(({theme}) => ({
    backgroundColor: colorConfigs.appBar.backgroundColor,
    height: `${sizeConfigs.sidebar.height}px`,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Sidebar = () => {
    const dispatch = useDispatch();
    const {userMenuState} = useSelector((state: RootState) => state);
    const {navOpened} = useSelector((state: RootState) => state.appStateState)
    const theme = useTheme();

    const handleNavClose = () => {
        dispatch(setNavOpened(false));
    };

    return (
        <Box>
            <Box sx={{
                marginTop: `${sizeConfigs.sidebar.height}px`
            }}>
                <Drawer
                    sx={{
                        width: sizeConfigs.sidebar.width,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: sizeConfigs.sidebar.width,
                            height: `calc(100vh - ${sizeConfigs.statusBar.height}px)`,
                            boxSizing: "border-box",
                            borderRight: "0px",
                            backgroundColor: colorConfigs.sidebar.bg,
                            color: colorConfigs.sidebar.color
                        }
                    }}
                    variant="persistent"
                    anchor="left"
                    open={navOpened}
                >
                    <DrawerHeader>
                        <Stack
                            sx={{width: "100%", minHeight: "50px"}}
                            direction="row"
                            justifyContent="center"
                        >
                            <Box component="img" src={assets.images.logo} sx={{width: "62", height: "40"}}
                                 alt={"ЕАИС"}/>
                        </Stack>
                        <IconButton onClick={handleNavClose}>
                            {theme.direction === 'ltr' ? <ArrowLeftIcon sx={{color: "#FFFFFF"}}/> : <ArrowRightIcon/>}
                        </IconButton>
                    </DrawerHeader>
                    <Divider/>
                    <Box sx={{
                        overflow: 'auto'
                    }}>
                        <List disablePadding>
                            {userMenuState.items.map((route, index) => (
                                route.sidebarProps ? (
                                    route.child ? (
                                        <SidebarItemCollapse item={route} isChild={false} key={index}/>
                                    ) : (
                                        <SidebarItem item={route} isChild={false} key={index}/>
                                    )
                                ) : null
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Box>
        </Box>
    )
}

export default Sidebar;