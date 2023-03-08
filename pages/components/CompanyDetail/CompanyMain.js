import React from "react";

const CompanyMain = () => {
  return (
    <div className="container overflow-hidden pt-4">
      <div className="row gy-5">
        <div className="col-12 ">
          <div className="p-3 bg-white">
            <div className="d-flex align-items-center gap-3">
              <span className="fs-4 fw-bold">Ưu đãi mới nhất</span>
            </div>
            <div className="row mt-2">
              <div className="col-3">
                <img src="/uu-dai-1.jpg" width="100%" height="150" />
                <div className="">
                  <span className=" fw-bold w-50">
                    [789BET] Phát thưởng hàng nghìn tỷ
                  </span>
                  <p>Thương hiệu: 789Bet</p>
                </div>
              </div>
              <div className="col-3">
                <img src="/uu-dai-5.jpg" width="100%" height="150" />
                <div className="">
                  <span className=" fw-bold w-50">
                    [789BET] Phát thưởng hàng nghìn tỷ
                  </span>
                  <p>Thương hiệu: 789BET</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMain;
