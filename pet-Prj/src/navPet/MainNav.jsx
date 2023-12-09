import NavImg from "./NavImg";
import RouterNav from "./RouterNav";

export default function MainNav() {
  return (
    <>
      <div className="conteiner  align-items-lg-stretch d-lg-flex row d-md-flex align-items-sm-center">
        <RouterNav />
        <NavImg />
      </div>
    </>
  );
}
