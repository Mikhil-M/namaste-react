import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [search, setSearch] = useState('');

  handleSearchChange = (event) => setSearch(event.target.value)
   
    return (
      <div className="body">
        <div className="search">
          <input type="text" value={search} onChange={handleSearchChange}/>
          <button onClick={() => {
            const filteredList = listOfRestaurants.filter(res => res.info.name.includes(search));
            setListOfRestaurants(filteredList);
          }}>Search</button>
          <button onClick={() => setListOfRestaurants(resList) }>Reset</button>
        </div>
        <div className="filter-btn">
          <button onClick={()=>{
            const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.4);
            setListOfRestaurants(filteredList);
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {
             listOfRestaurants.map(restaurant => <RestaurantCard resData={restaurant} key={restaurant.info.id}/>) 
          }        
        </div>
      </div>
    )
  }

export default Body;