import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";

// import for css

import "./fishs.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import TitleAnimals from "../TitleAnimals";

const formilFishs = [
  {
    id: uuidv4(),
    backgroundimage: "/public/fich-5.jpg",
    AllName: "ahmed taha",
    Namber: "+3234567890",
    Tayp: "CANR",
    jender: "MALE",
    prex: "22£",
    City: "CASA",
  },
  {
    id: uuidv4(),
    backgroundimage: "/public/ima-fish1.jpg",
    AllName: "ahmed taha",
    Namber: "+3234567890",
    Tayp: "CANR",
    jender: "MALE",
    prex: "22£",
    City: "CASA",
  },
  {
    id: uuidv4(),
    backgroundimage: "/public/fish-7.jpg",
    AllName: "ahmed taha",
    Namber: "+3234567890",
    Tayp: "CANR",
    jender: "MALE",
    prex: "22£",
    City: "CASA",
  },
  {
    id: uuidv4(),
    backgroundimage: "/public/fich-6.png",
    AllName: "ahmed taha",
    Namber: "+3234567890",
    Tayp: "CANR",
    jender: "MALE",
    prex: "22£",
    City: "CASA",
  },
  {
    id: uuidv4(),
    backgroundimage: "/public/fish-4.jpg",
    AllName: "ahmed taha",
    Namber: "+3234567890",
    Tayp: "CANR",
    jender: "MALE",
    prex: "22£",
    City: "CASA",
  },
  {
    id: uuidv4(),

    backgroundimage: "/public/fish-2.jpg",
    backgroundsize: "cover ",
    AllName: "ahmed taha",
    Namber: "+3234567890",
    Tayp: "CANR",
    jender: "MALE",
    prex: "22£",
    City: "CASA",
  },
  {
    id: uuidv4(),

    backgroundimage: "/public/fich-5.jpg",
    backgroundsize: "cover ",
    AllName: "ahmed taha",
    Namber: "+3234567890",
    Age: "2 month",
    Tayp: "CANR",
    jender: "MALE",
    prex: "22£",
    City: "CASA",
  },
  {
    id: uuidv4(),

    backgroundimage: "/public/fich-3.jpg",
    backgroundsize: "cover ",
    AllName: "",
    Namber: "",
    Tayp: "",
    jender: "",
    prex: "",
    City: "",
  },
];

export default function Fishs() {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemClick = (id) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="Par-fish">
        <TitleAnimals title={"Fishs"} />
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
          {formilFishs.map((fish) => (
            <SwiperSlide key={fish.id}>
              <div id={fish.id} className={`child-Fish-Div `}>
                <div
                  onClick={() => handleItemClick(fish.id)}
                  className={`imag-fish ${
                    activeItemId === fish.id ? "activ" : ""
                  }`}
                >
                  <img src={fish.backgroundimage} alt="" />

                  <div>
                    <ul>
                      <li>Name :{fish.AllName}</li>
                      <li>Namber :{fish.Namber}</li>
                      <li>AGe : {fish.Tayp}</li>
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
