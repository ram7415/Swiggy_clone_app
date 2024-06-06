const products = [
  {
    id: 1,
    name: "Apple",
    price: "$1.00 each",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Banana",
    price: "$0.50 each",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Carrot",
    price: "$0.30 each",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Tomato",
    price: "$0.70 each",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Broccoli",
    price: "$1.50 each",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Spinach",
    price: "$1.00 per bunch",
    img: "https://via.placeholder.com/150",
  },
];

const Grocery = () => {
  return (
    <div className="min-h-screen bg-[#FEFFD2] text-[#FF7D29]">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-6">Grocery Page</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#FFEEA9] p-6 rounded-lg shadow-md"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-32 object-cover mb-4 rounded"
              />
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="mb-2">{product.price}</p>
              <button className="bg-[#FF7D29] text-white px-4 py-2 rounded hover:bg-[#FF5722]">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grocery;
