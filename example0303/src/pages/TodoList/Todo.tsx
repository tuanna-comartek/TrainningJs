import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { IoMdDoneAll } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const Todo = (props: any) => {
  const { todos, completeTodo, removeTodo, updateTodo } = props;
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value: string) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo: any, index: number) => (
    <div className="todo-contents">
      <div
        className={todo.status ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <h5 key={todo.id}>{todo.text}</h5>
        <div className="icons">
          <div
            className="item-icon"
            style={{ backgroundColor: "rgb(153 165 159)" }}
          >
            <IoMdDoneAll
              onClick={() => completeTodo(todo.id)}
              className="icon"
            />
          </div>
          <div
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="item-icon"
            style={{ backgroundColor: "#26de81" }}
          >
            <FaEdit className="icon" />
          </div>
          <div
            onClick={() => removeTodo(todo.id)}
            className="item-icon"
            style={{ backgroundColor: "#fc5c65" }}
          >
            <AiOutlineDelete className="icon" />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Todo;
