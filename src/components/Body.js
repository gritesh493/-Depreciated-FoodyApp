import { RestrauntCard } from "./RestaurantCard";
import {data} from "../constant.js"
import { Search } from "./Search";

export const Body=()=>{
    return(
        <div className="body">
            <Search/>
            {data.map((ele)=>{
                return(
                <RestrauntCard details={ele} key={`${ele.data.id}`}/>
            )})}
        </div>
    );
}