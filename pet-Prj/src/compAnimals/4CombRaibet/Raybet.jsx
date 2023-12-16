import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";

// import for Css
import "./raibet.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const formilCanare = [
  {
    id: uuidv4(),
    backgroundimage: "/public/Raibet-10.jpg",
    AllName: "ahmed taha",
    Namber: "+3234567890",
    Tayp: "CANR",
    jender: "MALE",
    prex: "22£",
    City: "CASA",
  },
  {
    id: uuidv4(),
    backgroundimage: "/public/Raibet-9.jpg",
    AllName: "ahmed taha",
    Namber: "+3234567890",
    Tayp: "CANR",
    jender: "MALE",
    prex: "22£",
    City: "CASA",
  },
  {
    id: uuidv4(),
    backgroundimage: "/public/Raibet-8.jpg",
    AllName: "ahmed taha",
    Namber: "+3234567890",
    Tayp: "CANR",
    jender: "MALE",
    prex: "22£",
    City: "CASA",
  },
  {
    id: uuidv4(),
    backgroundimage: "/public/Raibet-7.jpg",
    AllName: "ahmed taha",
    Namber: "+3234567890",
    Tayp: "CANR",
    jender: "MALE",
    prex: "22£",
    City: "CASA",
  },
  {
    id: uuidv4(),
    backgroundimage: "/public/Raibet-6.jpg",
    AllName: "ahmed taha",
    Namber: "+3234567890",
    Tayp: "CANR",
    jender: "MALE",
    prex: "22£",
    City: "CASA",
  },
  {
    id: uuidv4(),
    backgroundimage: "/public/Raibit-5.jpg",
    AllName: "ahmed taha",
    Namber: "+3234567890",
    Tayp: "CANR",
    jender: "MALE",
    prex: "22£",
    City: "CASA",
  },
  {
    id: uuidv4(),

    backgroundimage: "/public/rabit-6.jpg",
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

    backgroundimage: "/public/rabit-7.jpg",
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

    backgroundimage: "/public/rabit-8.jpg",
    backgroundsize: "cover ",
    AllName: "",
    Namber: "",
    Tayp: "",
    jender: "",
    prex: "",
    City: "",
  },
];

export default function Raybet() {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemClick = (id) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="Parent-Raibet">
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
          {formilCanare.map((item) => (
            <SwiperSlide key={item.id}>
              <div id={item.id} className={`child-Raybit-Div `}>
                <div
                  onClick={() => handleItemClick(item.id)}
                  className={`imag-raibit ${
                    activeItemId === item.id ? "activ" : ""
                  }`}
                >
                  <img src={item.backgroundimage} alt="" />

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
