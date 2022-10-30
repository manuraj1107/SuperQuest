import React, { useState, useEffect } from "react";
import "./mainPage.css";
import PopOver from "./Popover";
import { Search } from "./Search";
import SearchData from "./SearchData";

const MainPage = () => {

  // const [name, setName] = useState('')
  // const [displayCharacter, setDisplayCharacter] = useState(false)
  return (
    
    <div className="form__container">
    {/* <Search /> */}
    <SearchData />
    {/* <PopOver /> */}
      </div>  
      
  );
};

export default MainPage;


{/* <div>
<label>Name:</label>
  <input
    type="text"
    className="inputSearch"
    placeholder="Search...."
    onChange={(e) => {setName(e.target.value);}}
  />
  
  <button onClick={() => {setDisplayCharacter(true);}}  className="search__btn">Search Results</button>
  </div>

<div className="output">
<h1>User Info</h1>
{displayCharacter && (
   <ul>
    <li>Name: {name}</li>
   </ul>
)}
</div> */}
