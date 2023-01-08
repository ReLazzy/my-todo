import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import TodoForm from "../TodoForm/TodoForm";
import MyModal from "../UI/MyModal/MyModal";
import cs from "./TodoItem.module.css";
import { useEffect } from "react";

const TodoItem = (props) => {
  const [check, setCheck] = useState(props.todo.check);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    props.todo.check = check;
    props.setUpdate();
  }, [check]);

  const array = check
    ? [cs.todo__item, cs[props.todo.color], cs.completed]
    : [cs.todo__item, cs[props.todo.color]];

  return (
    <div>
      <div className={array.join(" ")}>
        <div className={cs.info}>{props.todo.body}</div>
        {check ? (
          <MyButton
            onClick={() => {
              setCheck(!check);
            }}
          >
            <img src="/images/close.svg" alt="a" />
          </MyButton>
        ) : (
          <div className={cs.button}>
            <MyButton
              onClick={() => {
                setCheck(!check);
              }}
            >
              <img src="/images/check.svg" alt="a" />
            </MyButton>
            <MyButton
              onClick={() => {
                props.remove(props.todo);
              }}
            >
              <img src="/images/close.svg" alt="a" />
            </MyButton>
            <MyButton
              onClick={() => {
                setEdit(true);
              }}
            >
              <img src="/images/edit.svg" alt="a" />
            </MyButton>
          </div>
        )}
        <MyModal visible={edit} setVisible={setEdit}>
          <TodoForm
            mode={props.change}
            todoOld={props.todo}
            setEdit={setEdit}
          ></TodoForm>
        </MyModal>
      </div>
    </div>
  );
};

export default TodoItem;
