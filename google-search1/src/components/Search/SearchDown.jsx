import React from "react";

const SearchDown = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-8 mt-8">
        <button className="bg-[#f8f9fa] text-[#202124] text-sm leading-7 py-2 px-4 rounded">
          Google search
        </button>
        <button className="bg-[#f8f9fa] text-[#202124] text-sm leading-7 py-2 px-4 rounded">
          I'm Feeling Lucky
        </button>
      </div>
      <div className="flex gap-2 mt-8 leading-7 text-[0.813rem]">
        <span className="text-[#4d5156]">Google offered in: </span>
        <span className="flex gap-3 text-[#1a0dab]">
          <a href="#">Hausa</a>
          <a href="#">Igbo</a>
          <a href="#">Ede Yoruba</a>
          <a href="#">Nigerian Pidgin</a>
        </span>
      </div>
    </div>
  );
};

export default SearchDown;
