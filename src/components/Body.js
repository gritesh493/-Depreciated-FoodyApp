import { RestrauntCard } from "./RestaurantCard";
import {data} from "../constant.js"


export const Body=()=>{
    return(
        <div className="body">
            {data.map((ele)=>{
                return(
                <RestrauntCard details={ele} key={`${ele.data.id}`}/>
            )})}
        </div>
    );
}