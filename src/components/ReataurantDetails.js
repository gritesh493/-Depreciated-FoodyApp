import { useEffect, useState } from "react";
import { Logo_URL } from "../constant";
import { useParams } from "react-router-dom";
import { ShimmerUI } from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantDetails = () => {
  const params = useParams();

  const restaurant = useRestaurant(params.id); //New Hook Created

  console.log(restaurant);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(`${item} - (from ${restaurant[0]?.info?.name})`));
  };

  return !restaurant ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="flex justify-start">
        <img
          src={Logo_URL + restaurant[0]?.info?.cloudinaryImageId}
          className="w-auto p-2 m-10 border-2 border-gray-100 rounded-sm shadow-xl "
        ></img>
        <div className=" w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-100 to-transparent opacity-20 dark:opacity-100"></div>
        <h1 className=" my-2 mx-4 px-8 text-2xl font-bold inline-block border-l-2">
          {restaurant[0]?.info?.name}
          {/* <h5 className="m-2 p-2 text-lg font-semibold ">{restaurant[0]?.info?.address}</h5>
            <h3 className="m-2 p-2 text-lg font-semibold ">{restaurant[0]?.info?.costForTwoString}</h3> Not working*/}
          <h2 className="my-0 ml-0 p-2 text-lg font-semibold">
            {Object?.values(
              restaurant[0]?.info?.cuisines?.map((item) => {
                return (
                  <li
                    key={item}
                    className="list-none transition-all ease-in-out delay-1000 duration-1000 translate-x-10"
                  >
                    {item}
                    <button
                      onClick={() => handleAddItem(item)}
                      className="hover:bg-orange-200 hover:shadow-lg p-2 m-5 border-orange-200 shadow-md shadow-orange-200 rounded-xl"
                    >
                      Add
                    </button>
                  </li>
                );
              })
            )}
          </h2>
        </h1>
      </div>
    </>
  );
};

export default RestaurantDetails;
