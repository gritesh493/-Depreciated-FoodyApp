import Header from "./Header";
import {Outlet} from "react-router-dom"
import { Footer } from "./Footer";
import { Provider } from "react-redux";
import store from "../utils/store";

export const Layout=()=>{
    return(
    <>
    <Provider store={store}>
    <Header key={"Header"} />   {/**Header, Title component */}
    {/* <Body key={"Body"}/>     *RestrauntCards, SearchBar */}
    <Outlet/>
    <Footer key={"Footer"}/>
    </Provider>
    </>
    );
}