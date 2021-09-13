import { Player } from "../../types/Player";

interface CarouselDto {
  players: Player[];
}

const Carousel = (props: CarouselDto) => {
  console.log("Carousel: ", props.players);
  return (
    <div className="carousel">
      <div className="carousel__actions">
        <button id="carousel__button--prev">&#10094;</button>
        <button id="carousel__button--next">&#10095;</button>
      </div>
    </div>
  );
};

export default Carousel;
