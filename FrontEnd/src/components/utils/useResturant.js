import { useState,useEffect } from "react";
import { RESTURANT_LIST_URL } from "../../constants";

const useResturant = (resId)=>{

  const [restaurant, setRestaurant] = useState();
  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(RESTURANT_LIST_URL+resId +"&submitAction=ENTER");
    const json = await data.json();
    setRestaurant(json.data);
  }
  return restaurant
}

export default useResturant