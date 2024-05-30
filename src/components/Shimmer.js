const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-4 shimmer-container">
      {[...Array(11)].map((_, index) => (
        <div
          key={index}
          className="w-40 h-24 bg-gray-200 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:1000px_100%] animate-shimmer"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
