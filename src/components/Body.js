import { useEffect, useState } from "react";
import { RestrauntCard } from "./RestaurantCard";
import { data } from "../constant.js"
import { Search } from "./Search";
import {ShimmerUI} from "./ShimmerUI";
// import {Filter} from "./Filter";

export const Body=()=>{

    const [restaurant,setRestaurant]=useState([]);

    async function getRestraunts(){
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6012849&lng=88.3312686&page_type=DESKTOP_WEB_LISTING");
            const json=await data.json();
            console.log(json);
            setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        }

    useEffect(()=>{
        getRestraunts().catch( e => { console.error(e) });
    },[]);  //!TODO Fetch data whenever tags are clicked and search button is clicked //Here data layer and ui layer is not seperated properly

    
    return (
        <div className="body">

            <Search setUiData={setRestaurant} restaurant={restaurant}/>
            {/* <Filter setUiData={setRestaurant}/> */}

            
            {(restaurant?.length==0)?(<ShimmerUI/>):(restaurant?.map((ele)=>{
                return(
                <RestrauntCard setRestaurant={setRestaurant} restaurant={restaurant} details={ele} key={`${ele.data.id}`}/>
            )}))}
        </div>
    );
}