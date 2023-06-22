import { Link } from "react-router-dom";
import { LOGO } from "../constants";
import { useContext, useState } from "react";
import userContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img className="h-28 p-2" alt="logo" src={LOGO}></img>
    </a>
  );
};

const Header = () => {
  const [isloggedIn,setIsloggedIn] = useState(false)
  const { user } = useContext(userContext);
  const cartItem = useSelector(store => store.cart.items)
  const userDetails = useSelector(store => store.user.items)

  console.log("userDetails :",userDetails);
  
  return (
    <div className="flex justify-between bg-gray-100 shadow-lg">
      <Title />

      <div className="nav-item">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            {" "}
            <Link to="/Instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">cart - {cartItem.length}</Link>
          </li>
          <li className="px-2">
            <Link to="/profile">profile</Link>
          </li>
        </ul>
      </div>
      
      <div className="mt-5">
        <span className="ml-96 my-5 text-lg font-bold">{userDetails && `Welcome ${userDetails.name}`}</span>
      </div>
      <div>
         <button className="bg-orange-600 my-5 shadow-lg rounded-md w-16 mr-36 p-2">{userDetails ? 'Logout' : <Link to="/login">Login</Link>}</button>
      </div>
    </div>
  );
};

export default Header;
