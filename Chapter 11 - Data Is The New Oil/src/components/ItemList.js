import { CDN_URL } from "../Utils/constants";
const ItemList = ({ itemCards }) => {
  return (
    <div>
      {itemCards.map((item) => (
        <div
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
              <span className="absolute font-bold py-1 px-5 mt-[70px] ml-10 bg-white text-green-500 rounded-md">
                ADD
              </span>
            ) : (
              <span className="absolute font-bold py-1 px-5 ml-10 mt-7 bg-white text-green-500 rounded-md">
                ADD
              </span>
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
