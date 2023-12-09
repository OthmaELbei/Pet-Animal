import Femail from "./Femail";

export default function FormlaerEmail() {
  return (
    <>
      <div className=" main-email col-sm-6 W-50 rounded d-flex  flex-column p-1 ">
        <Femail prName={"Name"} name={"Name:"} />
        <Femail prName={"LastName"} name={"LastName:"} />
        <Femail prName={"Email"} name={"Email:"} />
        <Femail prName={"Numbe"} name={"Number:"} />
      </div>
    </>
  );
}
