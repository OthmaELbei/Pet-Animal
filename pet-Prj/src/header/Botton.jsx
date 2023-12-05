// import Matryal Ui icon
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

// import use
import { useState } from "react";

// import child
import UL from "./UL";

export default function Botton() {
  const [none, setNone] = useState("");

  function importFormeil() {
    setNone("block");
  }

  return (
    <>
      <button
        onClick={importFormeil}
        className="bott-Nav navbar-toggler   "
        type="button"
      >
        <DehazeIcon />
      </button>

      <div style={{ display: none }} className="Naveclobs">
        <div className="yi">
          <ul style={{ position: "relative" }} className="links-ul">
            <li className="ll" style={{ margin: "10px" }}>
              <botton
                onClick={() => {
                  setNone("none");
                }}
              >
                <ClearRoundedIcon className=" position-absolute m-1 top-0 end-0" />
              </botton>
            </li>

            <UL className="link-ul" />
          </ul>
        </div>
      </div>
    </>
  );
}
