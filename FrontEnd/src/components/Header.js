import { Link } from "react-router-dom";
import { LOGO } from "../constants";
import { useContext } from "react";
import userContext from "./utils/UserContext";
import { useSelector } from "react-redux";
import store from "./utils/Store";

const Title = () => {
  return (
    <a href="/">
      <img className="h-28 p-2" alt="logo" src={LOGO}></img>
    </a>
  );
};

const Header = () => {
  const { user } = useContext(userContext);
  const cartItem = useSelector(store => store.cart.items)
  
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
            <Link to="/cart">cart - {cartItem.length}items</Link>
          </li>
        </ul>
      </div>
      <div>
        <span className="m-4">Hi,{user.name}</span>
      </div>
    </div>
  );
};

export default Header;
