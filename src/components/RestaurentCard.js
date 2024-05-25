import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
    avgRating,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[200px] " style={{ backgroundColor: "#f0f0f0" }}>
      <div>
        <img
          className="rounded-lg"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h1 className="font-bold py-4 text-xl">{name}</h1>
        <h4>{cuisines.join(",")}</h4>
        <h4 className="font-extralight">{resData.info.sla.deliveryTime}min</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}⭐</h4>
      </div>
    </div>
  );
};

export default RestaurentCard;
