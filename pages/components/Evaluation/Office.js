import React from "react";
import OfficialEvaluation from "./OfficialEvaluation";
import ReportGame from "./ReportGame";
const Office = () => {
  return (
    <div className="container overflow-hidden pt-4 bg-white">
      <div className="row gy-5">
        <div className="col-12 ">
          <div className="p-3 bg-white">
            <div className="d-flex align-items-center gap-3">
              <img src="/icon-13.png" width="25" />
              <span className="fs-4 fw-bold">Đánh giá chính thức</span>
            </div>
          </div>
          <OfficialEvaluation />
          <ReportGame />
        </div>
      </div>
    </div>
  );
};

export default Office;
