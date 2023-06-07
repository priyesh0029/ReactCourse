import { ResturantList } from "../constants";
import ResturantCard from "./resturantCard";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

function filterData(serachInput,restaurants){
  
   const filterData = restaurants.filter((restaurant)=>
        restaurant?.data?.name?.toLowerCase()?.includes(serachInput.toLowerCase())
    )
  return filterData
}

const Body = () => {
  const [allResturants,setAllResturants] = useState([])
  const [FilterRestaurants,setFilterRestaurants] = useState([])
  const [serachInput, setSearchInput] = useState("");

  useEffect(()=>{
      getRestaurants()
  },[])

 async function getRestaurants(){
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.555132&lng=76.876666&page_type=DESKTOP_WEB_LISTING") 
     const json = await data.json()
     setAllResturants(json?.data?.cards[2]?.data?.data?.cards)
     setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }

 
  
  return allResturants.length === 0 ?(
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="search"
            value={serachInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button className="search-btn"
          onClick={()=>{
            const data = filterData(serachInput,allResturants)
             setFilterRestaurants(data)
          }}
          >search</button>
        </div>
       
      <div className="resturant-list">
        {FilterRestaurants.map((restaurant) => {
          return (
            <Link className="Link" to={`/restaurant/${restaurant.data.id}`}><ResturantCard {...restaurant.data} key={restaurant.data.id} /></Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
