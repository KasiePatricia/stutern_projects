import React, { useState } from "react";
import Header from "./components/Header";
import MainList from "./components/MainList";

const UserProfile = ({ profiles }) => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <div className="bg-red-400 min-h-screen">
      <div className="w-[90%] mx-auto py-8">
        <Header searchTerm={searchItem} onhandleChange={setSearchItem} />
        <MainList profiles={profiles} searchItem={searchItem} />
      </div>
    </div>
  );
};

export default UserProfile;
