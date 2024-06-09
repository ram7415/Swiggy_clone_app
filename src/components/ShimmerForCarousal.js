import ShimmerCarouselCard from "./ShimmerCarouselCard";

const ShimmerCarousel = () => {
  return (
    <div className="flex overflow-x-scroll w-full h-[45vh]">
      {Array.from({ length: 8 }).map((_, index) => (
        <ShimmerCarouselCard key={index} />
      ))}
    </div>
  );
};

export default ShimmerCarousel;
