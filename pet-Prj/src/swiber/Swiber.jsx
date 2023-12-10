// import for swiper

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// import for CSS

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../swiber/swiberImage.css";

export default function Swiber() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper swippr "
      >
        <SwiperSlide className="swip-Img">
          <img src="../../public/back-birds.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swip-Img">
          <img src="../../public/back-dog2.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swip-Img">
          <img src="../../public/back-cat.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swip-Img">
          <img src="../../public/back-raibet.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swip-Img">
          <img src="../../public/back-snack.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swip-Img">
          <img src="../../public/ima-fish1.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
