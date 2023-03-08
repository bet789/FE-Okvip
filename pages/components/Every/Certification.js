import React from "react";
import Tab from "./Tab";
import Slider from "../Main/Slider";

const Certification = () => {
  return (
    <div className="bg-light">
      <Slider />
      <Tab />
      <div className="container mt-4 bg-white form-certificate">
        <div className="row">
          <h4 className="text-center mt-4">
            Gửi thông tin chứng nhận sòng bạc
          </h4>
          <div className="col-md-6 m-auto">
            <div className="mb-3 d-flex align-items-center">
              <label
                for="exampleFormControlInput1"
                className="form-label label-certification w-25 text-end pe-2"
              >
                Tên sòng bạc:
              </label>
              <input
                type="email"
                className="form-control w-100"
                id="exampleFormControlInput1"
                placeholder="Nhập tên sòng bạc"
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label
                for="exampleFormControlInput1"
                className="form-label w-25 label-certification text-end pe-2"
              >
                Trang web sòng bạc:
              </label>
              <input
                type="email"
                className="form-control w-100"
                id="exampleFormControlInput1"
                placeholder="Nhập trang web của sòng bạc, bạn có thể điền thêm, cách nhau bởi dấu , "
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label
                for="exampleFormControlInput1"
                className="form-label w-25 label-certification text-end pe-2"
              >
                Cấp độ ứng dụng:
              </label>
              <input
                type="email"
                className="form-control w-100"
                id="exampleFormControlInput1"
                placeholder="Thông tin liên lạc của bạn: tên / điện thoại, điện tín hoặc QQ"
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label
                for="exampleFormControlInput1"
                className="form-label w-25 label-certification text-end pe-2"
              >
                Địa chỉ email liên lạc:
              </label>
              <input
                type="email"
                className="form-control w-100"
                id="exampleFormControlInput1"
                placeholder="Nhập email của bạn"
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label
                for="exampleFormControlInput1"
                className="form-label w-25  text-end pe-2"
              >
                mã xác nhận:
              </label>
              <input
                type="email"
                className="form-control w-100"
                id="exampleFormControlInput1"
                placeholder="nhập mã xác nhận"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-outline-success rounded-pill mt-4 w-50 mb-4 text-center"
              >
                Gửi đánh giá
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
