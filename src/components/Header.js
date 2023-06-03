const Header=()=>{
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
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
            <img className="logo" alt="logo" src={"./logo"/*to insert a local image first import it*/} />  
        </a>
    );
}

export default Header;