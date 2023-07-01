import logo from "../../logo.png"
import {Link} from "react-router-dom"
const Header=()=>{
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>Contact</li>
                    <li>Cart</li>
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