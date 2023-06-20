import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { addItem } from "./utils/cartSlice";


const FoodMenu = ({ name, category, description, price, imageId }) => {
  
  return (
    <div className="flex justify-center bg-gray-100 m-3">
      <div className="border-black shadow-lg min-h-[25rem] min-w-[25rem] max-w-[25rem] m-2 p-5">
        <img className="w-auto" src={IMG_CDN_URL + imageId}></img>
        <div className="foodDetails">
          <h3 className="text-xl my-2">{name}</h3>
          <h4>{category}</h4>
          <h5>{description}</h5>
          <h3>Rs :{price/100}.00</h3>
        </div>
       
      </div>
    </div>
  );
};

export default FoodMenu;
