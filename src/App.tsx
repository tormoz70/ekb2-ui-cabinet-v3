import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import {generateRoute} from "./routes";
import {RootState, useAppDispatch, useAppSelector} from "./redux/store";
import {useEffect} from "react";
import {restoreSToken} from "./redux/userProfile/userProfileThunk";


function App() {
    const dispatch = useAppDispatch();

    const menu: { items } = useAppSelector((state: RootState) => state.userMenuState);

    useEffect(() => {
        //console.log("init App!!!")
        // это точка входа!
        dispatch(restoreSToken());
    }, []);


    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout/>}>
              { generateRoute(menu.items) }
            </Route>
          </Routes>
        </BrowserRouter>
    );
}

export default App;
