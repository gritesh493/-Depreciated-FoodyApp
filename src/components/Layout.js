import Header from "./Header";
import {Outlet} from "react-router-dom"
import { Footer } from "./Footer";

export const Layout=()=>{
    return(
    <>
    <Header key={"Header"} />   {/**Header, Title component */}
    {/* <Body key={"Body"}/>     *RestrauntCards, SearchBar */}
    <Outlet/>
    <Footer key={"Footer"}/>
    </>
    );
}