import { Routes, Route } from "react-router-dom";
import NightModeProvider from "./contexts/NightModeProvider";
import LenguageModeProvider from "./contexts/LenguageModeProv";
import PetsProvider from "./contexts/PetsProvider";
import Health from "./pages/Health/Health";
import Pets from "./pages/Pets/Pets";
import Error from "./pages/Error/Error";
import Add from "./pages/Add/Add";

const App = () => {
  // Susikurti dar viena context/provider su kalba.
  // LT/EN spaudziant keiciasi kalba
  return (
    <LenguageModeProvider>
      <NightModeProvider>
        <PetsProvider>
          <Routes>
            <Route path="/" element={<Pets />} exact />
            <Route path="/health/:id" element={<Health />} />
            <Route path="/add" element={<Add />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </PetsProvider>
      </NightModeProvider>
    </LenguageModeProvider>
  );
};

export default App;
