import Image from "next/image";
import React from "react";

const FooterMobi = () => {
  return (
    <div>
      <div className="companies">
        <div className="companies-header">
          <div className="title">
            <p className="text-companies-title">ĐỒNG HÀNH CÙNG CHÚNG TÔI</p>
          </div>
          <div className="text-detail">
            <p>
              OKVIP là liên minh các trang web đặt cược hàng đầu Việt Nam, cùng
              với nhiều năm kinh nghiệm, khẳng định vị thế độc quyền đứng đầu
              trong và ngoài nước.
            </p>
            <p>
              <span>OKVIP</span> hân hạnh được đồng hành cùng
            </p>
          </div>
        </div>

        <div className="slide-companies">
          <div className="next-left">
            <img src="/img_mobile/next_left.png" className="next-icon" />
          </div>
          <div className="detail-icon">
            <div className="detail-icon-item">
              <div className="boder-icon">
                <div className="icon-top">
                  <img
                    src="/img_mobile/icon_companies/google.png"
                    className="img-detail-icon"
                  />
                </div>
              </div>
              <div className="boder-icon">
                <div className="icon-bottom">
                  <img
                    src="/img_mobile/icon_companies/youtube.png"
                    className="img-detail-icon"
                  />
                </div>
              </div>
            </div>
            <div className="detail-icon-item">
              <div className="boder-icon">
                <div className="icon-top">
                  <img
                    src="/img_mobile/icon_companies/facebook.png"
                    className="img-detail-icon"
                  />
                </div>
              </div>
              <div className="boder-icon">
                <div className="icon-bottom">
                  <img
                    src="/img_mobile/icon_companies/twitch.png"
                    className="img-detail-icon"
                  />
                </div>
              </div>
            </div>
            <div className="detail-icon-item">
              <div className="boder-icon">
                <div className="icon-top">
                  <img
                    src="/img_mobile/icon_companies/twitter.png"
                    className="img-detail-icon"
                  />
                </div>
              </div>
              <div className="boder-icon">
                <div className="icon-bottom">
                  <img
                    src="/img_mobile/icon_companies/vimeo.png"
                    className="img-detail-icon"
                  />
                </div>
              </div>
            </div>
            <div className="detail-icon-item">
              <div className="boder-icon">
                <div className="icon-top">
                  <img
                    src="/img_mobile/icon_companies/tiktok.png"
                    className="img-detail-icon"
                  />
                </div>
              </div>
              <div className="boder-icon">
                <div className="icon-bottom">
                  <img
                    src="/img_mobile/icon_companies/fifa.png"
                    className="img-detail-icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="next-right">
            <img src="/img_mobile/next_right.png" className="next-icon" />
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="title">
          <p className="text-contact-title">LIÊN HỆ VỀ CHÚNG TÔI</p>
        </div>
        <div className="icon-contact">
          <div className="icon-contact-item">
            <img
              src="/img_mobile/icon_contact/facebook.png"
              className="img-contact-mobi"
            />
          </div>
          <div className="icon-contact-item">
            <img
              src="/img_mobile/icon_contact/Zalo.png"
              className="img-contact-mobi"
            />
          </div>
          <div className="icon-contact-item">
            <img
              src="/img_mobile/icon_contact/Telegram.png"
              className="img-contact-mobi"
            />
          </div>
          <div className="icon-contact-item">
            <img
              src="/img_mobile/icon_contact/email.png"
              className="img-contact-mobi"
            />
          </div>
        </div>
      </div>
      <div className="line-footer"></div>

      <div className="footer-content">
        <div className="icon-content">
          <div className="icon-content-item">
            <img src="/img_mobile/18.png" className="content-icon" />
          </div>
          <div className="icon-content-item">
            <img src="/img_mobile/us.png" className="content-icon" />
          </div>
          <div className="icon-content-item">
            <img src="/img_mobile/pagcor.png" className="content-icon" />
          </div>
          <div className="icon-content-item">
            <img src="/img_mobile/ceza.png" className="content-ceza-icon" />
          </div>
        </div>
        <div className="footer-content-detail">
          <Image
            src={"/img_mobile/okvip-logo-mobi.png"}
            width={"100"}
            height={"50"}
          />
          <p className="footer-content-text">
            Về Okvip.com Okvip.com là diễn đàn chuyên tổng hợp các thông tin,
            đánh giá những nhà cái trực tuyến hot nhất thị trường. Phương châm
            hoạt động của Okvip.com chính là đưa ra những đánh giá khách quan,
            trung thực nhất để các bet thủ có thể đưa ra lựa chọn sáng suốt
            nhất. Okvip.com được thành lập từ năm 2010, suốt 13 năm qua, chúng
            tôi đã phục vụ hàng tỷ độc giả nhờ sự công tâm của mình. Không chỉ
            dựa trên số liệu, Okvip.com còn thu thập đánh giá của các chuyên gia
            và người chơi để đưa ra cái nhìn chính xác nhất.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterMobi;
