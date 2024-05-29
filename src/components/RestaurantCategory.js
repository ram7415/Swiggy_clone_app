import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* acodian header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4  ">
        <div className="flex justify-between">
          <span>{data.title}</span>
          <span>🔽</span>
        </div>
        {/* accordian body */}
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
