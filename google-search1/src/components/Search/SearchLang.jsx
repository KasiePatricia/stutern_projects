import React from "react";

const SearchLang = (props) => {
  return (
    <div>
      <span className="flex gap-3 text-[#1a0dab]">
        <a href="#">{props.lang}</a>
      </span>
    </div>
  );
};

export default SearchLang;
