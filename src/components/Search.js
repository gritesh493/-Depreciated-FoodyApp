import { useState } from "react";

export const Search=()=>{
    const [searchText,setSearchText]=useState("");    //Must be inside functional component.

    return(
    <div className="search-container">
        <input type="text" placeholder="Search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
        <button className="btn" >Search</button>
    </div>);
}