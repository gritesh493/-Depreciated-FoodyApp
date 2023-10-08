import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_URL } from "../constant";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState();

  async function getRestauantInfo() {
    const data = await fetch(FETCH_RESTAURANT_URL);
    const json = await data.json();
    const restaurantList =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        ?.length != undefined
        ? json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        : json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
    const filteredRestaurant = await restaurantList.filter((ele) => {
      if (ele.info.id == id) return true;
      else return false;
    });

    setRestaurant(filteredRestaurant);
    console.log(filteredRestaurant);
  }
  useEffect(() => {
    getRestauantInfo().catch((e) => {
      console.error(e);
    });
  }, []);

  return restaurant;
};

export default useRestaurant;
