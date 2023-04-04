import React from "react";

const SearchIcon = (props) => {
  return (
    <div>
      <a href="#">
        <img src={props.img} alt="mic" className="w-[1.8rem]" />
      </a>
    </div>
  );
};

export default SearchIcon;
