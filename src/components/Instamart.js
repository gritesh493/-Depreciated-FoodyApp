import { useState } from "react";

const Section=({title,description})=>{
    const [isVisible,setIsVisible]=useState(true);
    return(
        <>
        <h1 className="font-bold text-lg">{title}</h1>
        {isVisible?<button onClick={()=>setIsVisible(false)}>Hide</button>:<button onClick={()=>setIsVisible(true)}>Show</button>}
        {isVisible && <p >{description}</p>}
        </>
    );
}

const Instamart=()=>{
    return(
        <>
        <Section title={"About Instamart"} key={"11"} description={"This is About Instamart"}/>
        <Section title={"Team Instamart"} key={"22"} description={"This is Team Instamart"}/>
        <Section title={"Careers Instamart"} key={"33"} description={"This is Career Instamart"}/>
        </>
    );
}
export default Instamart;