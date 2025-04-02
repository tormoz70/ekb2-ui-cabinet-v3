import { ReactNode } from "react"

export type RouteType = {
    state: string,
    isIndex?: boolean,
    path?: string,
    child?: RouteType[],
    sidebarProps?: {
        displayText: string,
    }
}

export type PageType = {
    element: ReactNode,
    icon?: ReactNode
}

export interface UserMenuState {
    items: RouteType[],
    error: Error | undefined,
    isLoading: boolean,
    isLoaded: boolean
}

export const emptyUserMenu: UserMenuState = {
    items: [{
        state: "home",
        path: "*"
    }],
    error: undefined,
    isLoading: false,
    isLoaded: false
}
