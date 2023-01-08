import "./styles/App.css";
import MyButton from "./components/UI/button/MyButton";

import TodoList from "./components/TodoList/TodoList";
import { useState, React } from "react";
import MyModal from "./components/UI/MyModal/MyModal";
import TodoForm from "./components/TodoForm/TodoForm";
import { useEffect } from "react";
function App() {
  const [todoArray, setTodoArray] = useState(
    localStorage.getItem("todoArray") !== null
      ? JSON.parse(localStorage.getItem("todoArray"))
      : []
  );
  const [modal, setModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }, [todoArray]);

  const createTodo = (newTodo) => {
    setTodoArray([...todoArray, newTodo]);
    setModal(false);
  };

  const removeTodo = (todo) => {
    setTodoArray(todoArray.filter((p) => p.id !== todo.id));
  };
  const setUpdateTodo = () => {
    setTodoArray([...todoArray]);
  };
  const changeTodo = (newTodo, setEdit) => {
    setTodoArray(
      [...todoArray].map((p) => {
        if (p.id == newTodo.id) {
          p.title = newTodo.title;
          p.body = newTodo.body;
        }
        return p;
      })
    );
    setEdit(false);
  };

  return (
    <div className="App">
      <MyModal visible={modal} setVisible={setModal}>
        <TodoForm mode={createTodo}></TodoForm>
      </MyModal>
      <TodoList
        remove={removeTodo}
        todoArray={todoArray}
        change={changeTodo}
        setUpdate={setUpdateTodo}
      ></TodoList>
      <MyButton onClick={() => setModal(true)}>
        <img src="/images/add-box.svg" alt="add" />
      </MyButton>
    </div>
  );
}

export default App;
