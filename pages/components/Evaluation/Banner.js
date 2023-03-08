import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide container pt-4 banner-evaluation"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/banner-kiemchung.jpg"
            className="d-block w-100"
            alt="..."
          />
          <Link
            href="/everyone/certification"
            className="apply-btn text-decoration-none"
          >
            Đăng ký chứng nhận sòng bạc
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
