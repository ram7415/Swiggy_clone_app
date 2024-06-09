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
    <div className="m-4 w-[225px] h-[270px] bg-[#fcfcfc] rounded-xl hover:bg-[#f5f5f3] shadow-slate-20 transition-transform duration-300 transform hover:scale-95 py-2 overflow-hidden mb-4">
      <div className="flex flex-col justify-between h-full">
        <div>
          <img
            className="rounded-lg w-full h-36 object-cover mb-2"
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
          />
          <h2 className="font-bold mx-4 text-lg  text-zinc-700">{name}</h2>
          <h4 className="font-bold mx-3 text-zinc-600">
            ⭐ {avgRating} ⏳{resData.info.sla.deliveryTime}-
            {resData.info.sla.deliveryTime + 5} min
          </h4>
          <h4 className="break-words mx-4  text-[#646262] line-clamp-1">
            {cuisines.join(", ")}
          </h4>
        </div>
        <div className="mt-auto">
          <h4 className="text-[#464645] mx-4">{costForTwo}</h4>
          <h4 className="text-[#12100e]"></h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCard;
