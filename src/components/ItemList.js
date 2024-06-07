import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    // <div>
    //   {items.map((item) => (
    //     <div
    //       data-testid="foodItems"
    //       key={item.card.info.id}
    //       className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
    //     >
    //       <div className="w-9/12">
    //         <div className="py-2">
    //           <span>{item.card.info.name}</span>
    //           <span>
    //             - ₹
    //             {item.card.info.price
    //               ? item.card.info.price / 100
    //               : item.card.info.defaultPrice / 100}
    //           </span>
    //         </div>
    //         <p className="text-xs">{item.card.info.description}</p>
    //       </div>
    //       <div className="w-3/12 p-4">
    //         <div className="absolute">
    //           <button
    //             className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
    //             onClick={() => handleAddItem(item)}
    //           >
    //             Add +
    //           </button>
    //         </div>
    //         <img src={CDN_URL + item.card.info.imageId} className="w-full" />
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 py-4 m-2 border border-gray-200 rounded-lg bg-white overflow-hidden hover:shadow-lg transition duration-300 hover:bg-orange-200"
          style={{ minHeight: "10rem" }}
        >
          <div className="flex items-start">
            <div className="w-2/3 pr-4">
              <h3 className="font-bold text-lg text-gray-900">
                {item.card.info.name}
              </h3>
              <p className="text-gray-700 mb-2">
                ₹
                {item.card.info.price
                  ? (item.card.info.price / 100).toFixed(2)
                  : (item.card.info.defaultPrice / 100).toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 mb-4 break-words">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-1/3 relative">
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full h-24 object-cover rounded-lg"
              />
              <button
                className="absolute bottom-2 right-2 p-2 rounded-lg bg-black text-white shadow-md hover:bg-gray-900 transition duration-300"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
