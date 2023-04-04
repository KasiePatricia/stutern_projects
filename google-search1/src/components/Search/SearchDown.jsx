import React from "react";
import SearchButton from "./SearchButton";
import SearchLang from "./SearchLang";

const SearchDown = () => {
  const searchbtn = ["Google search", "I'm Feeling Lucky"];
  const langs = ["Hausa", "Igbo", "Ede Yoruba", "Nigerian Pidgin"];

  return (
    <div>
      <div className="flex justify-center items-center gap-8 mt-8">
        {searchbtn.map((btn, index) => {
          return <SearchButton key={index} info={btn} />;
        })}
      </div>
      <div className="flex gap-2 mt-8 leading-7 text-[0.813rem]">
        <span className="text-[#4d5156]">Google offered in: </span>
        {langs.map((item, index) => {
          return <SearchLang key={index} lang={item} />;
        })}
      </div>
    </div>
  );
};

export default SearchDown;
