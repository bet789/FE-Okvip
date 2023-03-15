import React from "react";
import SwiperCore, { EffectCards, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

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
      {/* <Swiper
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        modules={[EffectCards]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
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
      </Swiper> */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 160,
          depth: 575,
          modifier: 1,
          slideShadows: true,
          scale: 1.25,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
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
