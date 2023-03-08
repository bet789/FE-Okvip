import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const PromotionMain = () => {
  return (
    <div className="container overflow-hidden pt-4">
      <div className="row gy-5">
        <div className="col-12 ">
          <div className="p-3 bg-white">
            <div className="d-flex align-items-center gap-3">
              <img src="/icon-15.png" width="25" />
              <span className="fs-4 fw-bold">Ưu đãi lớn</span>
            </div>
            <div className="row mt-2">
              <Swiper
                spaceBetween={50}
                slidesPerView={4}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="/uu-dai-1.jpg" width="280" height="200" />
                  <h6>[789BET] Phát thưởng hàng nghìn tỷ</h6>
                  <span>Nền tảng: Câu lạc bộ 789BET</span>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/uu-dai-2.jpg" width="280" height="200" />
                  <h6>[F8BET] Bảo hiểm 20 triệu</h6>
                  <span>Nền tảng: Câu lạc bộ F8BET</span>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/uu-dai-3.jpg" width="280" height="200" />
                  <h6>[SHBET] Phát lương hàng ngàn tỷ</h6>
                  <span>Nền tảng: Câu lạc bộ SHBET</span>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/uu-dai-4.jpg" width="280" height="200" />
                  <h6>[Hi88] Thưởng 100% tiền nạp đầu</h6>
                  <span>Nền tảng: Câu lạc bộ Hi88</span>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionMain;
