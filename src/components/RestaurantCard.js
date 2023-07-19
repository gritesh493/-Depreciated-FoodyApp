import { CuisinesTag } from "./CuisinesTags";
import { Logo_URL } from "../constant";
import { Link } from "react-router-dom";
let count=0;
export const RestrauntCard=(props)=>{
    // console.log(props.details.data.avgRating);
    return(
        <div className="card">
            <img src={Logo_URL + props.details.data.cloudinaryImageId}/>

            <Link to={`/restaurant/${props.details.data.id}`}>
                <h2>{props.details.data.name}</h2>
            </Link>
            
            <h4 className={"cuisine-tag-container"}>{props.details.data.cuisines.map((ele)=>{
                count++;
                return (<CuisinesTag item={ele} setRestaurant={props.setRestaurant} restaurant={props.restaurant} data={props.data} key={`${props.details.data.id}-key-${count}`}/>)})}</h4>
            <h4>{props.details.data.avgRating} ⭐</h4>
        </div>
    );
}