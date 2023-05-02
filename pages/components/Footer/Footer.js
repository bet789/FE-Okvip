import Image from "next/image";
import React from "react";
import Accompany from "../Main/Accompany";
import Brand from "../Main/Brand";
const Footer = () => {
  return (
    <div className="bg-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="logo-footer p-4">
              <Image
                src={"/logo-footer.png"}
                width={297}
                height={105}
                alt="logo footer"
              />
            </div>
            <div className="container des">
              <p className="text text-white">
                Liên minh OKVIP cam kết cung cấp các tiêu chuẩn cao nhất về bảo
                mật và dịch vụ khách hàng đáng tin cậy cho mọi người tham gia
                chơi GAMEONLINE. Các thành viên của chúng tôi có kinh nghiệm đầu
                ngành và các dịch vụ chuyên nghiệp hơn, đồng thời là lựa chọn
                hàng đầu của hàng chục triệu người dùng trên khắp thế giới.
                Thành viên của chúng tôi bao gồm những người chia bài với các
                chủ đề khác nhau, bạn có thể tìm thấy những trò chơi mà mình hài
                lòng tại đây. Các thành viên khác nhau duy trì tính độc đáo và
                kinh nghiệm của riêng họ, mang lại sự đa dạng cho liên minh.
                Đồng thời, tất cả các thành viên đều có một cam kết chung, đó là
                cung cấp tiêu chuẩn cao nhất về bảo mật và dịch vụ khách hàng
                đáng tin cậy cho mọi người chơi GAMEONLINE trong liên minh.
              </p>
            </div>
          </div>
          <div className="col-md-7">
            <Brand />
            <Accompany />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
