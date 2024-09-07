// Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          {isAuthenticated ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <button onClick={handleLogin}>Login</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
