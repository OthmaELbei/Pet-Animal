// import React from "react";s

import { Link } from "react-router-dom";
import Links from "./Links";

export default function UL() {
  return (
    <>
      <Links>
        <Link to={"/"}>
          <a href="">all</a>
        </Link>
      </Links>

      <Links>
        <Link to={"/catPaje"}>
          <a href="">cats</a>
        </Link>
      </Links>

      <Links>
        <Link to={"/dogpaje"}>
          <a href="">dogs</a>
        </Link>
      </Links>

      <Links>
        <Link to={"/rabbiytPaj"}>
          <a href="">Rappit</a>
        </Link>
      </Links>

      <Links>
        <Link to={"/fishPaje"}>
          <a href="">Fishs</a>
        </Link>
      </Links>
    </>
  );
}
