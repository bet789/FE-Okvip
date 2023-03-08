import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#4a4e5f" }}>
      <div className="container overflow-hidden pt-4 best-withdraw">
        <div className="row gy-5">
          <div className="col-12 ">
            <div className="p-3 ">
              <div className="d-flex align-items-center gap-3">
                <img src="/logo.png" width="150" />
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <p className="title text-white-50 "> Về Okvip.com</p>
                  <p
                    className="sub-title text-white-50 "
                    style={{ fontSize: "14px" }}
                  >
                    Về Okvip.com Okvip.com là diễn đàn chuyên tổng hợp các thông
                    tin, đánh giá những nhà cái trực tuyến hot nhất thị trường.
                    Phương châm hoạt động của Okvip.com chính là đưa ra những
                    đánh giá khách quan, trung thực nhất để các bet thủ có thể
                    đưa ra lựa chọn sáng suốt nhất. Okvip.com được thành lập từ
                    năm 2010, suốt 13 năm qua, chúng tôi đã phục vụ hàng tỷ độc
                    giả nhờ sự công tâm của mình. Không chỉ dựa trên số liệu,
                    Okvip.com còn thu thập đánh giá của các chuyên gia và người
                    chơi để đưa ra cái nhìn chính xác nhất.
                  </p>
                </div>
                <div className="col-md-3 ">
                  <div className="contact">
                    <p className="title text-white-50 "> Thông tin liên hệ:</p>
                    <a
                      href="https://789bet11.com/cskh"
                      className="p-subtitle text-white-50 text-decoration-none"
                    >
                      Chăm sóc khách hàng: https://789bet11.com/cskh
                    </a>
                    <br></br>
                    <span className="p-subtitle text-white-50 ">
                      Điện thoại: +84 868888789
                    </span>
                    <br></br>
                    <span className="p-subtitle text-white-50 ">
                      Email: Admin@789bet.com
                    </span>
                  </div>
                </div>
                {/* <div className="col-md-3">
                  <img src="./QR.png" width="100" />
                  <p className="text-white-50">
                    Quét mã để truy cập toàn bộ mạng
                  </p>
                </div> */}
              </div>
            </div>
            <p className="text-center text-white-50">
              Copyright © 2012~2022 Okvip.com All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
