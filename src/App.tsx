import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import {generateRoute} from "./routes";
import {RootState, useAppDispatch} from "./redux/store";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {currentUser, restoreSToken} from "./redux/userProfile/userProfileThunk";
import {loadUserMenu} from "./redux/userMenu/userMenuThunk";
import {setBlockingError, setBlockingWaiting, setLoginOpened} from "./redux/appState/appStateSlice";
import {EkbApiError} from "./model/EkbApiError";


function App() {
    const dispatch = useAppDispatch();

    const { userMenuState } = useSelector((state: RootState) => state);
    const { currentSToken } = useSelector((state: RootState) => state.appStateState)
    const { userProfileState } = useSelector((state: RootState) => state)

    useEffect(() => {
        //console.log("init App!!!")
        // это точка входа!
        dispatch(restoreSToken());
    }, []);


    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout/>}>
              { generateRoute(userMenuState.items) }
            </Route>
          </Routes>
        </BrowserRouter>
    );
}

export default App;
