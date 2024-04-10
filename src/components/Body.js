import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
  const [ListofRestaurents, setListofRestaurents] = useState([]);
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

  if (ListofRestaurents === 0) {
    return <div>Loading</div>;
  }

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListofRestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filterBtn"
          onClick={() => {
            const filterList = ListofRestaurents.filter(
              (res) => res.info.avgRating > 4
            );
            setListofRestaurents(filterList);
            console.log(ListofRestaurents);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {ListofRestaurents.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};
export default Body;
