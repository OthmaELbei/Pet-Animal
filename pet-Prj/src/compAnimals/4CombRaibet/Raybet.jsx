import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";

// import for Css
import "./raibet.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import TitleAnimals from "../TitleAnimals";
import AddForRabbit from "./AddForRabbit";

const formilRaibit = [];

export default function Raybet() {
  const [activeItemId, setActiveItemId] = useState(null);
  const [todoRib, setTodoRib] = useState(formilRaibit);

  const handleItemClick = (id) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="Parent-Raibet">
        <TitleAnimals title={"Rabbits"} />
        <AddForRabbit todoRib={todoRib} setTodoRib={setTodoRib} />
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
          className="mySwiper position-absolute top-0 start-0 w-100 h-100 p-5 Raypit"
          breakpoints={{
            306: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {todoRib.map((item) => (
            <SwiperSlide key={item.id}>
              <div id={item.id} className={`child-Raybit-Div `}>
                <div
                  onClick={() => handleItemClick(item.id)}
                  className={`imag-raibit ${
                    activeItemId === item.id ? "activ" : ""
                  }`}
                >
                  <img src={item.img} alt="" />

                  <div>
                    <ul>
                      <li>Name :{item.AllName}</li>
                      <li>Namber :{item.Namber}</li>
                      <li>AGe : {item.Tayp}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
