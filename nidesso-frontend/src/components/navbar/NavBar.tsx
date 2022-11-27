import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about-us'>Über uns</Link>
        </nav>
    );
}

export default NavBar;