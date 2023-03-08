import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div
      className="modal fade"
      id="Login"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Đăng Nhập
            </h5>
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
                  Tên đăng nhập:
                </label>
                <input
                  type="text"
                  className="form-control w-50"
                  id="user-name"
                  placeholder="Nhập tên đăng nhập/Email"
                />
              </div>
              <div className="mb-3 d-flex">
                <label for="message-text" className="col-form-label w-25">
                  Mật khẩu:
                </label>
                <input
                  type="password"
                  className="form-control w-50"
                  id="password"
                  placeholder="Nhập mật khẩu"
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Ghi nhớ mật khẩu
                </label>
              </div>
            </form>
          </div>
          <div className="modal-footer justify-content-center ">
            <button type="button" className="btn btn-success w-25 ">
              Xác nhận
            </button>
          </div>
          <div>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link
                  className="nav-link active text-black"
                  aria-current="page"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#Register"
                >
                  Đăng ký
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" href="#">
                  Quên mật khẩu ?
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
