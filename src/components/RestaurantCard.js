import { CuisinesTag } from "./CuisinesTags";

export const RestrauntCard=(props)=>{
    // console.log(props.details.data.avgRating);
    return(
        <>
        <div className="card">
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.details.data.cloudinaryImageId}`}/>
            <h2>{props.details.data.name}</h2>
            <h4 className={"cuisine-tag-container"}>{props.details.data.cuisines.map((ele)=>{return (<CuisinesTag item={ele}/>)})}</h4>
            <h4>{props.details.data.avgRating} ⭐</h4>
        </div>
        </>
    );
}