import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo';// adjust the path to your actual logo

function Navbar() {
  return (
    <div className="navColor">
      <nav className="navLinks">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </div>
  );
}

export default Navbar;

