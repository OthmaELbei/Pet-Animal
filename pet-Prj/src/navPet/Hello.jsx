import Header from "../header/Header";
import LinkesNave from "./LinkesNave";
import "./nav.css";
import TitelEmail from "./TitelEmail";
import MainEmailNav from "./MainEmailNav";
import FormlaerEmail from "./FormlaerEmail";
import Swiber from "../swiber/Swiber";
import RuglarAll from "../RuglarAll";

import { Todlistcontex } from "../Contex/creatContex";
import { useState } from "react";
// const app = ;
export default function Hello() {
  const [alls, setAlls] = useState("");
  const [al, setAl] = useState("");
  return (
    <>
      <Todlistcontex.Provider value={{ alls, al }}>
        <Header />

        <div className="halle-nav">
          <LinkesNave />
          <div className="title-Nav my-1  ">
            <TitelEmail />
            <hr className="border-titel"></hr>
          </div>
          <div className=" mein-nav-mediSm flex-lg-row flex-sm-column flex-md-column d-flex conteiner p-4 mt-5 d-flex  ">
            <MainEmailNav />
            <FormlaerEmail setAll={setAlls} setAl={setAl} />
          </div>
        </div>

        <Swiber />
        <RuglarAll />
      </Todlistcontex.Provider>
    </>
  );
}
