import { useState } from "react";

const Section=({title,description,isVisible,setIsVisible})=>{
    let [toggleHide,setToggleHide]=useState(false);
    return(
        <>
        <h1 className="font-bold text-lg">{title}</h1>
        {!toggleHide && isVisible?<button onClick={()=>{setToggleHide(true)}}>Hide</button>:<button onClick={()=>{setIsVisible();setToggleHide(false)}}>Show</button>}
        {!toggleHide && isVisible && <p >{description}</p>}
        </>
    );
}

const Instamart=()=>{
    const [visibleSection,setVisibleSection]=useState("about");

    return(
        <>
        <Section title={"About Instamart"} key={"11"} description={"This is About Instamart"} isVisible={visibleSection==="about"} setIsVisible={()=>setVisibleSection("about")}/>
        <Section title={"Team Instamart"} key={"22"} description={"This is Team Instamart"} isVisible={visibleSection==="team"} setIsVisible={()=>setVisibleSection("team")}/>
        <Section title={"Careers Instamart"} key={"33"} description={"This is Career Instamart"} isVisible={visibleSection==="career"} setIsVisible={()=>setVisibleSection("career")}/>
        </>
    );
}
export default Instamart;