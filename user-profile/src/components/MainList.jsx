import React from "react";
import AList from "./AList";

const MainList = ({ profiles, searchItem }) => {
  console.log(searchItem, "main list");
  return (
    <div className="flex flex-wrap gap-x-6">
      {profiles
        .filter(
          (profile) =>
            profile.firstName
              .toLowerCase()
              .includes(searchItem.toLowerCase()) ||
            profile.lastName.toLowerCase().includes(searchItem.toLowerCase())
        )
        .map((profile) => {
          return (
            <AList
              key={profile.id}
              id={profile.id}
              profilePic={profile.picture}
              title={profile.title}
              firstName={profile.firstName}
              lastName={profile.lastName}
            />
          );
        })}
    </div>
  );
};

export default MainList;
