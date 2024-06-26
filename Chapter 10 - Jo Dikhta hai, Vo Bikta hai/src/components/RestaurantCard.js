import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
    cloudinaryImageId,
  } = props.resData.info;
  return (
    <div className="res-card w-[200px] h-[500px] p-4 m-2 rounded-md bg-gray-100 hover:bg-gray-300 cursor-pointer">
      <img
        className="res-logo rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} Stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
