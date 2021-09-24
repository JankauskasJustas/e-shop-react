import { Player } from './../../types/Player';
import { SET_PLAYERS } from "../actions/action-types";
import { AnyAction } from 'redux';

const playersReducer = (state: Player[] = [], action: AnyAction) => {
    switch (action.type) {
        case SET_PLAYERS: {
            return state = action.payload;
        }
        default: {
            return state;
        }
    }
}


export default playersReducer;