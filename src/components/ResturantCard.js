import {IMG_CDN_URL} from "../constants"

const ResturantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) => {
  return (
    <div className="card">
      <img alt="image" src={IMG_CDN_URL + cloudinaryImageId} />

      <h2>{name}</h2>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{lastMileTravelString} minutes</h2>
    </div>
  );
};

export default ResturantCard;


