import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Card from "../../components/Card";
import Topbar from "../../components/Topbar";
import NavigationBar from "../../components/NavigationBar";
import DefaultLayout from "../../layouts/DefaultLayout";
import { PetsContext } from "../../../../8_paskaita/src/contexts/PetsProvider";

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
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
      .then((resp) => resp.json())
      .then((response) => {
        setPets(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const { petss } = useContext(PetsContext);

  return (
    <>
      <NavigationBar />
      <DefaultLayout>
        <Topbar>
          <Heading>Pet List</Heading>
          <Link>
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
              </Card>
            </CardContainer>
          ))}
        </Cards>
      </DefaultLayout>
    </>
  );
};

export default Pets;
