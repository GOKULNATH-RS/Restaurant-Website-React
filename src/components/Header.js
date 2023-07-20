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
        <a className="nav-links" href="">
          Home
        </a>
        <a className="nav-links" href="">
          Orders
        </a>
        <a className="nav-links" href="">
          Coupons
        </a>
      </div>
    </nav>
  );
}

export default Header;
