import React from "react";
import BestCasino from "./BestCasino";
import BestDeal from "./BestDeal";
import BestWithdraw from "./BestWithdraw";
import TopHead from "./TopHead";
import Report from "././Report";
import Slider from "./Slider";
import Accompany from "./Accompany";
import Social from "./Social";
import Brand from "./Brand";

const Main = () => {
  return (
    <div className="bg-light main">
      <TopHead />
      <Report />
      <Slider />
      {/* <BestDeal /> */}
      {/* <BestWithdraw /> */}
      <BestCasino />
      {/* <Accompany /> */}
      {/* <Social /> */}
      {/* <Brand /> */}
    </div>
  );
};

export default Main;
