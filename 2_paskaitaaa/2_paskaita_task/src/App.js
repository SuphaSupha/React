import "./App.css";
import Button from "./components/Button/Button";
import Hero from "./components/Hero/Hero";
import InfoTab from "./components/InfoTab/InfoTab";
import CardOne from "./components/CardOne/CardOne";

function App() {
  return (
    <div className="body">
      <div>
        <Hero
          title="titlesdasfddsfsfasdf"
          subtitle="Some about text in two lines"
        >
          <Button text="Button" />
        </Hero>

        <div className="infoTab">
          <InfoTab
            title="Portfolio"
            subtitle="Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text "
          />
        </div>
        <div className="container">
          <div className="cards">
            <CardOne
              imageUrl="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
              title="TEXT TEXT"
            />
            <CardOne
              imageUrl="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
              title="TEXT TEXT"
            />
            <CardOne
              imageUrl="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
              title="TEXT TEXT"
            />
          </div>
          <div className="cards">
            <CardOne
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6FixAMVCX3USVYBe57Pgqv3w7Xg3Eajxkw&usqp=CAU"
              title="lalalala"
            />
            <CardOne
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6FixAMVCX3USVYBe57Pgqv3w7Xg3Eajxkw&usqp=CAU"
              title="lalalala"
            />
            <CardOne
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6FixAMVCX3USVYBe57Pgqv3w7Xg3Eajxkw&usqp=CAU"
              title="lalalala"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
