import Header from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

export const Layout=()=>{
    return(
    <>
    <Header key={"Header"}/>   {/**Header, Title component */}
    <Body key={"Body"}/>     {/**RestrauntCards, SearchBar */}
    <Footer key={"Footer"}/>
    </>
    );
}