import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";
import FormilCanry from "./FormilCanry";
import ButUpDawon from "./ButUpDawon";

const formilCanare = [
  {
    id: uuidv4(),
    transform: "",
    backgroundimage: "url('../../../public/canr-1.jpg')",
    backgroundsize: "cover ",
    AllName: "ahmed Arar",
    Namber: "+273678890",
    Tayp: "CANR",
    jender: "MALE",
    prex: "22£",
    City: "CASA",
  },
  {
    id: uuidv4(),
    transform: "",
    backgroundimage: "url('../../../public/canr-2.jpg')",
    backgroundsize: "cover ",
    AllName: "ahmed taha",
    Namber: "+45678900",
    Tayp: "CANYR",
    jender: "MAHLE",
    prex: "222£",
    City: "Raba",
  },
  {
    id: uuidv4(),
    transform: "",
    backgroundimage: "url('../../../public/canr-3.jpg')",
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
    transform: "",
    backgroundimage: "url('../../../public/canr-4.jpg')",
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
    transform1: "",
    backgroundimage: "url('../../../public/canr-5.jpg')",
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
    transform1: "",
    backgroundimage: "url('../../../public/canr-6.jpg')",
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
    transform1: "",
    backgroundimage: "url('../../../public/canr-7.jpg')",
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
    transform1: "",
    backgroundimage: "url('../../../public/canr-8.jpg')",
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
    transform1: "",
    backgroundimage: "url('../../../public/canr-9.jpg')",
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
    transform1: "",
    backgroundimage: "url('../../../public/canr-10.jpg')",
    backgroundsize: "cover ",
    AllName: "",
    Namber: "",
    Tayp: "",
    jender: "",
    prex: "",
    City: "",
  },
  {
    id: uuidv4(),
    transform1: "",
    backgroundimage: "url('../../../public/canr-11.jpg')",
    backgroundsize: "cover ",
    AllName: "",
    Namber: "",
    Tayp: "",
    jender: "",
    prex: "",
    City: "",
  },
];

export default function BirdCanary() {
  const [activeItemId, setActiveItemId] = useState(null);
  const [topformil, setTopformil] = useState("");

  function clickUPformilCanary() {
    if (topformil == "actv") {
      setTopformil("");
    } else {
      setTopformil("actv");
    }
  }

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
          <div className={`bak-formila-canare  ${topformil}`}>
            <ButUpDawon
              onClick={clickUPformilCanary}
              text=" ridin about canarey"
            />
            <FormilCanry />
          </div>

          <ButUpDawon onClick={clickUPformilCanary} />

          {formilCanare.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                style={{
                  backgroundImage: item.backgroundimage,
                  backgroundSize: item.backgroundsize,
                }}
                id={item.id}
                className={`child-canar-Div ${
                  activeItemId === item.id ? "activ" : ""
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                <div className="icon-loop" />

                <div className="other-face">
                  <h6>{item.AllName}</h6>
                  <h6>{item.Namber}</h6>
                  <ul>
                    <li>Teyp: {item.Tayp}</li>
                    <li>Jander: {item.jender} </li>
                    <li>Prex: {item.prex}</li>
                    <li>City: {item.City}</li>
                  </ul>

                  <div className="icon-loop" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
