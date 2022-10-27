import styled from "styled-components";

const OrangeButton = styled.button`
  background-color: #eb5d05;
  border: 2px solid #eb5d05;
  padding: 0px 32px;
  border-radius: 6px;
  margin: 6px;
`;
const WhiteButton = styled.button`
  background-color: white;
  border: 2px solid #eb5d05;
  padding: 0px 32px;
  border-radius: 6px;

  margin: 6px;
`;

const BlackText = styled.p`
  color: #eb5d05;
  font-size: 14px;
`;
const WhiteText = styled.p`
  color: white;
  font-size: 14px;
`;

const Button = ({ children, type, onClick }) => {
  if (type === "contained") {
    return (
      <OrangeButton>
        <WhiteText>{children}</WhiteText>
      </OrangeButton>
    );
  } else {
    return (
      <WhiteButton>
        <BlackText>{children}</BlackText>
      </WhiteButton>
    );
  }
};

export default Button;
