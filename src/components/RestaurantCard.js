import { CuisinesTag } from "./CuisinesTags";
import { Logo_URL } from "../constant";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/userContext";

let count=0;
export const RestrauntCard=(props)=>{
    const {user, email}=useContext(userContext);
    // console.log(props.details.data.avgRating);
    return(
        <div className="card m-5 p-5 w-80 hover:shadow-xl flex-col align-middle">
            <h1>{user}</h1>
            <h1>{email}</h1>
            
            <Link to={`/restaurant/${props.details.info.id}`}>
                <img src={Logo_URL + props.details.info.cloudinaryImageId}className="w-auto p-2 center"/>
                <h2 className="font-bold text-xl hover:text-lime-500">{props.details.info.name}</h2>
            </Link>
            
            <h4 className={"cuisine-tag-container flex-row flex-wrap"}>{props.details.info.cuisines.map((ele)=>{
                count++;
                return (<CuisinesTag item={ele} setRestaurant={props.setRestaurant} restaurant={props.restaurant} data={props.data} key={`${props.details.info.id}-key-${count}`} />)})}</h4>
            <h4>{props.details.info.avgRating} ⭐</h4>
        </div>
    );
}