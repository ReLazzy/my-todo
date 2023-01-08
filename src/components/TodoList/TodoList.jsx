import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import cl from "./TodoList.module.css";

const TodoList = ({ todoArray, remove, change, setUpdate }) => {
  if (!todoArray.length) {
    return <div className={cl.todo_empty_title}>Придумайте себе задачу</div>;
  }

  return (
    <div className={cl.todo_list}>
      {todoArray.map((todo) => (
        <TodoItem
          todo={todo}
          remove={remove}
          key={todo.id}
          change={change}
          setUpdate={setUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
