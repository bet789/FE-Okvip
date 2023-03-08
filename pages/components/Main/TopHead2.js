import {
  URL_789BET_BANCA,
  URL_789BET_DAGA,
  URL_789BET_ESPORT,
  URL_789BET_THETHAO,
  URL_789BET_TROCHOI,
  URL_789BET_XOSO,
} from "@/contants";
import Link from "next/link";
import React from "react";

const TopHead2 = () => {
  return (
    <div className="container overflow-hidden pt-4">
      <div className="row gy-5">
        <div className="col-md-6 col-xs-12">
          <div className="p-3 bg-white">
            <div className="d-flex align-items-center gap-3">
              <img src="/icon-7.png" />
              <span className="fs-4 fw-bold">Chứng nhận chính thức</span>
            </div>
            <div className="row mt-3">
              <div className="col-md-4 d-flex mb-4 pt-4">
                <div className="col-5">
                  <Link href="/company/1">
                    <img src="/789bet.jpg" width="100%" />
                  </Link>
                </div>
                <div className="col-7 px-1">
                  <span className="fw-bold"> 789BET</span>
                  <br></br>
                  <span className="fs-6">144 đánh giá</span> <br></br>
                  <span className="fs-6">Số tiền - 5tr</span>
                </div>
              </div>
              <div className="col-md-4 d-flex mb-4 pt-4">
                <div className="col-5">
                  <Link href="/company/2">
                    <img src="/NEW88.jpg" width="100%" />
                  </Link>
                </div>
                <div className="col-7 px-1">
                  <span className="fw-bold"> New88</span>
                  <br></br>
                  <span className="fs-6">144 đánh giá</span> <br></br>
                  <span className="fs-6">Số tiền - 5tr</span>
                </div>
              </div>
              <div className="col-md-4 d-flex mb-4 pt-4">
                <div className="col-5">
                  <Link href="/company/3">
                    <img src="./Hi88.jpg" width="100%" />
                  </Link>
                </div>
                <div className="col-7 px-1">
                  <span className="fw-bold"> HI88</span>
                  <br></br>
                  <span className="fs-6">144 đánh giá</span> <br></br>
                  <span className="fs-6">Số tiền - 5tr</span>
                </div>
              </div>
              <div className="col-md-4 d-flex mb-4 pt-4">
                <div className="col-5">
                  <Link href="/company/4">
                    <img src="./SHBET.jpg" width="100%" />
                  </Link>
                </div>
                <div className="col-7 px-1">
                  <span className="fw-bold"> SHBET</span>
                  <br></br>
                  <span className="fs-6">144 đánh giá</span> <br></br>
                  <span className="fs-6">Số tiền - 5tr</span>
                </div>
              </div>
              <div className="col-md-4 d-flex mb-4 pt-4">
                <div className="col-5">
                  <Link href="/company/5">
                    <img src="./Jun88.jpg" width="100%" />
                  </Link>
                </div>
                <div className="col-7 px-1">
                  <span className="fw-bold"> Jun88</span>
                  <br></br>
                  <span className="fs-6">144 đánh giá</span> <br></br>
                  <span className="fs-6">Số tiền - 5tr</span>
                </div>
              </div>
              <div className="col-md-4 d-flex mb-4 pt-4">
                <div className="col-5">
                  <Link href="/company/6">
                    <img src="./F8BET.jpg" width="100%" />
                  </Link>
                </div>
                <div className="col-7 px-1">
                  <span className="fw-bold"> F8BET</span>
                  <br></br>
                  <span className="fs-6">144 đánh giá</span> <br></br>
                  <span className="fs-6">Số tiền - 5tr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12">
          <div className="p-3 bg-white">
            <div className="d-flex align-items-center gap-3">
              <img src="/icon-8.png" />
              <span className="fs-4 fw-bold">Game hay</span>
            </div>
            <div className="row mt-2">
              <div className="col-md-4">
                <Link
                  href={URL_789BET_DAGA}
                  className="text-decoration-none text-black"
                  target={"_blank"}
                >
                  <img src="./game-hay-1.jpg" width="100%" />
                  <div className="d-flex align-items-center">
                    <span
                      className="fw-bold fs-4 border-end pe-2"
                      style={{ color: "#fa6400" }}
                    >
                      9.9
                    </span>
                    <span className="ps-2 pe-4" style={{ fontSize: "12px" }}>
                      Đá gà
                    </span>
                    <div className="text-center">
                      <span
                        className="ps-2 fw-bold "
                        style={{ fontSize: "12px" }}
                      >
                        789BET
                      </span>
                      <p className="ellipsis" style={{ fontSize: "12px" }}>
                        136 bình luận
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 ">
                <Link
                  href={URL_789BET_ESPORT}
                  className="text-decoration-none text-black"
                  target={"_blank"}
                >
                  <img src="./game-hay-2.jpg" width="100%" />
                  <div className="d-flex align-items-center">
                    <span
                      className="fw-bold fs-4 border-end pe-2"
                      style={{ color: "#fa6400" }}
                    >
                      9.9
                    </span>
                    <span className="ps-2 pe-3" style={{ fontSize: "12px" }}>
                      E-Sport
                    </span>
                    <div className="text-center">
                      <span
                        className="ps-2 fw-bold "
                        style={{ fontSize: "12px" }}
                      >
                        789BET
                      </span>
                      <p className="ellipsis" style={{ fontSize: "12px" }}>
                        136 bình luận
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link
                  href={URL_789BET_XOSO}
                  className="text-decoration-none text-black"
                  target={"_blank"}
                >
                  <img src="./game-hay-3.jpg" width="100%" />
                  <div className="d-flex align-items-center">
                    <span
                      className="fw-bold fs-4 border-end pe-2"
                      style={{ color: "#fa6400" }}
                    >
                      9.9
                    </span>
                    <span className="ps-2 pe-4" style={{ fontSize: "12px" }}>
                      Xổ số
                    </span>
                    <div className="text-center">
                      <span
                        className="ps-2 fw-bold "
                        style={{ fontSize: "12px" }}
                      >
                        789BET
                      </span>
                      <p className="ellipsis" style={{ fontSize: "12px" }}>
                        136 bình luận
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link
                  href={URL_789BET_THETHAO}
                  className="text-decoration-none text-black"
                  target={"_blank"}
                >
                  <img src="./game-hay-4.jpg" width="100%" />
                  <div className="d-flex align-items-center">
                    <span
                      className="fw-bold fs-4 border-end pe-2"
                      style={{ color: "#fa6400" }}
                    >
                      9.9
                    </span>
                    <span className="ps-2 pe-2" style={{ fontSize: "12px" }}>
                      Thể thao
                    </span>
                    <div className="text-center">
                      <span
                        className="ps-2 fw-bold "
                        style={{ fontSize: "12px" }}
                      >
                        789BET
                      </span>
                      <p className="ellipsis" style={{ fontSize: "12px" }}>
                        136 bình luận
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 ">
                <Link
                  href={URL_789BET_TROCHOI}
                  className="text-decoration-none text-black"
                  target={"_blank"}
                >
                  <img src="./game-hay-5.jpg" width="100%" />
                  <div className="d-flex align-items-center">
                    <span
                      className="fw-bold fs-4 border-end pe-2"
                      style={{ color: "#fa6400" }}
                    >
                      9.9
                    </span>
                    <span className="ps-2 pe-2" style={{ fontSize: "12px" }}>
                      Trò chơi
                    </span>
                    <div className="text-center">
                      <span
                        className="ps-2 fw-bold "
                        style={{ fontSize: "12px" }}
                      >
                        789BET
                      </span>
                      <p className="ellipsis" style={{ fontSize: "12px" }}>
                        136 bình luận
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link
                  href={URL_789BET_BANCA}
                  className="text-decoration-none text-black"
                  target={"_blank"}
                >
                  <img src="./game-hay-6.jpg" width="100%" />
                  <div className="d-flex align-items-center">
                    <span
                      className="fw-bold fs-4 border-end pe-2"
                      style={{ color: "#fa6400" }}
                    >
                      9.9
                    </span>
                    <span className="ps-2 pe-4" style={{ fontSize: "12px" }}>
                      Bắn cá
                    </span>
                    <div className="text-center">
                      <span
                        className="ps-2 fw-bold "
                        style={{ fontSize: "12px" }}
                      >
                        789BET
                      </span>
                      <p className="ellipsis" style={{ fontSize: "12px" }}>
                        136 bình luận
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHead2;
