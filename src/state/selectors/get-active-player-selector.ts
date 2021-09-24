import { PlayersStore } from "../store";

export default function getActivePlayerSelector(state: PlayersStore) {
    return state.players.find((player) => player.id === state.activePlayerId);
}