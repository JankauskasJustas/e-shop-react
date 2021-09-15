import Repository from "../../api/Repository";
import { Player } from "../../types/Player";
import SearchInput from "../search-input/SearchInput";
import NewPlayerItem from "./player-item/NewPlayerItem";
import PlayerItem from "./player-item/PlayerItem";
import "./PlayerList.css";

interface PlayerListProps {
  players: Player[];
  activePlayer: Player;
  onActivePlayerChange: (player: Player) => void;
  refetchPlayers: () => void;
  filterPlayers: (searchQuery: string) => void;
}

const PlayerList = (props: PlayerListProps) => {
  return (
    <div className="text-centered">
      <SearchInput
        label="Enter player name to filter"
        onSearchChange={(searchTerm: string) => props.filterPlayers(searchTerm)}
      />
      <div className="players-container">
        {props.players.map((player) => (
          <PlayerItem
            onItemClick={(player) => {
              props.onActivePlayerChange(player);
            }}
            onDeleteClick={async (e, player) => {
              e.stopPropagation();
              await Repository.deletePlayer(player.id as number);
              props.refetchPlayers();
            }}
            onDataChanged={() => props.refetchPlayers()}
            key={player.id}
            player={player}
            isActive={props.activePlayer === player}
          />
        ))}
        <NewPlayerItem onDataChanged={() => props.refetchPlayers()} />
      </div>
    </div>
  );
};

export default PlayerList;
