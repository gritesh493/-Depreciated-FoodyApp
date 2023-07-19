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
        <h1>{restaurant[0]?.data?.name}</h1>
        <h5>{restaurant[0]?.data?.address}</h5>
        <h3>{restaurant[0]?.data?.costForTwoString}</h3>
        <img src={Logo_URL+restaurant[0]?.data?.cloudinaryImageId}></img>
        <h2>{Object.values(restaurant[0]?.data?.cuisines?.map((item)=>{return(<li key={item}>{item}</li>)}))}</h2>
        </>
    )
}

export default RestaurantDetails