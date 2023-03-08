import Link from "next/link";
import React from "react";
import Login from "./Login";
import Register from "./Register";

const TopBox = () => {
  return (
    <nav className="top-box">
      <div className="container d-flex position-relative">
        <span className="text-white top-box-head">
          Đánh giá Haibo --- Trang web đề xuất và đánh giá trò chơi đầu tiên
          trên thế giới [trang web chính thức]
        </span>
        <div className="position-absolute end-0 pe-2">
          <Link
            href="#"
            className="text-white text-decoration-none"
            data-bs-toggle="modal"
            data-bs-target="#Login"
          >
            Đăng nhập
          </Link>
          <Login />
          <span className="text-white"> | </span>
          <Link
            href="#"
            className="text-white text-decoration-none"
            data-bs-toggle="modal"
            data-bs-target="#Register"
          >
            Đăng ký
          </Link>
          <Register />
        </div>
      </div>
    </nav>
  );
};

export default TopBox;
