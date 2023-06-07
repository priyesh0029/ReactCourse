import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodMenu from "./FoodMenu";
import ResturantDetails from "./RestuarantDetails";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState();
  const params = useParams();
  const { resId } = params;

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    console.log(resId);
    const data = await fetch(
      " https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.555132&lng=76.876666&restaurantId=" +
        resId +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  return (
    <div>
      <div className="foodList"><ResturantDetails {...restaurant?.cards[0]?.card?.card?.info}/>
      
      </div>
      <div className="foodList">
        {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
          (foodDetails) => {
            return (
              <div key={foodDetails?.card?.info?.id}>
                <FoodMenu {...foodDetails?.card?.info} />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
