import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationBar = styled.div`
  text-align: center;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.141);
  background-color: blue;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: black;
margin: 12px;
font-weight: 500px;
font-size: 20px;

&:hover {
  opacity: 0.6;
  transition: 500ms;
}

 ${NavigationBar}:hover & {
    background-color: yellow;
    transition: 300ms;

  }
}
`;

const RedLink = styled(StyledLink)`
  color: red;
`;

const Navbar = () => {
  return (
    <NavigationBar>
      <StyledLink to="/">Home</StyledLink>
      <RedLink to="/add">Add</RedLink>
    </NavigationBar>
  );
};

export default Navbar;
