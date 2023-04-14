import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#292524" }}>
      <div className="logo-footer text-center p-4">
        <Image
          src={"./logo-footer.png"}
          width={297}
          height={105}
          alt="logo footer"
        />
      </div>
      <div className="container des">
        <p className="text text-white text-center">
          Liên minh OKVIP cam kết cung cấp các tiêu chuẩn cao nhất về bảo mật và
          dịch vụ khách hàng đáng tin cậy cho mọi người tham gia chơi
          GAMEONLINE. Các thành viên của chúng tôi có kinh nghiệm đầu ngành và
          các dịch vụ chuyên nghiệp hơn, đồng thời là lựa chọn hàng đầu của hàng
          chục triệu người dùng trên khắp thế giới.... <i>Xem thêm</i>
        </p>
      </div>
      <div className="reserved text-center p-4">
        <span className=" text-white text-uppercase">
          © 2023 okvip - All intellectual property rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
