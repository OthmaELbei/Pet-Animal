import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function FormlaerEmail({ setAl, setAll }) {
  const [name, setName] = useState("");
  const [emale, setEmale] = useState("");
  function aa() {
    setName(name);
    setEmale(emale);
    const updateTodo = name;
    const updateTodoemale = emale;
    setAll(updateTodo);
    localStorage.setItem("todoCt", JSON.stringify(updateTodo));
    localStorage.setItem("todCt", JSON.stringify(updateTodoemale));

    setAl(updateTodoemale);
  }

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todoCt")) ?? [];
    setAll(storageTodos);
    const storageTods = JSON.parse(localStorage.getItem("todCt")) ?? [];
    setAl(storageTods);
  }, []);

  return (
    <>
      <div className=" main-email col-sm-6 W-50 rounded d-flex  flex-column p-1 ">
        <input
          placeholder="name"
          className=" px-2  w-75  mt-4 mb-4  mx-auto py-2  rounded  "
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
        <input
          placeholder="Email"
          className=" px-2  w-75  mt-4 mb-4  mx-auto py-2  rounded  "
          value={emale}
          onChange={(e) => {
            setEmale(e.target.value);
          }}
          type="email"
        />
        <input className="sappmit" onClick={aa} type="submit" />
      </div>
    </>
  );
}
