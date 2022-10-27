import { useParams } from "react-router-dom";
import Hero from "../../components/Hero/index";

const Profile = () => {
  const { id } = useParams();
  return (
    <dvi>
      <Hero title="asjdjsas"></Hero>
      <h1>sadasd {id}</h1>;
    </dvi>
  );
};

export default Profile;
