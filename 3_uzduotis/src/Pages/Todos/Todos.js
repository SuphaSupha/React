import { useState, useEffect } from "react";
import CustomButton from "../../Components/CustomButton/CustomButton";
import "./Todos.css";
import Navbar from "../../Components/Navbar/Navbar";

const Todos = () => {
  const [todoText, SetTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  //   const [text, setText] = useState("todos");

  //   const transformheding = () => {
  //     if (todos.lenght < 1) {
  //       setText("todo");
  //     } else {
  //       setText("todo");
  //     }
  //   };

  //   useEffect(() => {
  //     const localTodos = JSON.parse(localStorage.getItem("Todos"));
  //     if (localTodos) {
  //       setTodos(localTodos);
  //     }
  //   }, []);

  const hendleAddTodo = (e) => {
    e.preventDefault();

    //[...todos]
    if (todoText.length >= 1) {
      setTodos((prevTodos) => [...prevTodos, todoText]); //prideda
      SetTodoText("");
      localStorage.setItem("Todos", JSON.stringify(...todoText, todos));
    }
    console.log(todoText);
  };

  const handleDeleteTodos = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo !== todo));
  };

  return (
    <div>
      <Navbar />
      <div className="body">
        <form className="todo-list" onSubmit={hendleAddTodo}>
          <h2>You have {todos.length}</h2>
          {todos.map((todo, index) => (
            <h3 className="todos" key={index}>
              {todo}
              <span className="delete" onClick={() => handleDeleteTodos(todo)}>
                X
              </span>
            </h3>
          ))}
          <input
            type="text"
            className="todo-input"
            value={todoText}
            placeholder="Enter item"
            onChange={(e) => SetTodoText(e.target.value)}
          ></input>
          <CustomButton variant="contained" type="submit">
            Submit
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default Todos;
