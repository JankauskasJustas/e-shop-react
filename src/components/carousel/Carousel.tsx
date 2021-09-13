import { Player } from "../../types/Player";
import "./Carousel.css";

interface CarouselDTO {
  activePlayer?: Player;
}

const Carousel = (props: CarouselDTO) => {
  return (
    <div className="content centered-grid">
      <div className="carousel">
        <div className="carousel__actions">
          <button className="carousel__button--prev">&#10094;</button>
          <button className="carousel__button--next">&#10095;</button>
        </div>
        {props.activePlayer?.jerseys.map((jersey, index) => (
          <div
            key={index}
            className={`carousel__item ${
              index === 0 ? "carousel__item--visible" : ""
            }`}
          >
            <img src={`data:;base64,${jersey.img}`} alt={jersey.title} />
            <h3>{jersey.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
