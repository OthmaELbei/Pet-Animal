import "../header/header.css";
import Botton from "./Botton";
import UL from "./UL";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <>
      <nav className=" sticky-top w-100 p-2 d-flex justify-content-between align-items-center py-1 Nav-header mt-0 navbar navbar-expand-lg navbar-light bg-light ">
        <Link
          activeClass="active"
          to="root"
          spy={true}
          smooth={true}
          offset={30}
          duration={300}
        >
          <img style={{ width: "80px" }} src="/public/loge1.png" alt="" />
        </Link>

        <div className=" links mt-2 me-3 ">
          <ul className="links-ul  d-flex justify-content-between align-items-center">
            <UL />
          </ul>
        </div>

        <Botton />
      </nav>
    </>
  );
}
