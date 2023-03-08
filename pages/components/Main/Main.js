import React from "react";
import BestCasino from "./BestCasino";
import BestDeal from "./BestDeal";
import BestWithdraw from "./BestWithdraw";
import Slider from "./Slider";
import TopHead from "./TopHead";
import TopHead2 from "./TopHead2";

const Main = () => {
  return (
    <div className="bg-light main">
      <Slider />
      <TopHead />
      <TopHead2 />
      <BestDeal />
      <BestWithdraw />
      <BestCasino />
    </div>
  );
};

export default Main;
