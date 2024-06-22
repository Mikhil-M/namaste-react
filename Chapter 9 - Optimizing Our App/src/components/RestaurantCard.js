import { CDN_URL } from "../Utils/constants";

const resCardBackground = {
    backgroundColor: '#f0f0f0'
  }

const RestaurantCard = (props) => {
    const {name, cuisines, avgRatingString, costForTwo, sla, cloudinaryImageId} = props.resData.info;
    return (
      <div className="res-card" style={resCardBackground}>
        <img 
          className="res-logo" 
          alt="res-logo" 
          src={CDN_URL+cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRatingString} Stars</h4>
        <h4>{costForTwo} </h4>
        <h4>{sla.slaString}</h4>
      </div>
    )
  }

export default RestaurantCard;