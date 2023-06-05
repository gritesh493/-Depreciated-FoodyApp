import { useEffect, useState } from "react";
import { RestrauntCard } from "./RestaurantCard";
import { data } from "../constant.js"
import { Search } from "./Search";

export const Body=()=>{

    const [restaurant,setRestaurant]=useState(data);

    async function getRestraunts(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6012849&lng=88.3312686&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }

    useEffect(()=>{
        getRestraunts();
    },[]);

    
    return(
        <div className="body">

            <Search setUiData={setRestaurant}/>

            
            {restaurant?.map((ele)=>{
                return(
                <RestrauntCard details={ele} key={`${ele.data.id}`}/>
            )})}
        </div>
    );
}