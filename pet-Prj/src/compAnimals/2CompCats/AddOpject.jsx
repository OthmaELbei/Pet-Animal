// import { UpdateDisabled } from "@mui/icons-material";
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import BottnAdd from "../BottnAdd";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function AddOpject({ setTodo, todo }) {
  const [person, setPerson] = useState("");
  const [age, setAge] = useState("");
  const [title, setTille] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const inputRef = useRef(null);
  const [addActv, setAddActv] = useState("");

  // add for click Botton Actv
  function addActiv() {
    if (addActv === "") {
      // استخدم === بدلاً من ==
      setAddActv("activ");
    } else {
      setAddActv("");
      setPerson("");
      setAge("");
      setTille("");
      setImage("");
      setType("");
    }
  }

  const addImage = () => {
    inputRef.current.click();
  };

  function addTodo() {
    const reader = new FileReader();
    reader.onloadend = () => {
      const newTodos = {
        id: uuidv4(),
        person: person,
        Age: age,
        telle: title,
        type: type,
        img: reader.result,
      };
      const updateTodos = [...todo, newTodos];
      setTodo(updateTodos);
      localStorage.setItem("todoCat", JSON.stringify(updateTodos));
    };

    if (image) {
      reader.readAsDataURL(image);
    }
    setAddActv("");
    setPerson("");
    setAge("");
    setTille("");
    setImage("");
    setType("");
  }
  // for useEffect
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todoCat")) ?? [];
    setTodo(storageTodos);
  }, []);

  return (
    <>
      <div onClick={addActiv} className="icon-add_circle_outline">
        Add sell
      </div>
      <div className={`formilar-addinCats ${addActv} `}>
        <div className="formilers-cats d-flex w-50 align-items-center justify-content-center">
          <div onClick={addActiv} className="icon-remove"></div>

          <input
            placeholder="Add Your Name"
            value={person}
            onChange={(e) => {
              setPerson(e.target.value);
            }}
            type="text"
          />

          <input
            placeholder="Add Age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            type="text"
          />

          <input
            value={title}
            placeholder="Add Namber"
            onChange={(e) => {
              setTille(e.target.value);
            }}
            type="text"
          />

          <input
            placeholder="Add type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
            type="text"
          />

          <BottnAdd
            addImage={addImage}
            setImage={setImage}
            inputRef={inputRef}
            addTodo={addTodo}
          />
        </div>
      </div>
    </>
  );
}
