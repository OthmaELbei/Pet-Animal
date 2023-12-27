import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import ButUpDawon from "../ButUpDawon";
import FormilaLisansbrabil from "./FormilaLisansbrabil";
import Addopjlsansibrabil from "./Addopjlsansibrabil";

// add for css
import "./lisanss.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// for formilar
const formillisansBrbil = [];

export default function BirdLisanasBarble() {
  const [activeItemId, setActiveItemId] = useState(null);
  const [topformil, setTopformil] = useState("");
  const [addLsans, setAddLsans] = useState(formillisansBrbil);

  function clickUPformilCanary() {
    if (topformil == "actv") {
      setTopformil("");
    } else {
      setTopformil("actv");
    }
  }

  const handleDelete = (id) => {
    const shouldDelete = window.confirm("Are you Whant dulet this");

    if (shouldDelete) {
      const updatedDogs = addLsans.filter((dog) => dog.id !== id);
      setAddLsans(updatedDogs);
      localStorage.setItem("todoLsansbrabil", JSON.stringify(updatedDogs));
    }
  };

  const handleItemClick = (id) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="paront-lsans">
        <Addopjlsansibrabil setAddLsans={setAddLsans} addLsans={addLsans} />
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
              text=" ridin about Lisansibrabil"
            />
            <FormilaLisansbrabil />
          </div>

          <ButUpDawon onClick={clickUPformilCanary} />

          {addLsans.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
                id={item.id}
                className={`child-canar-Div ${
                  activeItemId === item.id ? "activ" : ""
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                <div className="icon-loop" />

                <div className="other-face">
                  <div
                    className="icon-close1"
                    onClick={() => handleDelete(item.id)}
                  ></div>

                  <ul>
                    <li>All Name: {item.person} </li>
                    <li>Tile: {item.telle} </li>
                    <li>Teyp: {item.type}</li>
                    <li>Age: {item.Age} </li>
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
