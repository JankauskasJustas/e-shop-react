import Repository from "../../api/Repository";
import { Player } from "../../types/Player";
import NewPlayerItem from "./player-item/NewPlayerItem";
import PlayerItem from "./player-item/PlayerItem";
import "./PlayerList.css";

interface PlayerListProps {
  players: Player[];
  activePlayer: Player;
  onActivePlayerChange: (player: Player) => void;
  refetchPlayers: () => void;
}

const PlayerList = (props: PlayerListProps) => {
  console.log(props.activePlayer);
  return (
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
  );
};

export default PlayerList;
