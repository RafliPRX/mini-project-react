import { Link } from 'react-router-dom';
import '../Navbar.css';
function Navbar() {
    return(
        <nav className="navMenu">
            <a> <Link to={"/home"} >Home</Link> </a>
            <a> <Link to={"/"} >Logout</Link> </a>
            <div className="dot"></div>
        </nav>
    )
}

export default Navbar