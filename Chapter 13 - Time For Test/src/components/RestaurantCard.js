import UserContext from "../Utils/UserContext";
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
    <div
      data-testid="resCard"
      className="res-card w-[200px] h-[400px] p-4 m-2 rounded-md bg-gray-100 hover:bg-gray-300 cursor-pointer"
    >
      <div className="h-1/4">
        <img
          className="res-logo rounded-md h-full w-full object-cover"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} Stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.slaString}</h4>
      <UserContext.Consumer>
        {({ loggedInUser }) => <h4>User: {loggedInUser}</h4>}
      </UserContext.Consumer>
    </div>
  );
};

// Heigher Order Component

// input - RestataurantCard ==> RestaurantCardHighlyRated

export const withHighlyRatedLabel = (Component) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-2 m-2 text-white rounded-lg bg-lime-500">
          Highly Rated
        </label>
        <Component {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
