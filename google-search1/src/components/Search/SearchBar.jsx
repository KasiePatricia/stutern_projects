import React, { useState } from "react";
// import { BiSearch } from "react-icons/bs";
import Search from "../../assets/search.svg";
import SearchIcon from "./SearchIcon";
import { ICON } from "../../data";

const SearchBar = () => {
  const [InputValue, setInputValue] = useState("");
  const [divContent, setDivContent] = useState("");

  const { Mic, Camera } = ICON;
  const eachIcon = [Mic, Camera];

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setDivContent(InputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col w-[55%]">
      <div className="border rounded-full flex justify-between mt-8 w-[100%] px-6 py-2">
        {/* <BiSearch /> */}
        <img src={Search} alt="Search" className="w-[1.5rem] mr-2" />
        <input
          type="text"
          className="outline-none border-none w-[90%]"
          name="search"
          value={InputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <div className="flex">
          {eachIcon.map((icon) => {
            return <SearchIcon key={icon.id} img={icon.img} />;
          })}
        </div>
      </div>
      <div className="mt-3">
        <p className="text-center">{divContent}</p>
      </div>
    </div>
  );
};

export default SearchBar;
