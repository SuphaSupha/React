import styled from "styled-components";

const StyledButton = styled.div`
  padding: 10px;
  background-color: red;
`;

const Text = styled.p`
  color: Blue;
  font-size: 20px;
`;

const Button = ({ children }) => {
  return (
    <StyledButton>
      <Text>{children}</Text>
    </StyledButton>
  );
};

export default Button;
