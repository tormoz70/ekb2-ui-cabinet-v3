/**
 * perhaps this shold live in the store.js ?
 */
import { combineReducers } from 'redux';

import appStateReducer from './_main/faetures/appStateSlice';
import userProfileReducer from "./_main/faetures/userProfileSlice";
import userMenuReducer from "./_main/faetures/userMenuSlice";
import loadStatReducer from "./loadstat/faetures/loadStatSlice";

// export the reducers
export default combineReducers({
// system reducers:
    appStateState: appStateReducer,
    userProfileState: userProfileReducer,
    userMenuState: userMenuReducer,
// application reducers:
    loadStatState: loadStatReducer
})