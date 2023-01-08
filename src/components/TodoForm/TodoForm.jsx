import React from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { useState } from "react";
import Palette from "../UI/Palette/Palette";
import cs from "./TodoForm.module.css";

const TodoForm = ({
  mode,
  todoOld = {
    body: "",
    id: Date.now(),
    check: false,
    color: "peach",
  },
  setEdit,
}) => {
  const [todo, setTodo] = useState({
    body: todoOld.body,
    check: todoOld.check,
  });
  const colors = ["peach", "sky", "pink"];

  const keyTodo = (e) => {
    if (e.which === 13) {
      addNewTodo();
    }
  };

  const addNewTodo = (e) => {
    if (todo.body) {
      e.preventDefault();
      const newTodo = {
        ...todo,
        color: todoOld.color,
        id: todoOld.id,
      };
      mode(newTodo, setEdit);
      if (!setEdit) setTodo({ body: "" });
    }
  };

  return (
    <form onSubmit={addNewTodo}>
      <MyInput
        value={todo.body}
        onChange={(e) => setTodo({ ...todo, body: e.target.value })}
        type="text"
        placeholder="Задача"
      />
      <div className={cs.button}>
        <div className={cs.palette}>
          {colors.map((c) => {
            return <Palette key={c} color={c} todo={todoOld} />;
          })}
        </div>

        <MyButton onClick={addNewTodo}>
          <img src="/images/check.svg" alt="a" />
        </MyButton>
      </div>
    </form>
  );
};

export default TodoForm;
