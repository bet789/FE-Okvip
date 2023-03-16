import React from "react";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([EffectCoverflow, Pagination]);

const slide_img = [
  "/img_mobile/slide_mobi/BANCA.png",
  "/img_mobile/slide_mobi/casino.png",
  "/img_mobile/slide_mobi/gamebai.png",
  "/img_mobile/slide_mobi/nohu.png",
  "/img_mobile/slide_mobi/THETHAO.png",
];

const SliderMobi = () => {
  return (
    <div className="slide-mobi">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 115,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="slider-mobile"
      >
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" style={{ objectFit: "contain" }} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderMobi;
