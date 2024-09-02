import RestaurantCard, { withHighlyRatedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_LIST_URL } from "../Utils/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();
  const RestaurantCardHighlyRated = withHighlyRatedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_URL);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline!! Please Check Your Internet Connection.
      </h1>
    );
  }

  // Conditional Rendering
  return !restaurants?.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex py-4">
        <div className="search">
          <input
            className="border border-black ml-2"
            type="text"
            value={searchText}
            data-testid="searchInput"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 mx-2 bg-blue-100 rounded-md"
            onClick={() => {
              const filteredRestaurants = restaurants.filter((res) =>
                res.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setListOfRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-2 bg-gray-100 rounded-md"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          Logged In User:{" "}
          <input
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {listOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.2 ? (
              <RestaurantCardHighlyRated resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
