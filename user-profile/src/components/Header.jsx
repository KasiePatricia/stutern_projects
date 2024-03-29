import React from "react";

const Header = ({ searchItem, onhandleChange }) => {
  return (
    <div className="">
      <input
        type="text"
        placeholder="Search by name..."
        className="bg-white rounded w-full py-3 px-5"
        value={searchItem}
        onChange={(event) => onhandleChange(event.target.value)}
      />
    </div>
  );
};

export default Header;
