import { useState } from "react";
import logo from "../../logo.png"
import {Link} from "react-router-dom"
import useOnline from "../utils/useOnline";
import {useSelector} from "react-redux";
// import store from "../utils/store";

const Header=()=>{

    const cartItems=useSelector(state=>state.cart.items);
    console.log(cartItems);
    
    const isOnline=useOnline();
    console.log(isOnline)
    return(
        <div className="header mb-1 flex h-20 w-full flex-row justify-between align-middle shadow-lg">
            <Title/>
            <div className="nav-items w-full mr-10 ml-60 my-auto">
                <ul className="flex justify-around content-center pl-40">
                    <li className="hover:bg-gray-200 m-4 py-1 px-4 rounded-full"><Link to="/">Home</Link></li>
                    <li className="hover:bg-gray-200 m-4 py-1 px-4 rounded-full"><Link to="/about">About</Link></li>
                    <li className="hover:bg-gray-200 m-4 py-1 px-4 rounded-full"><Link to="/contact">Contact</Link></li>
                    <li className="hover:bg-gray-200 m-4 py-1 px-4 rounded-full">Cart-{cartItems.length}</li>
                    <li className="hover:bg-gray-200 m-4 py-1 px-4 rounded-full"><Link to="/instamart">Instamart</Link></li>
                    <li className="border-2 border-gray-200 m-4 py-1 px-4 rounded-full">{isOnline?'🟢- Online':'❌- Offline'}</li>
                </ul>
            </div>
        </div>
        
    );
}

const Title=()=>{
    return(
        <a href="/" className="ml-10 pl-10 my-auto">
            <img className="logo w-28" alt="logo" src={logo/*to insert a local image first import it from - "../../logo.png"*/} />  
        </a>
    );
}

export default Header;