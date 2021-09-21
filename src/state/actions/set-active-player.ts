import { SET_ACTIVE_PLAYER_ID } from "./action-types";

export const setActivePlayerId = (id: number) => {
    return {
        type: SET_ACTIVE_PLAYER_ID,
        payload: id
    }
}