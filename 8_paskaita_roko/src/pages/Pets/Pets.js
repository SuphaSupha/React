import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Heading from "../../Components/Heading";
import Card from "../../Components/Card";
import Topbar from "../../Components/TopBar";
import NavigationBar from "../../Components/NavigationBar";
import DefaultLayout from "../../layouts/DefaultLayout";
import { PetsContext } from "../../contexts/PetsProvider";

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  width: 32%;
  margin-bottom: 16px;
`;

const Pets = () => {
  const { pets } = useContext(PetsContext);

  return (
    <>
      <NavigationBar />
      <DefaultLayout>
        <Topbar>
          <Heading>Pet List</Heading>
          <Link to="/add">
            <Button>Add Pet</Button>
          </Link>
        </Topbar>
        <Cards>
          {pets.map((pet) => (
            <CardContainer key={pet.id}>
              <Card
                title={pet.name}
                subtitle={pet.dob}
                description={pet.client_email}
              >
                <Link to={`/health/${pet.id}`}>
                  <Button>View log</Button>
                </Link>
                <Button type="outlined">Delete</Button>
              </Card>
            </CardContainer>
          ))}
        </Cards>
      </DefaultLayout>
    </>
  );
};

export default Pets;
