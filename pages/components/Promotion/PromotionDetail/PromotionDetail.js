import React from "react";
import Main from "./Main";
import SideBar from "./SideBar";

const PromotionDetail = () => {
  return (
    <div className="bg-light pt-4 pb-4 top-head">
      <div className="container overflow-hidden ">
        <div className="row gy-5">
          <Main />
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default PromotionDetail;
