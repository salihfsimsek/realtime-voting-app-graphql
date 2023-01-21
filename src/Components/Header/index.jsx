import React from "react";

//React router dom
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar";

//Components
import SearchBox from "../SearchBox";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header-title">
          Vote App
        </Link>
        {pathname === "/" && <SearchBox className="d-none d-md-block" />}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
