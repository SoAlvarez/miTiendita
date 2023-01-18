import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <><nav>
            <Link to="/Inicio">Inicio</Link>
            <Link to="/Cafe">Café</Link>
            <Link to="/Accesorios">Accesorios</Link>
        </nav> <CartWidget />7</>
    );
}

export default NavBar;