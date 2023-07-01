import { useEffect, useState } from "react";
import { Logo_URL } from "../constant"
import { useParams } from "react-router-dom"
import { ShimmerUI } from "./ShimmerUI";

const RestaurantDetails=()=>{
    const [restaurant,setRestaurant]=useState();

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6012849&lng=88.3312686&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        
        console.log(json);
        const filteredRestaurant= await json?.data?.cards[2]?.data?.data?.cards?.filter((ele)=>{
            if(ele.data.id==params.id)return true;
            else return false;
        });
        console.log(filteredRestaurant[0]);
        setRestaurant(filteredRestaurant[0]);
    }

    useEffect(()=>{
        getRestaurants().catch( e => { console.error(e) });
    },[])

    const params=useParams();

  

    return (!restaurant)?<ShimmerUI/>:(
        <>
        <h1>{restaurant?.data?.name}</h1>
        <h5>{restaurant?.data?.address}</h5>
        <h3>{restaurant?.data?.costForTwoString}</h3>
        <img src={Logo_URL+restaurant?.data?.cloudinaryImageId}></img>
        <h2>{Object.values(restaurant?.data?.cuisines?.map((item)=>{return(<li key={item}>{item}</li>)}))}</h2>
        </>
    )
}

export default RestaurantDetails