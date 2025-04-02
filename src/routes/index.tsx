import { ReactNode } from "react";
import { RouteType } from "./types";
import { Route } from "react-router-dom";
import PageWrapper from "../layout/PageWrapper";
import {APP_PAGES} from "./appPagesMap";

export const generateRoute = (routes: RouteType[]): ReactNode => {

    return routes.map((route, index) => (
        route.isIndex ? (
            <Route
                index
                path = {route.path ?? ""}
                element={<PageWrapper state={route.state}>
                    {APP_PAGES.get(route.state)?.element}
                </PageWrapper>}
                key={index}
            />
        ) : (
            <Route
                path={route.path ?? ""}
                element={
                    <PageWrapper state={route.child ? "" : route.state}>
                        {APP_PAGES.get(route.state)?.element}
                    </PageWrapper>
                }
                key={index}
            >
                {route.child && (
                    generateRoute(route.child)
                )}
            </Route>
        )
    ))
};

