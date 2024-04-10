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
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{resData.info.sla.deliveryTime}min</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}⭐</h4>
    </div>
  );
};

export default RestaurentCard;
