import { useState } from "react";
import { ShimmerUI } from "./ShimmerUI";
// import { data } from "../constant.js"; //this will search on old data -- NOT DYNAMIC //used for study purpose

export const Search=(props)=>{
    const [searchText,setSearchText]=useState("");    //Must be inside functional component.

    
    async function filterdata(text){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6012849&lng=88.3312686&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        //TODO: While fetching, shimmer must be shown on body, and after that rendered content must also be rendered in the body.
        // data= await props.restaurant;
        console.log(json)
        let details=await text==""? json?.data?.cards[2]?.data?.data?.cards : json?.data?.cards[2]?.data?.data?.cards.filter((ele)=>{return(ele.data.name.toLowerCase().includes(text.toLowerCase()))}); //!TODO=> if text="" Refetch data
        console.log(details)
        props.setUiData(details);
    }


    return (
    <div className="search-container">
        <input type="text" placeholder="Search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
        <button className="btn" onClick={()=>filterdata(searchText)} >Search</button>  {/*Always use callback/anonymous function inside onClick */}
    </div>);
}