import { Link } from "react-router-dom";

export default function LinkesNave() {
  return (
    <>
      <div className=" d-flex align-items-center justify-content-center col-sm-12 my-4 justify-content-end d-flex ">
        <Link to={"/Hello"}>
          <button type="button" className="mx-2 btn bu-all">
            sind up
          </button>
        </Link>

        <Link to={"/"}>
          <button type="button" className="mx-2 btn bu-all ">
            all
          </button>
        </Link>
      </div>
    </>
  );
}
