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
    // <div className="m-3 p-4 w-[220px] bg-[#eeedec] rounded-xl hover:bg-[#cbc8c5] shadow-md transition-colors duration-300 h-100 flex flex-col justify-between ">
    //   <div>
    //     <img
    //       className="rounded-lg w-full h-36 object-cover mb-4"
    //       alt="res-logo"
    //       src={CDN_URL + cloudinaryImageId}
    //     />
    //     <h1 className="font-bold py-2 text-lg text-[#FF7D29]">{name}</h1>
    //     <h4 className="break-words text-[#080808]">{cuisines.join(", ")}</h4>
    //   </div>
    //   <div>
    //     <h4 className="font-extralight text-[#787878]">
    //       {resData.info.sla.deliveryTime} min
    //     </h4>
    //     <h4 className="text-[#848281]">{costForTwo}</h4>
    //     <h4 className="text-[#12100e]">{avgRating}⭐</h4>
    //   </div>
    // </div>
    <div className="m-3 p-4 w-[220px] bg-[#eeedec] rounded-xl hover:bg-[#cbc8c5] shadow-md transition-transform duration-300 transform hover:scale-95">
      <div className="flex flex-col justify-between h-full">
        <div>
          <img
            className="rounded-lg w-full h-36 object-cover mb-4"
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
          />
          <h1 className="font-bold py-2 text-lg text-[#FF7D29]">{name}</h1>
          <h4 className="break-words text-[#080808]">{cuisines.join(", ")}</h4>
        </div>
        <div className="mt-auto">
          <h4 className="font-extralight text-[#787878]">
            {resData.info.sla.deliveryTime} min
          </h4>
          <h4 className="text-[#848281]">{costForTwo}</h4>
          <h4 className="text-[#12100e]">{avgRating}⭐</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCard;
