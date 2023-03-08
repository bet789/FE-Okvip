import React from "react";

const SideBar = () => {
  return (
    <div className="col-3">
      <div className="p-3  bg-white">
        <div className="d-flex align-items-center gap-3">
          <img src="/icon-19.png" />
          <span className="fs-4 fw-bold">Sòng bạc hàng đầu</span>
        </div>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
            <div className="ms-2 me-auto">
              <div>789Bet</div>
            </div>
            <div className="ms-2 me-auto">
              <div>1.5%</div>
            </div>
            <span>20%</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
            <div className="ms-2 me-auto">
              <div>New88</div>
            </div>
            <div className="ms-2 me-auto">
              <div>1.5%</div>
            </div>
            <span>20%</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
            <div className="ms-2 me-auto">
              <div>Jun88</div>
            </div>
            <div className="ms-2 me-auto">
              <div>1.5%</div>
            </div>
            <span>20%</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
            <div className="ms-2 me-auto">
              <div>F8BET</div>
            </div>
            <div className="ms-2 me-auto">
              <div>1.5%</div>
            </div>
            <span>20%</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
            <div className="ms-2 me-auto">
              <div>SHBET</div>
            </div>
            <div className="ms-2 me-auto">
              <div>1.5%</div>
            </div>
            <span>20%</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
            <div className="ms-2 me-auto">
              <div>Hi88</div>
            </div>
            <div className="ms-2 me-auto">
              <div>1.5%</div>
            </div>
            <span>20%</span>
          </li>
        </ol>
      </div>
      <div className="p-3  bg-white mt-4">
        <div className="d-flex align-items-center gap-3">
          <img src="/icon-19.png" />
          <span className="fs-4 fw-bold">Ưu đãi mới nhất</span>
        </div>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
            <div className="ms-2 me-auto">
              <div>[SHBET] Tặng nạp ngày vàng</div>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
            <div className="ms-2 me-auto">
              <div>[New88] Tặng thưởng ngẫu nhiên</div>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
            <div className="ms-2 me-auto">
              <div>[Jun88] Hoàn trả tiền cược</div>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
            <div className="ms-2 me-auto">
              <div>[F8BET] Thưởng nạp đầu</div>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
            <div className="ms-2 me-auto">
              <div>[Hi88] Bảo hiểm 20 triệu đồng</div>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
            <div className="ms-2 me-auto">
              <div>[789BET] Thưởng nạp đầu</div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SideBar;
