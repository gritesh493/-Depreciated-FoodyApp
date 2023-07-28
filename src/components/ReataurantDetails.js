import { useEffect, useState } from "react";
import { Logo_URL } from "../constant"
import { useParams } from "react-router-dom"
import { ShimmerUI } from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant"

const RestaurantDetails=()=>{
    const params=useParams();

    const restaurant = useRestaurant(params.id);    //New Hook Created
    
    console.log(restaurant);

    return (!restaurant)?<ShimmerUI/>:(
        <>
        <img src={Logo_URL+restaurant[0]?.info?.cloudinaryImageId} className="p-2 m-2 border-2 border-gray-100 rounded-sm shadow-xl "></img>
        <h1 className="m-2 p-2 text-lg font-semibold ">{restaurant[0]?.info?.name}</h1>
        <h5 className="m-2 p-2 text-lg font-semibold ">{restaurant[0]?.info?.address}</h5>
        <h3 className="m-2 p-2 text-lg font-semibold ">{restaurant[0]?.info?.costForTwoString}</h3>
        <h2 className="m-2 p-2 text-lg font-semibold ">{Object.values(restaurant[0]?.info?.cuisines?.map((item)=>{return(<li key={item}>{item}</li>)}))}</h2>
        </>
    )
}

export default RestaurantDetails