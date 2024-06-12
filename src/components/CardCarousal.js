import { CDN_URL } from "../utils/constants";
const CardCarousel = ({ cardData }) => {
  console.log(cardData);
  data = cardData?.info || {};
  return (
    <>
      <div className=" carousel-card2 mx-2 w-[250px] h-[270px] bg-[#fcfcfc] rounded-xl hover:bg-[#f5f5f3] shadow-slate-20 transition-transform duration-300 transform hover:scale-95 py-1 overflow-hidden mb-4">
        <div className="flex flex-col justify-between h-full">
          <div>
            <img
              className="rounded-lg w-full h-36 object-cover mb-2"
              alt="res-logo"
              src={CDN_URL + data?.cloudinaryImageId}
            />
            <h2 className="font-bold mx-4 text-lg  text-zinc-700">
              {data?.name}
            </h2>
            <h4 className="font-bold mx-3 text-zinc-600">
              ⭐ {data?.avgRating} ⏳{data?.sla.deliveryTime}-
              {data?.sla.deliveryTime + 5} min
            </h4>
            <h4 className="break-words mx-4  text-[#646262] line-clamp-1">
              {data?.cuisines.join(", ")}
            </h4>
          </div>
          <div className="mt-auto">
            <h4 className="text-[#464645] mx-4">{data?.costForTwo}</h4>
            <h4 className="text-[#12100e]"></h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCarousel;
