import React from "react";
import ReactDOM from "react-dom/client";

const Layout=()=>{
    return(
    <>
    <Header/>   {/**Header, Title component */}
    <Body/>     {/**RestrauntCards, SearchBar */}
    <Footer/>
    </>
    );
}
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
const Body=()=>{
    return(
        <div className="body">
            <RestrauntCard/>
        </div>
    );
}
const Footer=()=>{
    return(
        <div className="footer">
            Footer
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
const RestrauntCard=()=>{
    return(
        <>
        <div className="card">
            <img src="#"/>
            <h2>Burger King</h2>
            <h3>Burgers, French fries</h3>
            <h4>4.2 Stars</h4>
        </div>
        <div className="card">
            <img src="#"/>
            <h2>Burger King</h2>
            <h3>Burgers, French fries</h3>
            <h4>4.2 Stars</h4>
        </div>
        </>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout/>);