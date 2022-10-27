import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState, useEffect } from "react";

const Home = () => {
  const [name, setName] = useState("Rokas");
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState(["ismokti programuoti"]);

  const handleClickReverse = () => {
    setName("Sokor");
  };
  return (
    <div>
      <h1>aslsalas</h1>
      <Link to="/profile/861323">
        <Button>ksakasksa</Button>
      </Link>
      <h2>My name is{name}</h2>
      <Button onClick={handleClickReverse}>revers my name</Button>
      <input value={todoText} onChange={(event) => setTodoText.target.value} />
      <ul>{todos.map((todo,index)=>(
        <li key={}
      ))}</ul>
    </div>
  );
};

export default Home;
