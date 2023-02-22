import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <nav>
        <h1>Estarta Blog</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button>
              <Link to="/create">New Blog</Link>
            </button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavigationBar;
