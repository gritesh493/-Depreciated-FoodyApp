import { useState } from "react";
import logo from "../../logo.png"
import {Link} from "react-router-dom"
import useOnline from "../utils/useOnline";

const Header=()=>{
    const isOnline=useOnline();
    console.log(isOnline)
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li><Link to="/instamart">Instamart</Link></li>
                    <li>{isOnline?'🟢- Online':'❌- Offline'}</li>
                </ul>
            </div>
        </div>
        
    );
}

const Title=()=>{
    return(
        <a href="/">
            <img className="logo" alt="logo" src={logo/*to insert a local image first import it from - "../../logo.png"*/} />  
        </a>
    );
}

export default Header;