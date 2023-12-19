// import { UpdateDisabled } from "@mui/icons-material";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
// eslint-disable-next-line react/prop-types, no-unused-vars
export default function AddOpject({ setTodo, todo }) {
  const [person, setPerson] = useState("");
  const [age, setAge] = useState("");
  const [title, setTille] = useState("");
  const [six, setSix] = useState("");
  const [image, setImage] = useState(""); // تحديث اسم الحالة لتكون 'image'
  const inputRef = useRef(null);

  const [addActv, setAddActv] = useState("");

  console.log(todo);
  function addActiv() {
    if (addActv === "") {
      // استخدم === بدلاً من ==
      setAddActv("activ");
    } else {
      setAddActv("");
    }
  }

  function addTodo() {
    const newTodos = {
      id: uuidv4(),
      person: person,
      Age: age,
      telle: title,
      six: six,

      img: URL.createObjectURL(image), // تحديث اسم الخاصية لتكون 'image'
    };
    console.log(newTodos.img.name);

    const updateTodos = [...todo, newTodos];
    setTodo(updateTodos);
  }
  // eslint-disable-next-line no-undef

  return (
    <>
      <div onClick={addActiv} className="icon-add_circle_outline" />
      <div className={`formilar-addinCats ${addActv} `}>
        <div className="formilers d-flex w-50 align-items-center justify-content-center">
          <div onClick={addActiv} className="icon-add_circle_outline" />
          <div>
            <label htmlFor="">All Name:</label>
            <input
              value={person}
              onChange={(e) => {
                setPerson(e.target.value);
              }}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Age Cat:</label>
            <input
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Number:</label>
            <input
              value={title}
              onChange={(e) => {
                setTille(e.target.value);
              }}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Sex:</label>
            <input
              value={six}
              onChange={(e) => {
                setSix(e.target.value);
              }}
              type="text"
            />
            <label htmlFor="">Image</label>
            <input
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              type="file"
              ref={inputRef}
            />
          </div>
          <button onClick={addTodo}>Add</button>
        </div>
      </div>
    </>
  );
}
