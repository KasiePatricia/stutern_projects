import React from "react";

const HeaderLinks = (props) => {
  const { goto } = props;

  return (
    <div>
      <a href="#">{goto}</a>
    </div>
  );
};

export default HeaderLinks;
