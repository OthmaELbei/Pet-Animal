import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../.././compAnimals/1Cbirds/birds.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import BirdCanry from "./BirdCanry";
import BirdKalobsat from "./kalobsat/BirdKalobsat";
import BirdMondran from "./Mondran/BirdMondran";
import BirdLisanasBarble from "./LesansBarable/BirdLisanasBarble";

export default function Birds() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper Swiper-birds"
      >
        <SwiperSlide>
          <BirdCanry />
        </SwiperSlide>
        <SwiperSlide>
          <BirdKalobsat />
        </SwiperSlide>
        <SwiperSlide>
          <BirdMondran />
        </SwiperSlide>
        <SwiperSlide>
          <BirdLisanasBarble />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
