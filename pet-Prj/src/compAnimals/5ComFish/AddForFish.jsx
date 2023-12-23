import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import BottnAdd from "../BottnAdd";

// eslint-disable-next-line react/prop-types
export default function AddForFish({ todoFish, setTodofish }) {
  const [person, setPerson] = useState("");
  const [age, setAge] = useState("");
  const [title, setTille] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(""); // تحديث اسم الحالة لتكون 'image'
  const inputRef = useRef(null);

  const [addActv, setAddActv] = useState("");

  function addActiv() {
    if (addActv === "") {
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

      const updateTodos = [...todoFish, newTodos];
      setTodofish(updateTodos);
      localStorage.setItem("todoFish", JSON.stringify(updateTodos));
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
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todoFish")) ?? [];
    setTodofish(storageTodos);
  }, []);
  // eslint-disable-next-line no-undef
  return (
    <>
      <div onClick={addActiv} className="icon-add_circle_outline">
        Add sell
      </div>
      <div className={`formilar-addinCats ${addActv} `}>
        <div className="formilers-fish d-flex w-50 align-items-center justify-content-center">
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
