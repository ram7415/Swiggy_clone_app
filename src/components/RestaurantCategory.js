import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [showItem, setShowItem] = useState(false);
  // console.log(data);

  const handleClick = () => {
    setShowIndex();
    setShowItem(!showItems);
    // console.log("showItem", showItem);
  };

  return (
    <div>
      {/* acodian header */}
      <div className="w-7/12 mx-auto my-4 bg-gray-100 shadow-lg p-4  ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">{data.title}</span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {/* accordian body */}
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
