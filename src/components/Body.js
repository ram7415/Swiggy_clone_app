import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurentCard from "./RestaurentCard";
// import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import Carousel from "./Carousel";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import CardCarousal from "./CardCarousal";
import { CiSearch } from "react-icons/ci";
import ShimmerCarouselCard from "./ShimmerCar";

const Body = () => {
  const [ListofRestaurents, setListofRestaurents] = useState([]);
  const [searchBox, setSearchBox] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [carouselList, setCarouselList] = useState([]);
  // console.log("list", ListofRestaurents);
  const [topRes, setTopres] = useState([]);
  const [newRes, setNewRes] = useState([]);
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
    setCarouselList(json?.data?.cards[0]?.card?.card?.imageGridCards.info);
    setTopres(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setNewRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
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

      <div className="flex flex-wrap p-4   justify-center">
        <div className="mx-2">
          <h1 className="font-bold text-2xl mb-0 text-slate-800">
            What's on your mind?
          </h1>
          <div className="carousel-container ">
            <div className="carousel">
              {carouselList.length === 0 ? (
                <CardCarousal />
              ) : (
                carouselList.map((item) => (
                  <Carousel key={item.id} carData={item} />
                ))
              )}
            </div>
          </div>
          <hr></hr>
        </div>
        <div className=" my-2 mx-6">
          <h1 className="font-bold text-2xl  text-slate-800 mb-0 mt-4">
            Top restaurant chains in Indore
          </h1>
          <div className="carousel-container ">
            <div className="carousel">
              {topRes.map((item) => (
                <Link to={"/restaurants/" + item.info.id} key={item.info.id}>
                  <CardCarousal key={item.id} cardData={item} />
                </Link>
              ))}
            </div>
          </div>{" "}
          <hr></hr>
        </div>

        <h1 className=" text-2xl  text-slate-800 font-bold text-left m-3 ">
          Explore curated lists of top restaurants
        </h1>
        <div className="flex flex-wrap   justify-center mx-5 p-8 h-[45vh] overflow-x-auto overflow-scroll ">
          {newRes.length === 0 ? (
            <CardCarousal />
          ) : (
            newRes.map((item) => (
              <Link to={"/restaurants/" + item.info.id} key={item.info.id}>
                <RestaurentCard key={item.id} resData={item} />
              </Link>
            ))
          )}
        </div>
        <hr></hr>

        <div className="mt-4">
          <h1 className=" mx-28 text-2xl text-slate-800 font-bold  mt-4  ">
            Restaurants with online food delivery in Indore
          </h1>
          <div className="flex flex-wrap p-6   justify-center mx-4">
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
      </div>
      <span className="mx-8">Sample of usecontext-{loggedInUser}</span>
    </div>
  );
};
export default Body;
