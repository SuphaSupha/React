import styled from "styled-components";

const PrimaryButton = styled.button`
  padding: 10px 20px;
  background: #f44336;
  border: 1px solid #f44336;
  border-radius: 6px;
  color: #ffffff;
`;
const SecondoryButton = styled(PrimaryButton)`
  background: #ffffff;
  color: #f44336;
`;

const Button = ({ color, type, children, distance }) => {
  if (color === "secondary") {
    return (
      <SecondoryButton
        onClick={() => {
          alert(distance);
        }}
      >
        {children}
      </SecondoryButton>
    );
  } else {
    return <PrimaryButton>{children}</PrimaryButton>;
  }
};

export default Button;
