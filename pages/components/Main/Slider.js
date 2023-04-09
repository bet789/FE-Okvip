import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { URL_API } from "@/contants";
const Slider = () => {
  SwiperCore.use([Autoplay]);
  const [slider, setSlider] = useState();
  const getSlider = async () => {
    const response = await fetch(`${URL_API}/api/slide/getAll`);
    const data = await response.json();
    setSlider(data);
  };

  useEffect(() => {
    getSlider();
  }, []);
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide container pt-4"
      data-bs-ride="carousel"
    >
      <div className="col-md-12 col-xs-12">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {slider?.map((item, index) => (
            <>
              <SwiperSlide key={index}>
                <img src={"/" + `${item.link}`} width="100%" />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
