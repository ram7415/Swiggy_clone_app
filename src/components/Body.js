import RestaurentCard from "./RestaurentCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
const Body = () => {
  const [ListofRestaurents, setListofRestaurents] = useState([]);
  const [searchBox, setSearchBox] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  // let ListofRestaurents = [
  //   {
  //     card: {
  //       id: "604322",
  //       name: "Mr Anna by Maa ki Rasoi",
  //       cloudinaryImageId: "9e58e6eee8806a706dde5dd1f1d17ac6",
  //       locality: "Gopur Colony",
  //       areaName: "Sudama Nagar",
  //       costForTwo: "₹300 for two",
  //       cuisines: [
  //         "South Indian",
  //         "Fast Food",
  //         "North Indian",
  //         "Biryani",
  //         "Chinese",
  //         "Snacks",
  //       ],
  //       avgRating: 3.5,

  //       avgRatingString: "4.3",
  //       totalRatingsString: "1K+",

  //       deliveryTime: 47,
  //     },
  //   },
  //   {
  //     card: {
  //       id: "604321",
  //       name: "KFC",
  //       cloudinaryImageId: "9e58e6eee8806a706dde5dd1f1d17ac6",
  //       locality: "Gopur Colony",
  //       areaName: "Sudama Nagar",
  //       costForTwo: "₹300 for two",
  //       cuisines: [
  //         "South Indian",
  //         "Fast Food",
  //         "North Indian",
  //         "Biryani",
  //         "Chinese",
  //         "Snacks",
  //       ],
  //       avgRating: 4.3,

  //       deliveryTime: 47,
  //     },
  //   },
  // ];
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListofRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log("render");
  ///this is condtional rendering
  // if  (ListofRestaurents.length === 0){
  //   return <Shimmer />;
  // }
  return ListofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchBox}
          onChange={(e) => {
            setSearchBox(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filterRestauraants = ListofRestaurents.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchBox.toLowerCase());
            });
            setFilterRestaurant(filterRestauraants);
          }}
        >
          Search
        </button>
        <button
          className="filterBtn"
          onClick={() => {
            const filterList = ListofRestaurents.filter(
              (res) => res.info.avgRating > 4
            );
            setFilterRestaurant(filterList);
            console.log(ListofRestaurents);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};
export default Body;