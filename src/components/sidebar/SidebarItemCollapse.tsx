import { useEffect, useState } from 'react'
import { RouteType } from '../../routes/types'
import {Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material'
import colorConfigs from '../../configs/colorConfigs'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SidebarItem from './SidebarItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { APP_PAGES, notFoundPage } from '../../routes/appPagesMap'

type Props = {
    item: RouteType,
    isChild: boolean
}

const SidebarItemCollapse = ({ item, isChild }: Props) => {
    const [open, setOpen] = useState(false)

    const { selectedPage } = useSelector((state: RootState) => state.appStateState)

    useEffect(() => {
        if (selectedPage?.includes(item.state)) {
            setOpen(true);
        }
    }, [selectedPage, item]);
    
    const apage = APP_PAGES.get(item.state) || notFoundPage
    
    return (
        item.sidebarProps ? (
            <>
                <ListItemButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        "&: hover": {
                            backgroundColor: colorConfigs.sidebar.hoverBg
                        },
                        paddingY: "3px",
                        paddingLeft: isChild ? "35px" : "5px",
                    }}
                >
                    <ListItemIcon sx={{
                        color: colorConfigs.sidebar.color,
                        minWidth: "30px"
                    }}>
                        {apage.icon && apage.icon}
                    </ListItemIcon>
                    <ListItemText
                        sx={{
                            paddingX: "1px"
                        }}
                        disableTypography
                        primary={
                            <Typography sx={{

                            }}>
                                {item.sidebarProps.displayText}
                            </Typography>
                        }
                    />
                    {open ? <ArrowDropDownIcon/> : <ArrowRightIcon/>}
                </ListItemButton>
                <Collapse in={open} timeout="auto">
                    <List>
                        {item.child?.map((route, index) => (
                            route.sidebarProps ? (
                                route.child ? (
                                    <SidebarItemCollapse item={route} isChild={true} key={index}/>
                                ) : (
                                    <SidebarItem item={route} isChild={true} key={index}/>
                                )
                            ) : null
                        ))}
                    </List>
                </Collapse>
                <Divider sx={{
                    backgroundColor: colorConfigs.sidebar.dividerColor,
                }}
                />
            </>
        ) : null
    )
}

export default SidebarItemCollapse