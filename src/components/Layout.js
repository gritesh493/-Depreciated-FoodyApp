import Header from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

export const Layout=()=>{
    return(
    <>
    <Header key={"a"}/>   {/**Header, Title component */}
    <Body key={"b"}/>     {/**RestrauntCards, SearchBar */}
    <Footer key={"c"}/>
    </>
    );
}