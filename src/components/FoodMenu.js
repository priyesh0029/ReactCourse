import { IMG_CDN_URL } from "../constants";

const FoodMenu = ({ name, category, description, price, imageId }) => {
  return (
    <div className="foodMenu">
      <div className="foodListView">
        <img className="foodImage" src={IMG_CDN_URL + imageId}></img>
        <div className="foodDetails">
          <h3>{name}</h3>
          <h4>{category}</h4>
          <h5>{description}</h5>
          <h3>Rs :{price/100}.00</h3>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
