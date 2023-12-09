import "./nav.css";
import LinkesNave from "./LinkesNave";
import MainNav from "./MainNav";
import Taitel from "./Taitel";

export default function Nav() {
  return (
    <>
      <LinkesNave />
      <Taitel>
        <p className="  p-av  fs-4  fw-bold d-flex align-items-center justify-content-center my-5 text-capitalize ">
          Welcoom <span className="mx-4">Here</span> Pet
        </p>
      </Taitel>
      <MainNav />
    </>
  );
}
