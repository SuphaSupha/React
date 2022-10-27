import "./Add.css";
import Navigation from "../../Components/Navigation/Navigation";
import Button from "../../Components/Button/Button";
import { useState } from "react";

const Add = () => {
  const [people, setPeople] = useState(0);
  const [price, setPrice] = useState(0);

  const hendleAddItem = (e) => {
    e.preventDefault();
    const id = Date.now();
    const addItems = { id, people, price };

    fetch("https://believed-shore-vanadium.glitch.me/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addItems),
    })
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navigation />
      <h1>Add order</h1>
      <form>
        <label>People:</label>
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        ></input>
        <br />
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <br />
        <Button variant="contained" onClick={hendleAddItem}>
          Add Item
        </Button>
      </form>
    </div>
  );
};

export default Add;
