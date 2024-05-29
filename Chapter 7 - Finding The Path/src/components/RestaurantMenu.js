import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../Utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  fetchMenu = async () => {
    const data = await fetch(MENU_URL + params.resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (category) => Object.keys(category?.card?.card).includes("itemCards")
    )?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
