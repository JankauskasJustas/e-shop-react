import { useDispatch, useSelector } from "react-redux";
import Repository from "../../api/Repository";
import { setActivePlayerId } from "../../state/actions";
import getActivePlayerSelector from "../../state/selectors/get-active-player-selector";
import { PlayersStore } from "../../state/store";
import { Player } from "../../types/Player";
import SearchInput from "../search-input/SearchInput";
import NewPlayerItem from "./player-item/NewPlayerItem";
import PlayerItem from "./player-item/PlayerItem";
import "./PlayerList.css";

interface PlayerListProps {
  refetchPlayers: () => void;
  filterPlayers: (searchQuery: string) => void;
}

const PlayerList = (props: PlayerListProps) => {
  const players = useSelector((state: PlayersStore) => {
    return state.players;
  });
  const activePlayer = useSelector(getActivePlayerSelector);
  const dispatch = useDispatch();

  return (
    <div className="text-centered">
      <SearchInput
        label="Enter player name to filter"
        onSearchChange={props.filterPlayers}
      />
      <div className="players-container">
        {players.map((player) => (
          <PlayerItem
            onItemClick={(player) =>
              dispatch(setActivePlayerId(player.id as number))
            }
            onDeleteClick={async (e, player) => {
              e.stopPropagation();
              await Repository.deletePlayer(player.id as number);
              props.refetchPlayers();
            }}
            onDataChanged={() => props.refetchPlayers()}
            key={player.id}
            player={player}
            isActive={activePlayer === player}
          />
        ))}
        <NewPlayerItem onDataChanged={() => props.refetchPlayers()} />
      </div>
    </div>
  );
};

export default PlayerList;
