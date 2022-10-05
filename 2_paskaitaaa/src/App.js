import "./App.css";
import Button from "./components/Button/Button";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="container">
      Edvinas
      <div className="buttons">
        <Button text="say gello" />
        <Button text="Merssi" />
        <Button text="Click me" />
        <Button text="Delete" />
        <Button text="labanakt" />
        <Button text="Tsiuz" />
        <Button text="Simple-Pimple" />
        <Button text="Bay-bay" type="submit" bgColor="green" />
      </div>
      <div>
        <Hero title="info Hero" subtitle="Info subtitle" />
        <Hero title="info Hero" subtitle="Info subtitle" color="red" />
      </div>
    </div>
  );
}

export default App;
