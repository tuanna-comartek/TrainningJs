import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export interface ITask {
  id: number;
  text: string;
  status: boolean;
}
function TodoList() {
  const [todos, setTodos] = useState<ITask[]>([]);

  const addTodo = (todo: ITask) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId: number, newValue: ITask) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id: number) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id: number) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="container section-todos">
        <h1 style={{ color: "#fff", paddingBottom: 40, fontSize: "65px" }}>
          To-do List
        </h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </>
  );
}

export default TodoList;
