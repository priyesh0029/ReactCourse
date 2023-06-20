import {IMG_CDN_URL} from "../constants"
// import "../../index.css"


const ResturantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) => {
  return (
    <div className="w-56 p-2 m-2 bg-gray-300 shadow-md min-h-[23rem]">
      <img alt="image" src={IMG_CDN_URL + cloudinaryImageId} />

      <h2 className="font-bold text-2xl">{name}</h2>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{lastMileTravelString} minutes</h2>
    </div>
  );
};

export default ResturantCard;


