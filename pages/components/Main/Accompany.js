import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper";
export default function Accompany() {
  return (
    <div className="bg-accompany">
      <div className="title-accompany pt-2 pb-2">
        <span>ĐỒNG HÀNH CÙNG CHÚNG TÔI</span>
      </div>
      <p className="text-white ">
        OKVIP là liên minh các trang web đặt cược hàng đầu Việt Nam, cùng với
        nhiều năm kinh nghiệm, khẳng định vị thế độc quyền đứng đầu trong và
        ngoài nước.OKVIP hân hạnh được đồng hành cùng
      </p>

      <div className="slide-accompany pt-4 ">
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={3}
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/img_mobile/icon_companies/talk.png"
              className="img-detail-icon"
              width={"75"}
              style={{ objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img_mobile/icon_companies/live-chat.png"
              className="img-detail-icon"
              width={"75"}
              style={{ objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img_mobile/icon_companies/youtube.png"
              className="img-detail-icon"
              width={"75"}
              style={{ objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img_mobile/icon_companies/tiktok.png"
              className="img-detail-icon"
              width={"75"}
              style={{ objectFit: "contain" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img_mobile/icon_companies/telegram.png"
              style={{ objectFit: "contain" }}
              width={"75"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
