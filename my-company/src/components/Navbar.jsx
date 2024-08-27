import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#4CAF50",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          padding: "8px 16px",
          borderRadius: "4px",
        }}
      >
        Home
      </Link>
      <Link
        to="./about"
        style={{
          color: "white",
          textDecoration: "none",
          padding: "8px 16px",
          borderRadius: "4px",
        }}
      >
        About
      </Link>
      <Link
        to="./services"
        style={{
          color: "white",
          textDecoration: "none",
          padding: "8px 16px",
          borderRadius: "4px",
        }}
      >
        Services
      </Link>
      <Link
        to="./contact"
        style={{
          color: "white",
          textDecoration: "none",
          padding: "8px 16px",
          borderRadius: "4px",
        }}
      >
        Contact Us
      </Link>
    </nav>
  );
}

export default Navbar;
