import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [showItem, setShowItem] = useState(false);
  console.log(data);
  const handleClick = () => {
    setShowIndex();
    setShowItem(!showItem);
    console.log(showItem);
  };

  return (
    <div>
      {/* acodian header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4  ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">{data.title}</span>
          <span>🔽</span>
        </div>
        {/* accordian body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
