const ShimmerCarouselCard = () => {
  return (
    <div className="m-4 w-[225px] h-[270px] bg-[#fcfcfc] rounded-xl shadow-lg overflow-hidden mb-4 shimmer-card">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="rounded-lg w-full h-36 mb-2 shimmer"></div>
          <div className="h-6 bg-[#f5f5f3] mx-4 mb-2 rounded shimmer"></div>
          <div className="h-4 bg-[#f5f5f3] mx-3 mb-2 rounded shimmer"></div>
          <div className="h-4 bg-[#f5f5f3] mx-4 mb-2 rounded shimmer"></div>
        </div>
        <div className="mt-auto">
          <div className="h-4 bg-[#f5f5f3] mx-4 mb-2 rounded shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCarouselCard;
