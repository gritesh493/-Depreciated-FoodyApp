let count=0;
export const CuisinesTag=(props)=>{
    count++;
    return(
        <div className="tag" key={count}>{props.item}</div>
    );
}