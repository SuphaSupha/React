import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Cards = styled.div`
  border: 2px solid lightgray;
  border-radius: 4px;
  width: 30%;
  padding: 12px;
  gap: 12px;
  margin: 12px 0px;
  text-align: center;
`;

const Card = (name, description, date, email) => {
  return (
    <Container>
      <Cards>
        <h3>jsjsajas</h3>
        <p>description</p>
        <p>2012-12-30</p>
        <p>edvinukas@gmail.com</p>
        <div>
          <Button type="contained">View Logs</Button>
          <Button>Delete</Button>
        </div>
      </Cards>
      <Cards>
        <h3>jsjsajas</h3>
        <p>description</p>
        <p>2012-12-30</p>
        <p>edvinukas@gmail.com</p>
        <div>
          <Button type="contained">View Logs</Button>
          <Button>Delete</Button>
        </div>
      </Cards>
      <Cards>
        <h3>jsjsajas</h3>
        <p>description</p>
        <p>2012-12-30</p>
        <p>edvinukas@gmail.com</p>
        <div>
          <Button type="contained">View Logs</Button>
          <Button>Delete</Button>
        </div>
      </Cards>
      <Cards>
        <h3>jsjsajas</h3>
        <p>description</p>
        <p>2012-12-30</p>
        <p>edvinukas@gmail.com</p>
        <div>
          <Button type="contained">View Logs</Button>
          <Button>Delete</Button>
        </div>
      </Cards>
    </Container>
  );
};

export default Card;
