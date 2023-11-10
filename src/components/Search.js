import { useState } from "react";
import { ShimmerUI } from "./ShimmerUI";
// import { data } from "../constant.js"; //this will search on old data -- NOT DYNAMIC //used for study purpose

export const Search = (props) => {
  const [searchText, setSearchText] = useState(""); //Must be inside functional component.

  async function filterdata(text) {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6012849&lng=88.3312686&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //TODO: While fetching, shimmer must be shown on body, and after that rendered content must also be rendered in the body.
    // data= await props.restaurant;
    const restaurantList = json?.data?.cards.filter((ele) => {
      if (
        ele.card?.card?.gridElements?.infoWithStyle?.restaurants?.length !=
        undefined
      )
        return true;
      else return false;
    });
    console.log(
      restaurantList[0].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    let details = await restaurantList[0].card?.card?.gridElements
      ?.infoWithStyle?.restaurants;
    if (text != "")
      details =
        await restaurantList[0].card?.card?.gridElements?.infoWithStyle?.restaurants.filter(
          (ele) => {
            return ele.info.name.toLowerCase().includes(text.toLowerCase());
          }
        ); //!TODO=> if text="" Refetch data
    console.log(details);
    props.setUiData(details);
  }

  return (
    <div className="search-container w-full ml-10 pl-5 ">
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        className="border-2 border-red-800 rounded-full px-3"
      ></input>
      <button
        className="btn rounded-full bg-red-300 border-2 border-red-800 hover:bg-orange-600 m-2 px-2"
        onClick={() => filterdata(searchText)}
      >
        Search
      </button>{" "}
      {/*Always use callback/anonymous function inside onClick */}
    </div>
  );
};
