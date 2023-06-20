export const filterData = (serachInput,restaurants)=>{
  
    const filterData = restaurants.filter((restaurant)=>
         restaurant?.data?.name?.toLowerCase()?.includes(serachInput.toLowerCase())
     )
   return filterData
 }