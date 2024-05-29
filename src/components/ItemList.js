import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log("ItemList", items);
  return (
    <div>
      <ul>
        {items.map((items) => (
          <div
            key={items.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left  flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2  ">
                <span>{items.card.info.name} </span>
                <span>
                  ₹-
                  {items.card.info.defaultPrice / 100
                    ? items.card.info.defaultPrice
                    : items.card.info.price / 100}
                </span>
              </div>
              <p className="text-xs">{items.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4 ">
              <div className="absolute">
                <button className="p-0 bg-black text-white shadow-lg absolute rounded-lg mx-16">
                  Add+
                </button>
              </div>
              <img src={CDN_URL + items.card.info.imageId} className="w-full" />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
