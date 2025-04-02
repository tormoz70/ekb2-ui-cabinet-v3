
export type AppState = {
    currentSToken: string | undefined,
    selectedPage: string | undefined,
    navOpened: boolean,
    loginOpened: boolean,
    loginError: Error | undefined,
    blockingWaiting: string | undefined,
    blockingError: Error | undefined,
    blockingCallback: Function | undefined,
    mainViewportHeight: number | undefined
}

export const emptyState: AppState = {
    currentSToken: undefined,
    selectedPage: undefined,
    navOpened: true,
    loginOpened: false,
    loginError: undefined,
    blockingWaiting: undefined,
    blockingError: undefined,
    blockingCallback: undefined,
    mainViewportHeight: undefined
}
