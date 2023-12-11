import "./App.css";
import Header from "./header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./navPet/nav";
import Swiber from "./swiber/Swiber";
import Birds from "./compAnimals/1Cbirds/Birds";

// for conatext
// import { Todlistcontex } from "./Contex/creatContex";
// import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Swiber />
      <Birds />
    </>
  );
}

export default App;
