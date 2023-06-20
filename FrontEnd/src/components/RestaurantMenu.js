import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodMenu from "./FoodMenu";
import ResturantDetails from "./RestuarantDetails";
import useResturant from "./utils/useResturant";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const restaurant = useResturant(resId);

  const dispatch = useDispatch()
  const handleItem = (item)=>{
    dispatch(addItem(item))
  }

  return (
    <div>
      <div className="foodList">
        <ResturantDetails {...restaurant?.cards[0]?.card?.card?.info} />
      </div>
      <div className="flex justify-center flex-wrap p-2 m-2">
        {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
          (foodDetails) => {
            return (
              <div key={foodDetails?.card?.info?.id}>
                <FoodMenu {...foodDetails?.card?.info} />
                <div>
                  <button className="border-black shadow-lg bg-green-200 mx-3 p-2 " onClick={()=>{ console.log("foodDetails :",foodDetails)
                  return handleItem(foodDetails?.card?.info)}}>
                    Add item
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
