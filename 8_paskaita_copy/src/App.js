import { Routes, Route } from "react-router-dom";
import Pets from "./Pages/Pets/Pets";
import Logs from "./Pages/Logs/Logs";
import Error from "./Pages/Error/Error";
import Add from "./Pages/Add/Add";
import { createContext } from "react";

const Context = createContext("Default value");

const App = () => {
  // /logs/7 => params.id=7
  // getPetsById(7)

  return (
    <Context.Provider value="">
      <Routes>
        <Route path="/" element={<Pets />} exect />
        <Route path="/logs/:id" element={<Logs />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Context.Provider>
  );
};

export default App;
