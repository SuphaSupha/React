import "./App.css";
import { Routes, Route } from "react-router-dom";

import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Add from "./Pages/Add/Add";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
