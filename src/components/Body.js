import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurentCard from "./RestaurentCard";
// import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import Carousel from "./Carousel";
import Shimmer from "./shimmer/Shimmer";
import ShimmerCard from "./shimmer/ShimmerCard";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import CardCarousal from "./CardCarousal";
import { CiSearch } from "react-icons/ci";
import mockResListData from "../components/mocks/mockResListData.json"
// import ShimmerCard from "./shimmer/ShimmerCard";

const Body = () => {
  const [ListofRestaurents, setListofRestaurents] = useState([]);
  const [searchBox, setSearchBox] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [carouselList, setCarouselList] = useState([]);
  // console.log("list", ListofRestaurents);
  const [topRes, setTopres] = useState([]);
  const [newRes, setNewRes] = useState([]);
  const { loggedInUser } = useContext(UserContext);
console.log('mock',mockResListData);
  useEffect(() => {
    fetchData();
  }, []);
console.log();
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      // const data = await response.json();
      const data =mockResListData
      console.log('data', data)
      setListofRestaurents(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setFilterRestaurant(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setCarouselList(
        data?.data?.cards[0]?.card?.card?.imageGridCards.info || []
      );
      setTopres(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setNewRes(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>No Internet Connection</h1>;
  ///this is condtional rendering
  // if  (ListofRestaurents.length === 0){
  //   return <Shimmer />;
  // }
  return !ListofRestaurents.length ? (
    <div className="shimmer-container">
      <Shimmer />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  ) : (
    <div className="body mx-26 ">
      <div className="flex flex-wrap p-4 mx-2  justify-center">
        <div className="mx-2">
          <h1 className="font-bold text-2xl mb-0 text-slate-800">
            What's on your mind?
          </h1>
          <div className="carousel-container ">
            <div className="carousel">
              {carouselList.map((item) => (
                <Carousel key={item.id} carData={item} />
              ))}
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
          </div>
          <hr></hr>
        </div>

        <h1 className=" text-2xl  text-slate-800 font-bold text-left m-3 mb-5">
          Explore curated lists of top restaurants
        </h1>
        <div className="flex flex-wrap   justify-center mx-5 p-8 h-[45vh] overflow-x-auto overflow-scroll ">
          {newRes.map((item) => (
            <Link to={"/restaurants/" + item.info.id} key={item.info.id}>
              <RestaurentCard key={item.id} resData={item} />
            </Link>
          ))}
        </div>
        <hr></hr>

        <div className="mt-10">
          <h1 className=" mx-28 text-2xl text-slate-800 font-bold  mt-4  ">
            Restaurants with online food delivery in Indore
            <button
              className="px-2 py-2 bg-[#815959] text-white rounded-lg ml-4 hover:bg-[#e87e21]"
              onClick={() => {
                const filterList = ListofRestaurents.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilterRestaurant(filterList);
              }}
            >
              Top Rated
            </button>
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
