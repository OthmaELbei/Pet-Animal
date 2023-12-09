import Header from "../header/Header";

import LinkesNave from "./LinkesNave";

import "./nav.css";
import TitelEmail from "./TitelEmail";
import MainEmailNav from "./MainEmailNav";
import FormlaerEmail from "./FormlaerEmail";

export default function Hello() {
  return (
    <>
      <Header />
      <div className="halle-nav">
        <LinkesNave />
        <div className="title-Nav my-1  ">
          <TitelEmail />
          <hr className="border-titel"></hr>
        </div>
        <div className=" mein-nav-mediSm flex-lg-row flex-sm-column flex-md-column d-flex conteiner p-4 mt-5 d-flex  ">
          <MainEmailNav />
          <FormlaerEmail />
        </div>
      </div>
    </>
  );
}
