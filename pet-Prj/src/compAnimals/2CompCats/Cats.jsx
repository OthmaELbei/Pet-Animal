import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

// style componenet Cats
import "./cat.css";

// stiyle CSS swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const JsonCats = [
  {
    id: uuidv4(),
    person: "Taha Randi",
    Age: "9 month",
    telle: "+3456734567889",
    six: "CHina",
    img: "/public/cat-3.jpg",
  },
  {
    id: uuidv4(),
    person: "Moussa Haytm",
    Age: "2 month",
    telle: "+3456734567889",
    six: "Ruse",
    img: "/public/cat-4.jpg",
  },

  {
    id: uuidv4(),
    person: "Hasn ken",
    Age: "7 month",
    telle: "+3456734567889",
    six: "UK",
    img: "/public/cat-5.jpg",
  },

  {
    id: uuidv4(),
    person: "Idress Ara",
    Age: " 6 month",
    telle: "+3456734567889",
    six: "Egypt",
    img: "/public/cat-6.jpg",
  },

  {
    id: uuidv4(),
    person: "Jamal Ali",
    Age: " 4 month",
    telle: "+3456734567889",
    six: "Roussi",
    img: "/public/cat-7.jpg",
  },

  {
    id: uuidv4(),
    person: "Moussa Mahmod",
    Age: " 8 month",
    telle: "+3456734567889",
    six: "Kory",
    img: "/public/cat-8.jpg",
  },
];

export default function Cats() {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemClick = (id) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="Parent-Cats position-relative">
        <div className="back-content w-100 h-100 position-absolute  top-0 start-0" />
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
          {JsonCats.map((cat) => (
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
