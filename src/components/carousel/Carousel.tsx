import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import getActivePlayerSelector from "../../state/selectors/get-active-player-selector";
import CarouselSlide from "./carousel-slide/CarouselSlide";
import "./Carousel.css";

const Carousel = () => {
  const [activeSlidePosition, setActiveSlidePosition] = useState(0);
  const activePlayer = useSelector(getActivePlayerSelector);

  useEffect(() => {
    setActiveSlidePosition(0);
  }, [activePlayer]);

  let totalSlides = activePlayer?.jerseys.length || 0;

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
        {activePlayer?.jerseys.map((jersey, index) => (
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
