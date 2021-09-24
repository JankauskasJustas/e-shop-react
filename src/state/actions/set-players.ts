import { Player } from "../../types/Player"
import { SET_PLAYERS } from "./action-types"

export const setStatePlayers = (players: Player[]) => {
    return {
        type: SET_PLAYERS,
        payload: players
    }
}