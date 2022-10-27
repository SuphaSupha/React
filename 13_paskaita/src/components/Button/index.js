import styled from "styled-components";

const StyledBtn = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 16px 11px;
`;

const Button = ({ onClick, children }) => {
  return <StyledBtn onClick={onClick}>{children}</StyledBtn>;
};

export default Button;
