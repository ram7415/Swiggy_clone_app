import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurentCard from "./RestaurentCard";
// import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { CiSearch } from "react-icons/ci";
import Slidercard from "./Slidercard";
const Body = () => {
  const [ListofRestaurents, setListofRestaurents] = useState([]);
  const [searchBox, setSearchBox] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  // console.log("list", ListofRestaurents);
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListofRestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>No Internet Connection</h1>;
  ///this is condtional rendering
  // if  (ListofRestaurents.length === 0){
  //   return <Shimmer />;
  // }
  return ListofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mx-26 ">
      <div className="flex justify-center">
        <div className="search flex m-4 p-4 bg-[#efeeeb] rounded-lg shadow-md">
          <input
            type="text"
            className="border border-solid border-black rounded-lg p-2 flex-grow outline-none"
            placeholder="Search restaurants..."
            value={searchBox}
            onChange={(e) => setSearchBox(e.target.value)}
          />
          <button
            className="px-4 py-2 text-xl bg-[#ffffff] text-black rounded-lg ml-4 hover:bg-[#dccbc6] hover:text-2xl"
            onClick={() => {
              const filterRestauraants = ListofRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchBox.toLowerCase())
              );
              setFilterRestaurant(filterRestauraants);
            }}
          >
            <CiSearch />
          </button>
          <button
            className="px-4 py-2 bg-[#e8911f] text-white rounded-lg ml-4 hover:bg-[#e87e21]"
            onClick={() => {
              const filterList = ListofRestaurents.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterRestaurant(filterList);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>

      <span className="mx-8">Sample of usecontext-{loggedInUser}</span>
      <div className="flex flex-wrap p-6   justify-center">
        <Slidercard />
        {filterRestaurant.map((restaurent) => (
          <Link
            to={"/restaurants/" + restaurent.info.id}
            key={restaurent.info.id}
          >
            <RestaurentCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
