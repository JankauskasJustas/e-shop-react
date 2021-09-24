import { AnyAction } from "redux";
import { SET_ACTIVE_PLAYER_ID } from "../actions/action-types";

const activePlayerReducer = (state = 0, action: AnyAction) => {
    switch (action.type) {
        case SET_ACTIVE_PLAYER_ID: {
            return state = action.payload;
        }
        default: {
            return state;
        }
    }
}

export default activePlayerReducer;