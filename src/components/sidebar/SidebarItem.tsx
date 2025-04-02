import {Divider, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material"
import { RouteType } from "../../routes/types"
import colorConfigs from "../../configs/colorConfigs"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { APP_PAGES, notFoundPage } from "../../routes/appPagesMap"

type Props = {
    item: RouteType,
    isChild: boolean
}

const SidebarItem = ({ item, isChild }: Props) => {
    const { selectedPage } = useSelector((state: RootState) => state.appStateState)
    const apage = APP_PAGES.get(item.state) || notFoundPage
    return (
        item.sidebarProps && item.path ? (
            <>
                <ListItemButton
                    component={Link}
                    to={item.path}
                    sx={{
                        "&: hover": {
                            backgroundColor: colorConfigs.sidebar.hoverBg
                        },
                        color: selectedPage === item.state ? colorConfigs.sidebar.activeColor : "unset",
                        backgroundColor: selectedPage === item.state ? colorConfigs.sidebar.activeBg : "unset",
                        paddingY: "3px",
                        paddingLeft: isChild ? "35px" : "5px",
                    }}
                >
                    <ListItemIcon sx={{
                        color: colorConfigs.sidebar.color,
                        minWidth: "30px"
                    }} >
                        {apage.icon && apage.icon}
                    </ListItemIcon>
                    <ListItemText
                        sx={{
                            paddingX: "1px"
                        }}
                        disableTypography
                        primary={
                            <Typography>
                                {item.sidebarProps.displayText}
                            </Typography>
                        }
                    />
                </ListItemButton>
                <Divider hidden={isChild}
                    sx={{
                            backgroundColor: colorConfigs.sidebar.dividerColor,
                         }}
                />
            </>
        ) : null
    )
}

export default SidebarItem