import { ShimmerUI } from "./ShimmerUI";

// import { data } from "../constant.js"; //this will search on old data -- NOT DYNAMIC //used for study purpose
let count=0;
let details=[];

export const CuisinesTag=(props)=>{
    count++;

    //TODO- to make it realtime, we would have to do prop drilling inside of body's state to here...do it the better way.
    async function getRestraunts(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6012849&lng=88.3312686&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        return(json);
    }
    async function filterdata(text){
        const data=await getRestraunts();
        console.log(data);
        details =await data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter((ele)=>{return(ele.info.cuisines.includes(text))}); //How to send props to sibling component ?
        console.log(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        props.setRestaurant(details);
    }
    

    return(
        <div className="tag bg-green-300 rounded-full border-green-700 border-2 m-2 px-3 py-0 cursor-pointer hover:bg-lime-300 inline-block" key={count} onClick={()=>filterdata(props.item)}>{props.item}</div>
    );
}