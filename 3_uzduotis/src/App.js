import "./App.css";
import { Routes, Route } from "react-router-dom";
import Todos from "./Pages/Todos/Todos";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
