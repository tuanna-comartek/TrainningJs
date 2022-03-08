import React, { useState, useRef, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineUpdate } from "react-icons/md";
import { ITask } from "./TodoList";

function TodoForm(props: any) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [filterTodo, setFilterTodo] = useState<ITask[]>([]);
  const [itemSelect, setItemSelect] = useState("all");

  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  useEffect(() => {
    handleFilter();
  }, []);
  const handleFilter = () => {
    console.log("sagdjagsdj");
    switch (itemSelect) {
      case "completed":
        setFilterTodo(filterTodo.filter((td: ITask) => td.status));
        console.log(filterTodo);
        break;
      case "notCompleted":
        setFilterTodo(filterTodo.filter((td: ITask) => !td.status));
        console.log(filterTodo);
        break;
      default:
        setFilterTodo(filterTodo);
        console.log(filterTodo);
        break;
    }
  };

  const onChangeSelect = (e: any) => {
    setItemSelect(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="todo-form"
      style={{ paddingBottom: "20px" }}
    >
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
            style={{ width: 500, height: 34 }}
          />
          <div
            className="todo-button"
            onClick={handleSubmit}
            style={{ backgroundColor: "#fa8231" }}
          >
            <MdOutlineUpdate className="icon" style={{ color: "#fff" }} />
          </div>
        </>
      ) : (
        <>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", paddingRight: 30 }}
          >
            <input
              placeholder="Add a todo"
              value={input}
              onChange={handleChange}
              name="text"
              className="todo-input"
              ref={inputRef}
              style={{ height: 35 }}
            />
            <div
              className="todo-button"
              onClick={handleSubmit}
              style={{ backgroundColor: "#fa8231" }}
            >
              <AiOutlinePlus className="icon" />
            </div>
          </form>
          <div style={{ height: 35 }}>
            <select
              value={itemSelect}
              style={{ height: "100%" }}
              onChange={onChangeSelect}
            >
              <option
                value={itemSelect}
                onClick={() => console.log(itemSelect)}
              >
                All
              </option>
              <option value="completed" onClick={() => console.log(itemSelect)}>
                Completed
              </option>
              <option value="notCompleted">Not Completed</option>
            </select>
          </div>
        </>
      )}
    </form>
  );
}

export default TodoForm;
