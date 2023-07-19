import { CuisinesTag } from "./CuisinesTags";
import { Logo_URL } from "../constant";
import { Link } from "react-router-dom";
let count=0;
export const RestrauntCard=(props)=>{
    // console.log(props.details.data.avgRating);
    return(
        <div className="card m-5 p-5 w-80 hover:shadow-xl flex-col align-middle">
            
            <Link to={`/restaurant/${props.details.data.id}`}>
                <img src={Logo_URL + props.details.data.cloudinaryImageId}className="w-auto p-2 center"/>
                <h2 className="font-bold text-xl hover:text-lime-500">{props.details.data.name}</h2>
            </Link>
            
            <h4 className={"cuisine-tag-container flex-row flex-wrap"}>{props.details.data.cuisines.map((ele)=>{
                count++;
                return (<CuisinesTag item={ele} setRestaurant={props.setRestaurant} restaurant={props.restaurant} data={props.data} key={`${props.details.data.id}-key-${count}`} />)})}</h4>
            <h4>{props.details.data.avgRating} ⭐</h4>
        </div>
    );
}