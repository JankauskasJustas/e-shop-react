import { Player } from './../types/Player';
import { createStore } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

export interface PlayersStore {
    players: Player[];
    activePlayerId: number;
}

export default createStore(reducers, composeWithDevTools());