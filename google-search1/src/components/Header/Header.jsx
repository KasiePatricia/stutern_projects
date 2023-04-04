import React from "react";
import HeaderLinks from "./HeaderLinks";
import Hamburger from "../../assets/nine-squares.png";

const Header = () => {
  const linksTo = ["Gmail", "Images"];
  console.log(linksTo);

  return (
    <div className="flex justify-end pt-3 px-7 gap-3 items-center">
      <div className="flex gap-2">
        {linksTo.map((item, index) => {
          return <HeaderLinks key={index} goto={item} />;
        })}
      </div>
      <a href="#">
        <img
          src={Hamburger}
          alt="Hamburger"
          className="w-[1.5rem] h-[1.5rem]"
        />
      </a>
      <a
        href="#"
        className="w-[2rem] h-[2rem] bg-black text-white rounded-full flex justify-center items-center"
      >
        <p>K</p>
      </a>
    </div>
  );
};

export default Header;
