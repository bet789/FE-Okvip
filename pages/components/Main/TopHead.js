import {
  URL_789BET,
  URL_789BET_BANCA,
  URL_789BET_DAGA,
  URL_789BET_ESPORT,
  URL_789BET_THETHAO,
  URL_789BET_TROCHOI,
  URL_789BET_XOSO,
} from "@/contants";
import Link from "next/link";
import React from "react";

const TopHead = () => {
  return (
    <div className="container overflow-hidden pt-4 top-head">
      <div className="row gy-5">
        <div className="col-md-4 col-xs-12">
          <div className="p-3 bg-white">
            <div className="d-flex align-items-center gap-3">
              <img src="/icon-4.png" />
              <span className="fs-4 fw-bold">Giải trí nổi tiếng</span>
            </div>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">789Bet</div>
                </div>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">9.9 Điểm</div>
                </div>
                <span>136 Bình luận</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">New88</div>
                </div>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">9.9 Điểm</div>
                </div>
                <span>136 Bình luận</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Jun88</div>
                </div>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">9.9 Điểm</div>
                </div>
                <span>136 Bình luận</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">SHBet</div>
                </div>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">9.9 Điểm</div>
                </div>
                <span>136 Bình luận</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">F8Bet</div>
                </div>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">9.9 Điểm</div>
                </div>
                <span>136 Bình luận</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Hi88</div>
                </div>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">9.9 Điểm</div>
                </div>
                <span>136 Bình luận</span>
              </li>
            </ol>
          </div>
        </div>
        <div className="col-md-4 col-xs-12 game-top">
          <div className="p-3 bg-white">
            <div className="d-flex align-items-center gap-3">
              <img src="/icon-5.png" />
              <span className="fs-4 fw-bold">Trò chơi hàng đầu</span>
            </div>
            <div className="row ">
              <div className="col-4">
                <div className="p-3 mt-3  rounded-1 bg-light text-success text-center item">
                  Giải trí
                </div>
              </div>
              <div className="col-4">
                <Link
                  href={URL_789BET_TROCHOI}
                  className="text-decoration-none "
                  target={"_blank"}
                >
                  <div className="p-3 mt-3  rounded-1 bg-light text-success text-center item">
                    Trò chơi
                  </div>
                </Link>
              </div>
              <div className="col-4">
                <Link
                  href={URL_789BET_THETHAO}
                  className="text-decoration-none "
                  target={"_blank"}
                >
                  <div className="p-3 mt-3  rounded-1 bg-light text-success text-center item">
                    Thể thao
                  </div>
                </Link>
              </div>
              <div className="col-4">
                <Link
                  href={URL_789BET_XOSO}
                  className="text-decoration-none "
                  target={"_blank"}
                >
                  <div className="p-3 mt-3  rounded-1 bg-light text-success text-center item">
                    Xổ số
                  </div>
                </Link>
              </div>
              <div className="col-4">
                <Link
                  href={URL_789BET_ESPORT}
                  className="text-decoration-none "
                  target={"_blank"}
                >
                  <div className="p-3 mt-3  rounded-1 bg-light text-success text-center item">
                    E-Sport
                  </div>
                </Link>
              </div>
              <div className="col-4">
                <Link
                  href={URL_789BET_BANCA}
                  className="text-decoration-none "
                  target={"_blank"}
                >
                  <div className="p-3 mt-3  rounded-1 bg-light text-success text-center item">
                    Bắn cá
                  </div>
                </Link>
              </div>
              <div className="col-4">
                <Link
                  href={URL_789BET_DAGA}
                  className="text-decoration-none "
                  target={"_blank"}
                >
                  <div className="p-3 mt-3  rounded-1 bg-light text-success text-center item">
                    Đá gà
                  </div>
                </Link>
              </div>
              <div className="col-4">
                <Link
                  href={URL_789BET}
                  className="text-decoration-none "
                  target={"_blank"}
                >
                  <div className="p-3 mt-3  rounded-1 bg-light text-success text-center item">
                    Khác...
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xs-12 ">
          <div className="p-3 bg-white">
            <div className="d-flex align-items-center gap-3">
              <img src="/icon-6.png" />
              <span className="fs-4 fw-bold">Gửi tiền và Rút tiền nhanh</span>
            </div>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
                <div className="ms-2 me-auto">
                  <div>789BET</div>
                </div>
                <div className="w-50 ms-2 me-auto">
                  <div>Tiền gửi 9.8 Điểm</div>
                </div>
                <span className="w-50 ms-2 me-auto">136 Bình luận</span>
                <span> {">"} </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
                <div className="ms-2 me-auto">
                  <div>NEW88</div>
                </div>
                <div className="w-50 ms-2 me-auto">
                  <div>Tiền gửi 9.8 Điểm</div>
                </div>
                <span className="w-50 ms-2 me-auto">136 Bình luận</span>
                <span> {">"} </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
                <div className="ms-2 me-auto">
                  <div>Jun88</div>
                </div>
                <div className="w-50 ms-2 me-auto">
                  <div>Tiền gửi 9.8 Điểm</div>
                </div>
                <span className="w-50 ms-2 me-auto">136 Bình luận</span>
                <span> {">"} </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
                <div className="ms-2 me-auto">
                  <div>F8BET</div>
                </div>
                <div className="w-50 ms-2 me-auto">
                  <div>Tiền gửi 9.8 Điểm</div>
                </div>
                <span className="ms-2 me-auto w-50">136 Bình luận</span>
                <span> {">"} </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
                <div className="ms-2 me-auto">
                  <div>SHBET</div>
                </div>
                <div className="ms-2 me-auto w-50">
                  <div>Tiền gửi 9.8 Điểm</div>
                </div>
                <span className="ms-2 me-auto w-50">136 Bình luận</span>
                <span> {">"} </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start border-0 ">
                <div className="ms-2 me-auto">
                  <div>Hi88</div>
                </div>
                <div className="w-50 ms-2 me-auto">
                  <div>Tiền gửi 9.8 Điểm</div>
                </div>
                <span className=" w-50 ms-2 me-auto">136 Bình luận</span>
                <span> {">"} </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHead;
