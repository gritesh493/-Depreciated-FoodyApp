import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_URL } from "../constant";

const useRestaurant=(id)=>{

    const[restaurant,setRestaurant]=useState();

    async function getRestauantInfo(){
        const data = await fetch(FETCH_RESTAURANT_URL);
        const json=await data.json();
        
        const filteredRestaurant= await json?.data?.cards[2]?.data?.data?.cards?.filter((ele)=>{
            if(ele.data.id==id)return true;
            else return false;
        });

        setRestaurant(filteredRestaurant);
        console.log(filteredRestaurant);
    }
    useEffect(()=>{
        getRestauantInfo().catch( e => { console.error(e) })},[]);
        
    return restaurant;
}

export default useRestaurant;