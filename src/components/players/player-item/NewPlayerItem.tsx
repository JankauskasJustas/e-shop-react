import plusSvg from "../../../assets/plus.svg";
import "./PlayerItem.css";

interface NewPlayerItemProps {
  onNewItemClick: () => void;
}

const NewPlayerItem = (props: NewPlayerItemProps) => {
  return (
    <div
      onClick={() => props.onNewItemClick()}
      tabIndex={0}
      className="players-container__item item--new"
    >
      <img className="plus--small" src={plusSvg} alt="Add new item" />
      <span>Add new item</span>
    </div>
  );
};

export default NewPlayerItem;
