import { useState } from "react";
import useSearch from "../utils/useSearch";
import { Link } from "react-router-dom";
import ShimmerCard from "./shimmer/ShimmerCard";

const Search = () => {
  const [filter, setFilter] = useState(null); // Initialize filter as null
  const [searchBox, setSearchBox] = useState(""); // Initialize searchBox as an empty string
  const search = useSearch();
  console.log("search", search);

  if (search === null) return <ShimmerCard />;

  const handleSearch = () => {
    const filterRestaurants = search.filter((res) =>
      res.info.name.toLowerCase().includes(searchBox.toLowerCase())
    );
    setFilter(filterRestaurants);
    console.log("searchinside", filter);
  };

  return (
    <div className="h-[45rem] w-full bg-white">
      <div className="flex justify-center">
        <div className="search flex m-4 p-4 bg-[#efeeeb] rounded-lg shadow-md">
          <input
            type="text"
            className="border border-solid border-black rounded-lg p-2 w-[40rem] flex-grow outline-none"
            placeholder="Search restaurants..."
            value={searchBox}
            onChange={(e) => setSearchBox(e.target.value)}
          />
          <button
            className="px-4 py-2 text-xl bg-[#ffffff] text-black rounded-lg ml-4 hover:bg-[#dccbc6] "
            onClick={handleSearch} // Changed to use handleSearch function
          >
            Search
          </button>
        </div>
      </div>
      <div className="mt-4">
        <p className="mx-28 text-lg text-slate-600 mt-2">
          Browse through a curated list of top-rated restaurants delivering
          delicious food right to your doorstep.
        </p>
        <div className="flex flex-wrap p-6 justify-center mx-4">
          {filter &&
            filter.map((item) => (
              <Link to={"/restaurants/" + item.info.id} key={item.info.id}>
                <div className="m-4 w-[225px] h-[270px] bg-[#fcfcfc] rounded-xl hover:bg-[#f5f5f3] shadow-slate-20 transition-transform duration-300 transform hover:scale-95 py-2 overflow-hidden mb-4">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <img
                        className="rounded-lg w-full h-36 object-cover mb-2"
                        alt="res-logo"
                        src={
                          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                          item?.info?.cloudinaryImageId
                        }
                      />
                      <h2 className="font-bold mx-4 text-lg text-zinc-700">
                        {item?.info?.name}
                      </h2>
                      <h4 className="font-bold mx-3 text-zinc-600">
                        ⭐ {item?.info?.avgRating} ⏳
                        {item.info.sla.deliveryTime}-
                        {item.info.sla.deliveryTime + 5} min
                      </h4>
                      <h4 className="break-words mx-4 text-[#646262] line-clamp-1">
                        {item?.info?.cuisines.join(", ")}
                      </h4>
                    </div>
                    <div className="mt-auto">
                      <h4 className="text-[#464645] mx-4">
                        {item?.info?.costForTwo}
                      </h4>
                      <h4 className="text-[#12100e]"></h4>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
