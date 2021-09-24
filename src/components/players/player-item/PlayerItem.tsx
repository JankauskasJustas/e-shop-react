import { Player } from "../../../types/Player";
import pencilSvg from "../../../assets/pencil.svg";
import trashSvg from "../../../assets/trash.svg";
import "./PlayerItem.css";
import React, { useState } from "react";
import PlayerForm from "./PlayerForm";

interface PlayerItemProps {
  player: Player;
  isActive: boolean;
  onItemClick: (playerId: number) => void;
  onDeleteClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    player: Player
  ) => void;
  onDataChanged: () => void;
}

const PlayerItem = (props: PlayerItemProps) => {
  const [isFormView, setIsFormView] = useState(false);
  const onEditClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setIsFormView(true);
  };

  if (isFormView) {
    return (
      <>
        <div className="players-container__item">
          <PlayerForm
            onCloseFormClick={(needsRefetch) => {
              if (needsRefetch) props.onDataChanged();
              setIsFormView(false);
            }}
            player={props.player}
          />
        </div>
      </>
    );
  } else {
    return (
      <div
        onClick={() => props.onItemClick(props.player.id as number)}
        tabIndex={0}
        className={`players-container__item ${
          props.isActive ? "players-container__item--active" : ""
        }`}
      >
        <div className="item__actions">
          <button
            onClick={onEditClick}
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
  }
};

export default PlayerItem;
