import { Jersey } from "../../../types/Player";
import "./CarouselSlide.css";

interface CarouselSlideProps {
  jersey: Jersey;
  isActive: boolean;
}

const CarouselSlide = (props: CarouselSlideProps) => {
  return (
    <div
      className={`carousel__item ${
        props.isActive ? "carousel__item--visible" : ""
      }`}
    >
      <img src={`data:;base64,${props.jersey.img}`} alt={props.jersey.title} />
      <h3>{props.jersey.title}</h3>
    </div>
  );
};

export default CarouselSlide;
