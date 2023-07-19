// import { data } from "../constant.js"; //this will search on old data -- NOT DYNAMIC //used for study purpose

let count=0;
export const CuisinesTag=(props)=>{
    count++;

    //TODO- to make it realtime, we would have to do prop drilling inside of body's state to here...do it the better way.
    filterdata=(text,data)=>{
        const details = data.filter((ele)=>{return(ele.data.cuisines.includes(text))}); //How to send props to sibling component ?
        props.setRestaurant(details);
    }

    return(
        <div className="tag bg-green-300 rounded-full border-green-700 border-2 m-2 px-3 py-0 cursor-pointer hover:bg-lime-300 inline-block" key={count} onClick={()=>filterdata(props.item,props.restaurant)}>{props.item}</div>
    );
}