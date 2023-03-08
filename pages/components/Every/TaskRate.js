import Link from "next/link";
import React from "react";
import Slider from "../Main/Slider";
import Tab from "./Tab";

const TaskRate = () => {
  return (
    <div className="bg-light">
      <Slider />
      <Tab />
      <div className="container mt-4">
        <div className="row g-2">
          <div className="col-md-3">
            <div className="p-3  bg-white">
              <h6 className="text-center">Vui lòng chọn một sòng bạc</h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link active text-success fs-6 fw-bold text-decoration-none "
                  >
                    Chứng nhận bạch kim
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link text-black ps-3 text-decoration-none"
                  >
                    Chứng nhận vàng
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link text-black ps-3 text-decoration-none"
                  >
                    Chứng nhận bạc
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="#"
                    className="nav-link text-black ps-3 text-decoration-none"
                  >
                    Chứng nhận đồng
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 pb-4">
            <div className="p-3  bg-white">
              <div className="row mt-3">
                <div className="col-md-3 d-flex mb-5">
                  <div className="col-5">
                    <img src="/789bet.jpg" width="100%" />
                  </div>
                  <div className="col-7 px-1">
                    <span className="fw-bold">789BET</span>
                    <br></br>
                    <span className="fs-6">144 bình luận</span>
                    <br></br>
                    <span className="fs-6">Số tiền-5tr</span>
                  </div>
                </div>
                <div className="col-md-3 d-flex mb-5">
                  <div className="col-5">
                    <img src="/NEW88.jpg" width="100%" />
                  </div>
                  <div className="col-md-7 px-1">
                    <span className="fw-bold">NEW88</span>
                    <br></br>
                    <span className="fs-6">144 bình luận</span>
                    <br></br>
                    <span className="fs-6">Số tiền-5tr</span>
                  </div>
                </div>
                <div className="col-md-3 d-flex mb-5">
                  <div className="col-5">
                    <img src="/Jun88.jpg" width="100%" />
                  </div>
                  <div className="col-7 px-1">
                    <span className="fw-bold">Jun88</span>
                    <br></br>
                    <span className="fs-6">144 bình luận</span>
                    <br></br>
                    <span className="fs-6">Số tiền-5tr</span>
                  </div>
                </div>
                <div className="col-md-3 d-flex mb-5">
                  <div className="col-5">
                    <img src="/SHBET.jpg" width="100%" />
                  </div>
                  <div className="col-7 px-1">
                    <span className="fw-bold">SHBET</span>
                    <br></br>
                    <span className="fs-6">144 bình luận</span>
                    <br></br>
                    <span className="fs-6">Số tiền-5tr</span>
                  </div>
                </div>
                <div className="col-md-3 d-flex mb-5">
                  <div className="col-5">
                    <img src="/Hi88.jpg" width="100%" />
                  </div>
                  <div className="col-7 px-1">
                    <span className="fw-bold">HI88</span>
                    <br></br>
                    <span className="fs-6">144 bình luận</span>
                    <br></br>
                    <span className="fs-6">Số tiền-5tr</span>
                  </div>
                </div>
                <div className="col-md-3 d-flex mb-5">
                  <div className="col-5">
                    <img src="/F8BET.jpg" width="100%" />
                  </div>
                  <div className="col-7 px-1">
                    <span className="fw-bold">F8BET</span>
                    <br></br>
                    <span className="fs-6">144 bình luận</span>
                    <br></br>
                    <span className="fs-6">Số tiền-5tr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskRate;
