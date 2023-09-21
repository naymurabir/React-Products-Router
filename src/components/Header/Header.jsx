import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {

    return (
        <div>
            <nav>

                <NavLink className="mr-3 font-bold text-xl" to="/">Home</NavLink>

                <NavLink className="mr-3 font-bold text-xl" to="/products">Products</NavLink>

                <NavLink className="mr-3 font-bold text-xl" to="/services">Services</NavLink>

                <NavLink className="mr-3 font-bold text-xl" to="/about">About</NavLink>

                <NavLink className="mr-3 font-bold text-xl" to="/contact">Contact</NavLink>

            </nav>
        </div>
    );
};

export default Header;