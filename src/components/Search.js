import { useState } from "react";
// import { data } from "../constant.js"; //this will search on old data -- NOT DYNAMIC //used for study purpose

export const Search=(props)=>{
    const [searchText,setSearchText]=useState("");    //Must be inside functional component.

    
    async function filterdata(text){
        data= await props.restaurant;
        console.log(data)
        let details="";
        text==""?details=data:details = data.filter((ele)=>{return(ele.data.name.includes(text))}); //!TODO=> if text="" Refetch data
        props.setUiData(details);
    }


    return(
    <div className="search-container">
        <input type="text" placeholder="Search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
        <button className="btn" onClick={()=>filterdata(searchText)} >Search</button>  {/*Always use callback/anonymous function inside onClick */}
    </div>);
}