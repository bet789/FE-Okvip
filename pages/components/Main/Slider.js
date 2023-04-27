import React from "react";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";

const slide_img = [
  "/slide_pc/banca.png",
  "/slide_pc/gamebai.png",
  "/slide_pc/nohu.png",
  "/slide_pc/songbai.png",
  "/slide_pc/thethao.png",
];
SwiperCore.use([Autoplay, Pagination]);
export default function Slider() {
  return (
    <div className="slider pt-4 ">
      <div className="container ">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
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
    </div>
  );
}
