import { addItem } from "../Utils/cartSlice";
import { CDN_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
const ItemList = ({ itemCards }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {itemCards.map((item) => (
        <div
          data-testid="foodItem"
          className="text-left p-2 border-b-2 flex justify-between h-28"
          key={item?.card?.info?.id}
        >
          <div className="w-9/12">
            <span className="block">{item?.card?.info?.name}</span>
            <span className="">
              ₹
              {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                100}
            </span>
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            {item?.card?.info?.imageId ? (
              <button
                className="absolute font-bold py-1 px-5 mt-[70px] ml-10 bg-white text-green-500 rounded-md"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            ) : (
              <button
                className="absolute font-bold py-1 px-5 ml-10 mt-7 bg-white text-green-500 rounded-md"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            )}
            {item?.card?.info?.imageId && (
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="h-24 w-full object-cover rounded-md"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
