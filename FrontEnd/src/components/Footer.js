import { useContext } from "react";
import userContext from "./utils/UserContext";

const Footer = () => {
  const {user} = useContext(userContext)
  return (
    <div className="text-center bg-gray-400">
      <h1 className="text-5xl"  >Footer</h1>
      <span>This page is created by {user.name}- {user.email}</span>
    </div>
  );
};

export default Footer;
