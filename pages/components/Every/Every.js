import React from "react";
import ReportGame from "../Evaluation/ReportGame";
import Slider from "../Main/Slider";
import Rate from "./Rate";
import ReportRate from "./ReportRate";
import Tab from "./Tab";

const Every = () => {
  return (
    <div className="bg-light every pb-4">
      <Slider />
      <Tab />
      <Rate />
      <ReportRate />
    </div>
  );
};

export default Every;
