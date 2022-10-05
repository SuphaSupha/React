import "./Hero.css";

const Hero = ({ title, subtitle, color }) => {
  const heroClassName = () => {
    switch (color) {
      case "red":
        return "red-hero";
      case "blue":
        return "blue-hero";
      case "green":
        return "green-hero";
      default:
        return "";
    }
  };
  return (
    <div className={heroClassName()}>
      <h1>{title.lenght > 10 && <p>Yuor text is very long</p>}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Hero;
