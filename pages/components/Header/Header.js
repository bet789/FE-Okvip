import React from "react";
import Slogan from "./Slogan";
import TopBox from "./TopBox";

const Header = () => {
  return (
    <div className="bg-header">
      <div className="bg-gradient-header"></div>
      <Slogan />
      <TopBox />
    </div>
  );
};

export default Header;
