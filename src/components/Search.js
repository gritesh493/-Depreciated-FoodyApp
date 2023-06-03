import { useState } from "react";
import { data } from "../constant.js"

export const Search=(props)=>{
    const [searchText,setSearchText]=useState("");    //Must be inside functional component.

    filterdata=(text,data)=>{
        const details = data.filter((ele)=>{return(ele.data.name.includes(text))});
        props.setUiData(details);
    }



    return(
    <div className="search-container">
        <input type="text" placeholder="Search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
        <button className="btn" onClick={()=>filterdata(searchText,data)} >Search</button>  {/*Always use callback/anonymous function inside onClick */}
    </div>);
}