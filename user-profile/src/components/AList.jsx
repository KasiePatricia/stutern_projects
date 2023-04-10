import React from "react";

const AList = ({ profilePic, id, title, firstName, lastName }) => {
  return (
    <div className="flex gap-2 w-full md:max-w-[48.9%] bg-white rounded p-3 mt-6">
      <div>
        <img src={profilePic} alt="Profile Picture" />
      </div>
      <div>
        <p className="text-gray-500">{id}</p>
        <p className="mt-3 font-semibold">
          {title} {firstName} {lastName}
        </p>
      </div>
    </div>
  );
};

export default AList;
