import { useState,useEffect } from "react"

const useAllResturants = ()=>{

    const [allResturants,setAllResturants] = useState([])
  
    useEffect(()=>{
        getRestaurants()
    },[])
  
    
   async function getRestaurants(){
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.555132&lng=76.876666&page_type=DESKTOP_WEB_LISTING") 
       const json = await data.json()
       setAllResturants(json?.data?.cards[2]?.data?.data?.cards)
    }
    return allResturants
}

export default useAllResturants