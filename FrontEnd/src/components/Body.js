import { ResturantList } from "../constants";
import ResturantCard from "./resturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import axios from "axios";
import { useContext } from "react";
import userContext from "./utils/UserContext";

const Body = () => {
  const [allResturants, setAllResturants] = useState([]);
  const [FilterRestaurants, setFilterRestaurants] = useState([]);
  const [serachInput, setSearchInput] = useState("");

  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    axios
      .get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.555132&lng=76.876666&page_type=DESKTOP_WEB_LISTING"
      )
      .then((response) => {
        console.log(response?.data?.data?.cards[2]?.data?.data?.cards);
        setAllResturants(response?.data?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurants(response?.data?.data?.cards[2]?.data?.data?.cards);
      });
  }, []);

  return allResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-gray-100 my-5">
        <input
          type="text"
          className="focus:bg-yellow-100 p-2 m-2"
          placeholder="search"
          value={serachInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />

        <button
          className="p-2 m-2 bg-gray-400 hover:bg-gray-600 rounded-md"
          onClick={() => {
            const data = filterData(serachInput, allResturants);
            setFilterRestaurants(data);
          }}
        >
          search
        </button>

        <input
          type="text"
          className="focus:bg-yellow-100 p-2 m-2"
          placeholder={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />

        <input
          type="text"
          className="focus:bg-yellow-100 p-2 m-2"
          placeholder={user.email}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
      </div>

      <div className="flex flex-wrap bg-gray-100">
        {FilterRestaurants.map((restaurant) => {
          return (
            <Link
              className="Link"
              key={restaurant.data.id}
              to={`/restaurant/${restaurant.data.id}`}
            >
              <ResturantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
