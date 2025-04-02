
export interface MenuItem {
    id: bigint,
    name: string,
    title: string,
    menuTitle: string,
    iconName: string,
    sortOrd: bigint,
    parentId: bigint,
    children : MenuItem[]
}
