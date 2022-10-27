import Button from "../../Components/Button";
import Card from "../../Components/Card";
import Heading from "../../Components/Heading";
import Navbar from "../../Components/Navbar/Navbar";
import CenterLayout from "../../layouts/CenterLayout";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Link } from "react-router-dom";

const Pets = () => {
  return (
    <div>
      <Navbar />
      <DefaultLayout>
        <Heading>Pets list</Heading>
        <Link to="/add">
          <Button type="contained">ADD PET</Button>
        </Link>
      </DefaultLayout>
      <CenterLayout>
        <Card></Card>
      </CenterLayout>
    </div>
  );
};

export default Pets;
