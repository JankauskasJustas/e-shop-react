import { Player } from "../../types/Player";
import NewPlayerItem from "./player-item/NewPlayerItem";
import PlayerItem from "./player-item/PlayerItem";
import "./PlayerList.css";

interface PlayerListProps {
  players: Player[];
  onActivePlayerChange: (player: Player) => void;
}

const PlayerList = (props: PlayerListProps) => {
  return (
    <div className="players-container">
      {props.players.map((player) => (
        <PlayerItem
          onItemClick={(player) => props.onActivePlayerChange(player)}
          onEditClick={(e, player) => {
            e.stopPropagation();
            console.log("EDIT: ", e);
          }}
          onDeleteClick={(e, player) => {
            e.stopPropagation();
            console.log("Delete: ", e);
          }}
          key={player.id}
          player={player}
        />
      ))}
      <NewPlayerItem onNewItemClick={() => console.log("Add new Item!")} />
    </div>
  );
};

export default PlayerList;
