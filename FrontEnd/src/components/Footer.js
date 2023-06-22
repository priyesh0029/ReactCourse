import { useContext } from "react";
import userContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Footer = () => {
  const {user} = useContext(userContext)
  const userDetails = useSelector(store => store.user.items)
  return (
    <div className="text-center bg-gray-400">
      <h1 className="text-5xl"  >Footer</h1>
      <span>This page is created by {userDetails && userDetails.name}- {userDetails && userDetails.email}</span>
    </div>
  );
};

export default Footer;
