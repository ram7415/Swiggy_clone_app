import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import veg1 from "../components/veg.png";
import nonVeg from "../components/nonVeg.png";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  console.log("check", { items });
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 py-4 m-2 border border-gray-200 rounded-lg bg-white overflow-hidden hover:shadow-lg transition duration-300 "
          style={{ minHeight: "12rem" }}
        >
          <div className="flex items-start">
            <div className="w-2/3 ">
              <img
                className="w-8"
                src={
                  item.card.info.itemAttribute.vegClassifier === "VEG"
                    ? veg1
                    : nonVeg
                }
              ></img>
              <h3 className="font-bold text-left mx-2 text-lg text-black">
                {item.card.info.name}
              </h3>
              <p className="text-gray-700 mb-2 text-left mx-2 font-bold">
                ₹
                {item.card.info.price
                  ? (item.card.info.price / 100).toFixed(2)
                  : (item.card.info.defaultPrice / 100).toFixed(2)}
              </p>
              <p className="text-lg text-gray-600 mb-4 break-words line-clamp-2">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-1/3 relative p-2">
              <div className="p-8 rounded-xl overflow-hidden">
                <img
                  src={CDN_URL + item.card.info.imageId}
                  alt={item.card.info.name}
                  className="w-full h-auto rounded-3xl"
                />
                <button
                  className="absolute bottom-1 right-14 p-2 rounded-lg bg-white text-green-500 font-bold shadow-md hover:bg-gray-200 transition duration-300"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
