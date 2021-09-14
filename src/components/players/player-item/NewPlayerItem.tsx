import { useState } from "react";
import plusSvg from "../../../assets/plus.svg";
import PlayerForm from "./PlayerForm";
import "./PlayerItem.css";

interface NewPlayerItemProps {
  onDataChanged: () => void;
}

const NewPlayerItem = (props: NewPlayerItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div tabIndex={0} className="players-container__item item--new">
      {isEditing ? (
        <PlayerForm
          onCloseFormClick={(needsRefetch) => {
            if (needsRefetch) {
              props.onDataChanged();
            }

            setIsEditing(false);
          }}
        />
      ) : (
        <>
          <img
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              setIsEditing(!isEditing)
            }
            className="plus--small"
            src={plusSvg}
            alt="Add new item"
          />
          <span>Add new item</span>
        </>
      )}
    </div>
  );
};

export default NewPlayerItem;
