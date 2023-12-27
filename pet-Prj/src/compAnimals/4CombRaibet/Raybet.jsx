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

  const handleDelete = (id) => {
    const shouldDelete = window.confirm("Are you Whant dulet this");

    if (shouldDelete) {
      const updatedDogs = todoRib.filter((dog) => dog.id !== id);
      setTodoRib(updatedDogs);
      localStorage.setItem("todoRaibit", JSON.stringify(updatedDogs));
    }
  };

  const handleItemClick = (id) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="Parent-Raibet" id="scrollspyHeading4">
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
              <div id={item.id} className="child-Raybit-Div">
                <div
                  onClick={() => handleItemClick(item.id)}
                  className={`imag-raibit ${
                    activeItemId === item.id ? "activ" : ""
                  }`}
                >
                  <img src={item.img} alt="" />

                  <div className="box-rabit">
                    <ul>
                      <li>Name :{item.person}</li>
                      <li>Namber :{item.telle}</li>
                      <li> type : {item.type}</li>
                      <li> Age : {item.Age}</li>
                    </ul>
                    <div
                      className="icon-close1"
                      onClick={() => handleDelete(item.id)}
                    ></div>
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
