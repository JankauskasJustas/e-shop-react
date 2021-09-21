import { combineReducers } from "redux";
import playersReducer from "./players";
import activePlayerReducer from "./set-active-player";

const reducers = combineReducers({ players: playersReducer, activePlayerId: activePlayerReducer });

export default reducers;