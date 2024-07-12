import { SWIGGY_CAROUSEL_URL } from "../utils/constants";

const Carousel = ({ cardData }) => {
  const { imageId } = cardData;
  if (!imageId) {
    return null; // Or return a placeholder image or an empty div
  }
  return (
    <>
      <div className="carousel-card ">
        <img src={SWIGGY_CAROUSEL_URL + imageId} alt="" />
      </div>
    </>
  );
};

export default Carousel;
