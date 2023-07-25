import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <div className="nav-items logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-9Wm33DYFHM-LcLcCcggtP0rYROHfmPpPT2CHBA&s"
          alt="logo"
        ></img>
      </div>
      <div className="nav-items nav-links">
        <Link className="nav-links" to="/">
          Home
        </Link>
        <Link className="nav-links" to="/orders">
          Orders
        </Link>
        <Link className="nav-links" to="/about">
          About
        </Link>
        <Link className="nav-links" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Header;
