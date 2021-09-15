import { useEffect, useState } from "react";
import { Player } from "../../types/Player";
import CarouselSlide from "./carousel-slide/CarouselSlide";
import "./Carousel.css";

interface CarouselDTO {
  activePlayer?: Player;
}

const Carousel = (props: CarouselDTO) => {
  const [activeSlidePosition, setActiveSlidePosition] = useState(0);

  useEffect(() => {
    setActiveSlidePosition(0);
  }, [props.activePlayer]);

  let totalSlides = props.activePlayer?.jerseys.length || 0;

  const onPreviousSlideClick = () => {
    if (activeSlidePosition === 0) {
      setActiveSlidePosition(totalSlides - 1);
    } else {
      setActiveSlidePosition(activeSlidePosition - 1);
    }
  };

  const onNextSlideClick = () => {
    if (activeSlidePosition === totalSlides - 1) {
      setActiveSlidePosition(0);
    } else {
      setActiveSlidePosition(activeSlidePosition + 1);
    }
  };

  return (
    <div className="content centered-grid">
      <div className="carousel">
        <div className="carousel__actions">
          <button
            onClick={() => onPreviousSlideClick()}
            className="carousel__button--prev"
          >
            &#10094;
          </button>
          <button
            onClick={() => onNextSlideClick()}
            className="carousel__button--next"
          >
            &#10095;
          </button>
        </div>
        {props.activePlayer?.jerseys.map((jersey, index) => (
          <CarouselSlide
            isActive={index === activeSlidePosition}
            key={index}
            jersey={jersey}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
