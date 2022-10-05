// Susikurti pagal reikiama standarta ieskoti portfolioj .js
// pasikeisti index.js  Į <items/>
//Optional: add funkcionaluma prisideti input  ir add button
// import { data } from "./mocks";
import "./Items.css";
import Hero from "../../Components/Hero/Hero";
import Card from "../../Components/Card/Card";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useState, useEffect } from "react"; // useEffect jei norime kad suveiktu tik viena karta naudojam tuscia [] masyva

const Items = () => {
  const [items, setItems] = useState([]);
  const [addItems, setAddItems] = useState([""]);
  const [itemUrl, setItemUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://golden-whispering-show.glitch.me")
      .then((resp) => resp.json())
      .then((response) => {
        setItems(response);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const hendleAddItem = (e) => {
    e.preventDefault();
    const id = Date.now();
    const addItems = { id, itemUrl, title, price };

    fetch("https://golden-whispering-show.glitch.me/", {
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

  // const hendleAddItem = () => {
  //   //[...todos]
  //   if (itemUrl.length >= 1) {
  //     setAddItems([...addItems, itemUrl, title, price]); //prideda
  //     setItemUrl("");
  //     setTitle("");
  //     setPrice(0);
  //   }
  // };

  const handleDeleteItem = (item) => {
    setItems((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
    setAddItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem !== item)
    );
  };

  return (
    <div>
      {/* <div className="products">
        {isLoading && <h1>Duomenys kraunasi....</h1>}

        {items.map((item, index) => (
          <div key={index} onClick={() => handleDeleteItem(item)}>
            <Card
              imageUrl={item.image}
              text={`${item.title} ($${item.price})`}
              className="product-card"
            />
          </div>
        ))}
      </div> */}
      {isLoading && <h1>Duomenys kraunasi....</h1>}
      <Hero
        title="Maxima"
        subtitle="Apie viska pagalvota"
        color="blue"
        className="center"
      />

      <div className="add">
        <label>Item img url:</label>
        <input
          type="url"
          value={itemUrl}
          onChange={(e) => setItemUrl(e.target.value)}
        ></input>
        <br />
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <br />
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <br />
        <CustomButton variant="contained" onClick={hendleAddItem}>
          Add Item
        </CustomButton>{" "}
        <div className="cards">
          {addItems.map((item, index) => (
            <Card
              key={index}
              className="card"
              imageUrl={itemUrl}
              text={title}
              price={price}
            >
              <CustomButton onClick={() => handleDeleteItem(item)}>
                Ištrinti!
              </CustomButton>
            </Card>
          ))}
        </div>
      </div>
      <div className="cards">
        {items.map((item, index) => (
          <Card
            key={index}
            className="card"
            imageUrl={item.image}
            text={item.title}
            price={item.price}
          >
            <CustomButton onClick={() => handleDeleteItem(item)}>
              Ištrinti!
            </CustomButton>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Items;
