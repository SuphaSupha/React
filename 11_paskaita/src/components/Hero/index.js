import styled from "styled-components";

const PrimaryCont = styled.div`
  background-color: #006400;
  width: 100%;
`;

const SecondaryCont = styled(PrimaryCont)`
  background-color: #e31c79;
`;

const StyledSubAndTitle = styled.div`
  padding: 40px;
  color: white;
`;

const Hero = ({ type, title, subtitle }) => {
  if (type === "primary") {
    return (
      <PrimaryCont>
        <StyledSubAndTitle>
          {title && <h1>{title}</h1>}
          {subtitle && <h2>{subtitle}</h2>}
        </StyledSubAndTitle>
      </PrimaryCont>
    );
  } else {
    return (
      <SecondaryCont>
        <StyledSubAndTitle>
          {title && <h1>{title}</h1>}
          {subtitle && <h2>{subtitle}</h2>}
        </StyledSubAndTitle>
      </SecondaryCont>
    );
  }
};

export default Hero;
