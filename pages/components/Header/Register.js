import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div
      className="modal fade"
      id="Register"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Đăng ký
            </h5>
            <Link
              className="text-black w-75 text-end"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#Login"
            >
              Đăng nhập
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3 d-flex">
                <label for="recipient-name" className="col-form-label w-25">
                  Email：
                </label>
                <input
                  type="text"
                  className="form-control w-50"
                  id="user-name"
                  placeholder="Nhập email..."
                />
              </div>
              <div className="mb-3 d-flex">
                <label for="message-text" className="col-form-label w-25">
                  Mã xác nhận：
                </label>
                <input
                  type="text"
                  className="form-control w-50"
                  id="maxacnhan"
                  placeholder="Nhập mã xác nhận"
                />
                <button className="btn btn-success ms-2"> Mã</button>
              </div>
              <div className="mb-3 d-flex">
                <label for="recipient-name" className="col-form-label w-25">
                  Tên tài khoản:
                </label>
                <input
                  type="text"
                  className="form-control w-50"
                  id="user-name"
                  placeholder="Nhập tên tài khoản..."
                />
              </div>
              <div className="mb-3 d-flex">
                <label for="recipient-name" className="col-form-label w-25">
                  Nhập mật khẩu:
                </label>
                <input
                  type="password"
                  className="form-control w-50"
                  id="user-name"
                  placeholder="Nhập mật khẩu..."
                />
              </div>
              <div className="mb-3 d-flex">
                <label for="recipient-name" className="col-form-label w-25">
                  Xác nhận:
                </label>
                <input
                  type="password"
                  className="form-control w-50"
                  id="user-name"
                  placeholder="Xác nhận mật khẩu..."
                />
              </div>
            </form>
          </div>
          <div className="modal-footer justify-content-center ">
            <button type="button" className="btn btn-success w-25 ">
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
