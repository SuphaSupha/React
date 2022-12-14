import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/todos">Todos</Link>
    </div>
  );
};

export default Navbar;
