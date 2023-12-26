// import { Swiper, SwiperSlide } from "swiper/react";

// import { useState } from "react";
// // import { Todlistcontexdogs } from "./contxdogs/ContexDogs";

// // style componenet Cats
// import "./dogs.css";

// // stiyle CSS swiper
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

// // import required modules
// import { FreeMode, Pagination } from "swiper/modules";
// import TitleAnimals from "../TitleAnimals";

// import AddOpjDogs from "./AddOpjDogs";

// const JsonDogs = [];
// export default function Dogs() {
//   const [activeItemId, setActiveItemId] = useState(null);
//   const [tododogs, setTododogs] = useState(JsonDogs);
//   const [noremov, setNoremov] = useState("none");

//   function Notdillte() {
//     if (noremov == "none") {
//       setNoremov("blocK");
//     } else {
//       setNoremov("none");
//     }
//   }

//   const ForDleteTo = () => {
//     alert("hjk");
//     const aldogs = tododogs.filter((t, a) => {
//       console.log(t.id);
//       console.log(a.id);
//       // if (t.id == .id) {
//       //   console.log(tododogs[0].id);
//       // }
//     });
//     console.log(aldogs);
//   };

//   const handleItemClick = (id) => {
//     setActiveItemId((prevId) => (prevId === id ? null : id));
//   };
//   return (
//     <>
//       {/* <Todlistcontexdogs.Provider value={ForDleteTo}> */}
//       <div className="parent-Dogs" id="scrollspyHeading3">
//         <TitleAnimals title={"Dogs"} />
//         <AddOpjDogs setTododogs={setTododogs} tododogs={tododogs} />
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={30}
//           freeMode={true}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[FreeMode, Pagination]}
//           className="mySwiper Pr-cats"
//           breakpoints={{
//             306: {
//               slidesPerView: 1,
//             },

//             768: {
//               slidesPerView: 2,
//             },
//             992: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           <div style={{ display: `${noremov}` }} className="rimovs">
//             <h2>are you want remove</h2>

//             <button onClick={ForDleteTo}>yes</button>
//             <button onClick={Notdillte}>No</button>
//           </div>
//           {tododogs.map((dog) => (
//             <SwiperSlide
//               onClick={() => handleItemClick(dog.id)}
//               key={dog.id}
//               className={` box d-flex align-items-end justify-content-start position-relative ${
//                 activeItemId === dog.id ? "activ" : ""
//               }`}
//             >
//               <div className="box-dog">
//                 <div id={dog.id} className="box-imag">
//                   <img
//                     className={`${activeItemId === dog.id ? "activ" : ""}`}
//                     src={dog.img}
//                     alt=""
//                   />
//                   <div
//                     onClick={() => {
//                       setNoremov("block");
//                     }}
//                     className="icon-close1"
//                   ></div>
//                   <dir className=" m-4 justify-content-center align-items-center">
//                     <h4>{dog.person}</h4>
//                     <ul>
//                       <li>Namber :{dog.telle}</li>
//                       <li>Age :{dog.Age}</li>
//                       <li>Tayp :{dog.six}</li>
//                     </ul>
//                   </dir>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       {/* </Todlistcontexdogs.Provider> */}
//     </>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import TitleAnimals from "../TitleAnimals";
import AddOpjDogs from "./AddOpjDogs";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import "./dogs.css";

const JsonDogs = [];

export default function Dogs() {
  const [activeItemId, setActiveItemId] = useState(null);
  const [tododogs, setTododogs] = useState(JsonDogs);

  const handleDelete = (id) => {
    const shouldDelete = window.confirm("Are you Whant dulet this");

    if (shouldDelete) {
      const updatedDogs = tododogs.filter((dog) => dog.id !== id);
      setTododogs(updatedDogs);
      localStorage.setItem("todoDogs", JSON.stringify(updatedDogs));
    }
  };

  const handleItemClick = (id) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="parent-Dogs" id="scrollspyHeading3">
        <TitleAnimals title={"Dogs"} />
        <AddOpjDogs setTododogs={setTododogs} tododogs={tododogs} />
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
          {tododogs.map((dog) => (
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

                  <div className="m-4 justify-content-center align-items-center">
                    <h4>{dog.person}</h4>
                    <ul>
                      <li>title : {dog.telle}</li>
                      <li>age: {dog.Age}</li>
                      <li>type: {dog.type}</li>
                    </ul>
                  </div>
                  <div
                    className="icon-close1"
                    onClick={() => handleDelete(dog.id)}
                  ></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
