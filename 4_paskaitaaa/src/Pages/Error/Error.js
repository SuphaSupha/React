import styled from "styled-components";
import Breathe from "../../Components/Breathe/Breathe";

const Container = styled.div`
  height: 712px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Error = (textOne, textTwo, textThree, textFour, textFive, bgColor) => {
  return (
    <Container>
      <Breathe
        bgColor="#f9f9f9"
        textOne="404"
        textTwo="Page"
        textThree="Not"
        textFour="Found"
        textFive="..."
      ></Breathe>
    </Container>
  );
};

export default Error;
