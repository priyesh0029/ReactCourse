import { useDispatch, useSelector } from "react-redux";
import FoodMenu from "./FoodMenu";
import { clearCart, removeItem } from "./utils/cartSlice";


const Cart = () => {
    const dispatch = useDispatch()
    
    const handleClear = ()=>{
        dispatch(clearCart())
    }

    const handleRemove = (id)=>{
        dispatch(removeItem(id))
    }
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <div className="flex flex-wrap justify-center">
      {cartItems.map((item,index) => {
        return (
            <div>
                <FoodMenu key={item.id} {...item} />
                <button className="border-black bg-green-200 mx-4 p-2" key={item.id+1} onClick={()=>handleRemove(index)}>remove</button>
            </div>
        )
      })}
      </div>
      <div className="flex justify-end ">
      <button className=" border-black bg-green-200 m-3 p-2 " onClick={()=>handleClear()}>Clear Cart</button>
      </div>
    </>
  );
};

export default Cart;
