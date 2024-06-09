export default function Shimmer() {
  return (
    <div className="carousel">
      {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
        <div className="carousel-card-skeleton" key={index}></div>
      ))}
    </div>
  );
}
