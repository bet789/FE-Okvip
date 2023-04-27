import React from "react";

import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";

const slide_img = [
  "/slide-mobile/banca.png",
  "/slide-mobile/gamebai.png",
  "/slide-mobile/nohu.png",
  "/slide-mobile/songbai.png",
  "/slide-mobile/thethao.png",
];
SwiperCore.use([Autoplay, Pagination]);
const SliderMobi = () => {
  return (
    <div className="slide-mobi">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="slider-mobile"
      >
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderMobi;
