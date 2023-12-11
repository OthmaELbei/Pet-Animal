import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";

const formilCanare = [
  { id: uuidv4(), transform: "" },
  { id: uuidv4(), transform: "" },
  { id: uuidv4(), transform: "" },
  { id: uuidv4(), transform: "" },
  { id: uuidv4(), transform1: "" },
  { id: uuidv4(), transform1: "" },
  { id: uuidv4(), transform1: "" },
  { id: uuidv4(), transform1: "" },
  { id: uuidv4(), transform1: "" },
];

export default function BirdCanary() {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemClick = (id) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div>
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper Canare"
        >
          {formilCanare.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                id={item.id}
                className={`child-canar-Div ${
                  activeItemId === item.id ? "activ" : ""
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                <button className="ones"></button>
                Slide 9
                <div className="other-face">
                  <button className="ons"></button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
