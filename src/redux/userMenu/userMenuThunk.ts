import { loadUserMenuApi } from "../../../api/userApi";
import { loadUserMenuFailed, loadUserMenuStart, loadUserMenuSuccess } from "../faetures/userMenuSlice";
import {RouteType} from "../../../routes/types";
import {MenuItem} from "../../../model/_main/EkbMenu";

export const loadUserMenu: any = () => async (dispatch: any) => {
    try {
        dispatch(loadUserMenuStart());
        const menuItems: MenuItem[] = await loadUserMenuApi();
        console.log("loadUserMenuApi-response: " + menuItems);
        const routes: RouteType[] = [];
        if(menuItems) {
            var addItems = (parent: MenuItem | null, items: MenuItem[], targetParent: RouteType | null, target: RouteType[]) => {
                if (!parent) {
                    target.push({
                        isIndex: true,
                        state: "home"
                    });
                } else {
                    target.push({
                        isIndex: true,
                        state: parent.name + ".index"
                    });
                }
                items.forEach((n: MenuItem) => {
                    const newRoute: RouteType = {
                        state: (targetParent ? targetParent.state + "." : "") + n.name,
                        path: (targetParent ? targetParent.path + "/" : "/") + n.name,
                        sidebarProps: {
                            displayText: n.menuTitle
                        }
                    };
                    target.push(newRoute);
                    if (n.children) {
                        newRoute.child = [];
                        addItems(n, n.children, newRoute, newRoute.child);
                    }
                });
            };
            addItems(null, menuItems, null, routes);
            console.log("routes loaded: ", routes);
        }
        dispatch(loadUserMenuSuccess(routes));
    } catch (error) {
        debugger;
        dispatch(loadUserMenuFailed(error));
    }
};

