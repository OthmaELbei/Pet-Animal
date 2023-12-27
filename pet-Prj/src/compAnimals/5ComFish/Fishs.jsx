import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";

// import for css

import "./fishs.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import TitleAnimals from "../TitleAnimals";
import AddForFish from "./AddForFish";

const formilFishs = [];

export default function Fishs() {
  const [activeItemId, setActiveItemId] = useState(null);
  const [todoFish, setTodofish] = useState(formilFishs);

  const handleDelete = (id) => {
    const shouldDelete = window.confirm("Are you Whant dulet this");

    if (shouldDelete) {
      const updatedDogs = todoFish.filter((dog) => dog.id !== id);
      setTodofish(updatedDogs);
      localStorage.setItem("todoFish", JSON.stringify(updatedDogs));
    }
  };

  const handleItemClick = (id) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="Par-fish" id="scrollspyHeading5">
        <TitleAnimals title={"Fishs"} />
        <AddForFish todoFish={todoFish} setTodofish={setTodofish} />
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
          className="mySwiper position-absolute top-0 start-0 w-100 h-100 p-5 "
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
          {todoFish.map((fish) => (
            <SwiperSlide key={fish.id}>
              <div id={fish.id} className={`child-Fish-Div `}>
                <div
                  onClick={() => handleItemClick(fish.id)}
                  className={`imag-fish ${
                    activeItemId === fish.id ? "activ" : ""
                  }`}
                >
                  <img src={fish.img} alt="" />

                  <div className="box-fish">
                    <div
                      className="icon-close1"
                      onClick={() => handleDelete(fish.id)}
                    ></div>
                    <ul>
                      <li>Name :{fish.person}</li>
                      <li>Namber :{fish.telle}</li>
                      <li>Type : {fish.type}</li>
                      <li>Age : {fish.Age}</li>
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
