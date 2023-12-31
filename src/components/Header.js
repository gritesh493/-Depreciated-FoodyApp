import { useState } from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
// import store from "../utils/store";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const isOnline = useOnline();
  console.log(isOnline);
  return (
    <div className="header mb-1 flex min-h-20 w-screen flex-row justify-between align-middle shadow-lg min-w-full max-w-full">
      <Title />
      <div className="nav-items w-full mr-10 ml-60 my-auto">
        <ul className="flex justify-around content-center pl-40 flex-wrap">
          <li className="hover:bg-gray-200 m-4 py-1 px-4 rounded-full">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-gray-200 m-4 py-1 px-4 rounded-full">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:bg-gray-200 m-4 py-1 px-4 rounded-full">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:bg-gray-200 m-4 py-1 px-4 rounded-full">
            <Link to="/cart">Cart-{cartItems.length}</Link>
          </li>
          <li className="hover:bg-gray-200 m-4 py-1 px-4 rounded-full">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="border-2 border-gray-200 m-4 py-1 px-4 rounded-full">
            {isOnline ? "🟢- Online" : "❌- Offline"}
          </li>
        </ul>
      </div>
    </div>
  );
};

const Title = () => {
  return (
    <a href="/" className="my-auto">
      <img
        className="logo w-40 ml-20 my-auto mr-10 min-w-full max-w-full"
        alt="logo"
        src={
          logo /*to insert a local image first import it from - "../../logo.png"*/
        }
      />
    </a>
  );
};

export default Header;
