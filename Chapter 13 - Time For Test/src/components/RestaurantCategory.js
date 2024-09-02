import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
  return (
    <div
      className="bg-gray-100 shadow-lg w-6/12 mx-auto my-4 p-2 cursor-pointer"
      onClick={() => setShowIndex()}
    >
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {category?.title}({category?.itemCards?.length})
        </span>
        {showItems ? <span>⬇</span> : <span>⬆</span>}
      </div>
      {showItems && <ItemList itemCards={category?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
