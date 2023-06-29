// import { data } from "../constant.js"; //this will search on old data -- NOT DYNAMIC //used for study purpose

let count=0;
export const CuisinesTag=(props)=>{
    count++;

    filterdata=(text,data)=>{
        const details = data.filter((ele)=>{return(ele.data.cuisines.includes(text))}); //How to send props to sibling component ?
        props.setRestaurant(details);
    }

    return(
        <div className="tag" key={count} onClick={()=>filterdata(props.item,props.restaurant)}>{props.item}</div>
    );
}