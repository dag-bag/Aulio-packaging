import React from "react";
import "../assets/navbar/navbar.css";
import { FaSistrix } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <h2>Aulia</h2>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Customers</a>
            </li>
            <li>
              <a>Platform&Services</a>
            </li>
            <li>
              <a>Catelouge</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
          <div className="tPart">
            <div
              className="search"
              style={{
                position: "relative",
              }}
            >
              <input type="text" id="search" placeholder="search products" />
              <FaSistrix
                style={{
                  fontSize: "2rem",
                  position: "absolute",
                  top: "3px",
                  cursor: "pointer",
                  right: "0",
                  color: "purple",
                }}
              />
            </div>
            <a href="#" id="getS">
              Get Started
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
