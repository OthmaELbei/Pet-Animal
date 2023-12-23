import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

// style componenet Cats
import "./cat.css";

// stiyle CSS swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import TitleAnimals from "../TitleAnimals";
import AddOpject from "./AddOpject";

const JsonCats = [];

export default function Cats() {
  const [activeItemId, setActiveItemId] = useState(null);
  const [todo, setTodo] = useState(JsonCats);

  const handleItemClick = (id) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="Parent-Cats position-relative">
        <div className="back-content w-100 h-100 position-absolute  top-0 start-0" />
        <TitleAnimals title={"Cats"} />
        <AddOpject setTodo={setTodo} todo={todo} />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper Pr-cats"
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
          {todo.map((cat) => (
            <SwiperSlide
              onClick={() => handleItemClick(cat.id)}
              key={cat.id}
              className={`Box-Cat  d-flex align-items-end justify-content-start position-relative ${
                activeItemId === cat.id ? "activ" : ""
              }`}
            >
              <div id={cat.id} className="Imag-cat">
                <img
                  className={`${activeItemId === cat.id ? "activ" : ""}`}
                  src={cat.img}
                  alt=""
                />
              </div>
              <dir className=" d-flex justify-content-center align-items-center">
                <h4>{cat.person}</h4>
                <ul>
                  <li>Namber :{cat.telle}</li>
                  <li>Age :{cat.Age}</li>
                  <li>Tayp :{cat.six}</li>
                </ul>
              </dir>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
