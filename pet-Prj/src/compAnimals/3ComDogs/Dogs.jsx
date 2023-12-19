import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

// style componenet Cats
import "./dogs.css";

// stiyle CSS swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import TitleAnimals from "../TitleAnimals";

const JsonDogs = [
  {
    id: uuidv4(),
    person: "Taha Randi",
    Age: "9 month",
    telle: "+3456734567889",
    six: "CHina",
    img: "/public/dog-1.jpg",
  },
  {
    id: uuidv4(),
    person: "Moussa Haytm",
    Age: "2 month",
    telle: "+3456734567889",
    six: "Ruse",
    img: "/public/dog-2.jpg",
  },

  {
    id: uuidv4(),
    person: "Hasn ken",
    Age: "7 month",
    telle: "+3456734567889",
    six: "UK",
    img: "/public/dog-3.jpg",
  },

  {
    id: uuidv4(),
    person: "Idress Ara",
    Age: " 6 month",
    telle: "+3456734567889",
    six: "Egypt",
    img: "/public/dog-4.jpg",
  },

  {
    id: uuidv4(),
    person: "Jamal Ali",
    Age: " 4 month",
    telle: "+3456734567889",
    six: "Roussi",
    img: "/public/dog-5.jpg",
  },

  {
    id: uuidv4(),
    person: "Moussa Mahmod",
    Age: " 8 month",
    telle: "+3456734567889",
    six: "Kory",
    img: "/public/dog-6.jpg",
  },
];
export default function Dogs() {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemClick = (id) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
      <div className="parent-Dogs">
        <TitleAnimals title={"Dogs"} />
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
          {JsonDogs.map((dog) => (
            <SwiperSlide
              onClick={() => handleItemClick(dog.id)}
              key={dog.id}
              className={` box d-flex align-items-end justify-content-start position-relative ${
                activeItemId === dog.id ? "activ" : ""
              }`}
            >
              <div className="box-dog">
                <div id={dog.id} className="box-imag">
                  <img
                    className={`${activeItemId === dog.id ? "activ" : ""}`}
                    src={dog.img}
                    alt=""
                  />

                  <dir className=" m-4 justify-content-center align-items-center">
                    <h4>{dog.person}</h4>
                    <ul>
                      <li>Namber :{dog.telle}</li>
                      <li>Age :{dog.Age}</li>
                      <li>Tayp :{dog.six}</li>
                    </ul>
                  </dir>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
