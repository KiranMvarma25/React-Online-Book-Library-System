import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/home" className="navbaritem">Home</NavLink>
            <NavLink to="/browse" className="navbaritem">Browse Books</NavLink>
            <NavLink to="/addbook" className="navbaritem">Add Book</NavLink>
        </div>
    );
}

export default Navbar;