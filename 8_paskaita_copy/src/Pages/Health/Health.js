import NavigationBar from "../../components/NavigationBar";
import Topbar from "../../components/Topbar";
import Heading from "../../components/Heading";
import DefaultLayout from "../../layouts/DefaultLayout";

import { useParams } from "react-router-dom";

const mockedPetData = [
  {
    prescription: "Tick Vaccine",
    description: "Alfa beta",
    date: "2022-10-18",
  },
  {
    prescription: "Wick Vaccine",
    description: "Alfa beta",
    date: "2022-12-18",
  },
  {
    prescription: "Zick Vaccine",
    description: "Alfa beta",
    date: "2022-10-18",
  },
  {
    prescription: "Tick Vaccine",
    description: "Alfa beta",
    date: "2022-10-05",
  },
];

// const { id } = useParams();
// const pet = pets.find((pet) => pet.id === Number(id));

const Health = () => {
  // useState reikės tam, kad išsaugoti duomenis
  // useEffect, kad iškviesti iš DB
  // setState(mockedPetData)
  // useParams (google it)
  // https://glittery-dull-snickerdoodle.glitch.me/v1/logs/201
  // https://glittery-dull-snickerdoodle.glitch.me/v1/logs/197
  const name = "Levis";
  return (
    <>
      <NavigationBar />
      <DefaultLayout>
        <Topbar>
          <Heading>{pet && pet.name}: Health records</Heading>
        </Topbar>
      </DefaultLayout>
    </>
  );
};

export default Health;
