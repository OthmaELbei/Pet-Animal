// import React from "react";s

import Links from "./Links";
import { Link } from "react-scroll";

export default function UL() {
  return (
    <>
      <Links>
        <Link
          className="link"
          activeClass="active"
          to="scrollspyHeading1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Birds
        </Link>
      </Links>

      <Links>
        <Link
          className="link"
          activeClass="active"
          to="scrollspyHeading2"
          spy={true}
          smooth={true}
          offset={30}
          duration={300}
        >
          Cats
        </Link>
      </Links>

      <Links>
        <Link
          className="link"
          activeClass="active"
          to="scrollspyHeading3"
          spy={true}
          smooth={true}
          offset={30}
          duration={300}
        >
          Dogs
        </Link>
      </Links>

      <Links>
        <Link
          className="link"
          activeClass="active"
          to="scrollspyHeading4"
          spy={true}
          smooth={true}
          offset={30}
          duration={300}
        >
          Rabbit
        </Link>
      </Links>
      <Links>
        <Link
          className="link"
          activeClass="active"
          to="scrollspyHeading5"
          spy={true}
          smooth={true}
          offset={30}
          duration={300}
        >
          Fish
        </Link>
      </Links>
    </>
  );
}
