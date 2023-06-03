import { useState } from "react";
import { RestrauntCard } from "./RestaurantCard";
import { data } from "../constant.js"
import { Search } from "./Search";

export const Body=()=>{
    //Cards is updated according to state of the body
    const [uiData,setUiData]=useState(data);

    
    return(
        <div className="body">

            <Search setUiData={setUiData}/>

            
            {uiData.map((ele)=>{
                return(
                <RestrauntCard details={ele} key={`${ele.data.id}`}/>
            )})}
        </div>
    );
}