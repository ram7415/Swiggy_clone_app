import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [ListofRestaurents, setListofReataurents] = useState(resList);
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

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filterBtn"
          onClick={() => {
            const filterList = ListofRestaurents.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setListofReataurents(filterList);
            console.log(ListofRestaurents);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {ListofRestaurents.map((restaurent) => (
          <RestaurentCard
            key={restaurent.card.card.info.id}
            resData={restaurent}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
