import Header from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

export const Layout=()=>{
    return(
    <>
    <Header/>   {/**Header, Title component */}
    <Body/>     {/**RestrauntCards, SearchBar */}
    <Footer/>
    </>
    );
}