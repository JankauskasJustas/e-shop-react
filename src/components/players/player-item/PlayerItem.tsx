import { Player } from "../../../types/Player";
import pencilSvg from "../../../assets/pencil.svg";
import trashSvg from "../../../assets/trash.svg";
import "./PlayerItem.css";
import React from "react";

interface PlayerItemProps {
  player: Player;
  onItemClick: (player: Player) => void;
  onEditClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    player: Player
  ) => void;
  onDeleteClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    player: Player
  ) => void;
}

const PlayerItem = (props: PlayerItemProps) => {
  return (
    <div
      onClick={() => props.onItemClick(props.player)}
      tabIndex={0}
      className="players-container__item"
    >
      <div className="item__actions">
        <button
          onClick={(event) => props.onEditClick(event, props.player)}
          type="button"
          className="small-icon-btn small-margin-right"
        >
          <img className="pencil" src={pencilSvg} alt="Edit item" />
        </button>
        <button
          onClick={(event) => props.onDeleteClick(event, props.player)}
          type="button"
          className="small-icon-btn"
        >
          <img className="trash" src={trashSvg} alt="Delete item" />
        </button>
      </div>
      <img
        src={`data:;base64,${props.player.img}`}
        alt={props.player.fullName}
      />
      <span>{props.player.fullName}</span>
    </div>
  );
};

export default PlayerItem;
