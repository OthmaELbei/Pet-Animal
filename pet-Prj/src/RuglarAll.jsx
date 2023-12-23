import { useState } from "react";
import { useContext } from "react";
import { Todlistcontex } from "./Contex/creatContex";

export default function RuglarAll() {
  const { alls, al } = useContext(Todlistcontex);

  const [setting, setStting] = useState("");
  const seeSetting = () => {
    if (setting == "") {
      setStting("activ");
    } else {
      setStting("");
    }
  };
  return (
    <>
      <div className={`stity  ${setting}`}>
        <div onClick={seeSetting} className="icon ">
          <div className=" icon-settings "></div>
        </div>
        <h6>{alls}</h6>
        <h6> {al}</h6>
      </div>
    </>
  );
}
