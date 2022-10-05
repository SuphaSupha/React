import "./Products.css";
import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

//renderinami elementai, kai yra nustatomas setState daromas rerenderinimas
const random = uniqueNamesGenerator({
  dictionaries: [colors, adjectives, animals],
});
const Products = () => {
  const [counter, setCounter] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("Edvinas");
  const [surname, setSurname] = useState("Vaičiūnas");
  const [activeDay, setActiveDay] = useState("");
  const [todos, setTodos] = useState(["Išmokti React"]);
  const [todoText, SetTodoText] = useState("");
  const [age, setAge] = useState(0);
  const [siblings, setSiblings] = useState(0);
  const [value, setValue] = useState(0);
  const [number, setNumber] = useState(0);
  const [size, setSize] = useState();
  const [myname, setMyname] = useState("Vardelis");

  const [colors, setColors] = useState(["red"]);
  const [colorText, setColorText] = useState("");

  const [boxwidth, setBoxWidth] = useState(50);
  const [boxhight, setBoxHight] = useState(50);
  const [boxColor, setBoxColor] = useState("black");

  const handleClick = () => {
    setCounter(counter + 1);
  };

  //   const trasformValue = () => {
  //     if (value > 0) {
  //       setValue(0);
  //     }
  //   };

  const transformSurn = () => {
    if (surname === "Vaičiūnas") {
      setSurname("Jonaitis");
    } else {
      setSurname("Vaičiūnas");
    }
  };

  const hendleAddTodo = () => {
    //[...todos]
    if (todoText.length >= 1) {
      setTodos([...todos, todoText]); //prideda
      SetTodoText("");
    }
    console.log(todoText);
  };

  const heandleAddColor = () => {
    if (colorText) {
      setColors((prevColors) => [...prevColors, colorText]); // prideda
      setColorText("");
    }
  };

  const handleDeleteTodo = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo !== todo));
  };

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleIncreaseBoxSize = () => {
    setBoxWidth((prevBoxWidth) => prevBoxWidth + 25);
    setBoxHight((prevBoxHight) => prevBoxHight + 25);
    if (boxColor === "black") {
      setBoxColor("grey");
    } else {
      setBoxColor("black");
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Products: {counter}</button>
      <br />
      <button onClick={() => setQuantity(quantity + 100)}>100</button>
      <button onClick={() => setQuantity(quantity + 200)}>200</button>
      <button onClick={() => setQuantity(quantity + 500)}>500</button>
      <h2>Kiekis {quantity}</h2>
      <br />
      <br />
      <br />
      <h2 onClick={() => setName("Antanas")}>{name}</h2>
      <h2 onClick={transformSurn}>{surname}</h2>
      {weekdays.map((weekday, index) => (
        <span
          key={index}
          className={`weekday ${activeDay === weekday ? "active" : ""}`}
          onClick={() => setActiveDay(weekday)}
        >
          {weekday}
        </span>
      ))}
      <div className="todo-list">
        <input
          type="text"
          className="todo-input"
          value={todoText}
          onChange={(e) => SetTodoText(e.target.value)}
        ></input>
        <CustomButton variant="contained" onClick={hendleAddTodo}>
          ADD TODO
        </CustomButton>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo} <span onClick={() => handleDeleteTodo(todo)}>X</span>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <br />
      <h2>Today i am {age} Years of Age</h2>
      <h2>I have {siblings} siblings</h2>
      <button onClick={() => setAge(age + 1)}>Get older!</button>
      <button onClick={() => setSiblings(siblings + 1)}>More siblings!</button>
      <br />
      <button onClick={() => setAge(age - 1)}> Get younger!</button>
      <button onClick={() => setSiblings(siblings - 1)}>Less siblings! </button>
      <br />
      <br />
      <h2>Current value is: {value}</h2>
      <button onClick={() => setValue(0)}>Reset</button>
      {/* <button onClick={() => setValue(value === 0)}>Reset</button> */}
      <button onClick={() => setValue(value + 1)}>Plus+</button>
      <button onClick={() => setValue(value - 1)}>Minus-</button>
      <br />
      <br />
      <h2>{number}</h2>
      <button onClick={() => setNumber(Math.random())}>
        Generate random number{" "}
      </button>

      <br />
      <h2>{myname}</h2>
      <button onClick={() => setMyname(random.replaceAll("_", " "))}>
        Generate random name
      </button>

      <br />
      <div className="square">{size}</div>
      <button onClick={() => setSize(size.className === "square2")}>
        Increase bar size
      </button>
      <button>Decrease bar size</button>
      <br />
      <br />
      <input
        type="text"
        className="todo-input"
        value={colorText}
        onChange={(e) => setColorText(e.target.value)}
      />
      <CustomButton onClick={heandleAddColor}>Add new Color</CustomButton>
      {colors.map((color, index) => (
        <div
          key={`${color}_${index}`}
          style={{ backgroundColor: color, width: 50, height: 50 }}
        />
      ))}
      <br />
      <br />
      <button onClick={handleIncreaseBoxSize}>++++</button>
      <div
        style={{ backgroundColor: "black", width: boxwidth, height: boxhight }}
      ></div>
    </div>
  );
};

export default Products;
