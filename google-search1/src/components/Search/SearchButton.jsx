import React from "react";

const SearchButton = (props) => {
  return (
    <div>
      <button className="bg-[#f8f9fa] text-[#202124] text-sm leading-7 py-2 px-4 rounded pointer">
        {props.info}
      </button>
    </div>
  );
};

export default SearchButton;
