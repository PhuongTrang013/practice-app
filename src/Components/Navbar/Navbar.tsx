import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <h4 className="navbar-brand">Happy Cat</h4>
        </Link>

        <Link to="/login">
          <button className="btn btn-outline-success" type="submit">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
