import React from "react";
import SearchBar from "./SearchBar";
import SearchDown from "./SearchDown";

const Search = () => {
  return (
    <div className="flex justify-center items-center mt-8 flex-col">
      <div>
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google"
        />
      </div>
      <SearchBar />
      <SearchDown />
    </div>
  );
};

export default Search;
