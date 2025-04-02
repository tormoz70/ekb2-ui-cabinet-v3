/**
 * perhaps this shold live in the store.js ?
 */
import { combineReducers } from 'redux';

import appStateReducer from './appState/appStateSlice';
import userProfileReducer from "./userProfile/userProfileSlice";
import userMenuReducer from "./userMenu/userMenuSlice";
import loadStatReducer from "./loadstat/loadStatSlice";

// export the reducers
export default combineReducers({
// system reducers:
    appStateState: appStateReducer,
    userProfileState: userProfileReducer,
    userMenuState: userMenuReducer,
// application reducers:
    loadStatState: loadStatReducer
})