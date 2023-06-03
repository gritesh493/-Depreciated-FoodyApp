import { RestrauntCard } from "./RestaurantCard";
import {data} from "../constant.js"

// console.log(data);

export const Body=()=>{
    return(
        <div className="body">
            {data.map((ele)=>{return(
                <RestrauntCard details={ele} key={data.id}/>
            )})}
        </div>
    );
}