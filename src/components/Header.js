import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
        <Link to="/">
        <h1>Mi tiendita</h1>
        </Link>
        <NavBar />
      </header>
  );
}

export default Header;