import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  widht: 100%;
  height: 300px;
`;

const breatheAnimation = keyframes`
0% { height: 75px; width: 75px; font-size: 32px ;font-size: 28px;color:#eb5d05;text-shadow: 0.1px 0.1px 0.5px #777777, 0 0 0.02em #777777, 0 0 0.1em #777777  }
30% { height: 300px; width: 300px; opacity: 1; font-size: 26px; margin:2px; }
40% { height:304px; width: 304px; opacity: 1; font-size: 24px; margin:1px;}
100% { height: 75px; width: 75px; opacity: 1; font-size: 22px;}

`;

const Circle = styled.div`
  height: 75px;
  width: 75px;

  text-align: center;
  border-radius: 50%;
  animation-name: ${breatheAnimation};
  animation-iteration-count: infinite;
  &:hover {
    background-color: grey;
    transition: 500ms;
  }
`;
const OrangeCircle = styled(Circle)`
  background-color: orange;
  animation-duration: 12s;
`;
const RedCircle = styled(Circle)`
  background-color: red;
  animation-duration: 16s;
`;

const Breathe = ({ textOne, textTwo, bgColor }) => {
  return (
    <Container>
      <OrangeCircle style={{ backgroundColor: bgColor }}>
        {textOne}
      </OrangeCircle>
      <RedCircle style={{ backgroundColor: bgColor }}>{textTwo}</RedCircle>
    </Container>
  );
};

export default Breathe;
