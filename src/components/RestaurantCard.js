import { CuisinesTag } from "./CuisinesTags";
let count=0;
export const RestrauntCard=(props)=>{
    // console.log(props.details.data.avgRating);
    return(
        <div className="card">
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.details.data.cloudinaryImageId}`}/>
            <h2>{props.details.data.name}</h2>
            <h4 className={"cuisine-tag-container"}>{props.details.data.cuisines.map((ele)=>{
                count++;
                return (<CuisinesTag item={ele} key={`${props.details.data.id}-key-${count}`}/>)})}</h4>
            <h4>{props.details.data.avgRating} ⭐</h4>
        </div>
    );
}