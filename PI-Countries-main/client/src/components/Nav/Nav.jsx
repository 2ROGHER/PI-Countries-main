import React from "react";
import { NavLink, Navigate, Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar.jsx";
import './Nav.module.css';
const Nav = () => {
  return (
    <>
      <nav>
            <ul>
                    <li>
                        <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>Home</NavLink></li>
                    <li><NavLink to="/favorites">Favorites</NavLink></li>
                    <Link to="/"><h1>Henry Countries</h1></Link>
                    <SearchBar/>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact-us">Contact</NavLink></li>
            </ul>
      </nav>
    </>
  );
};
export default Nav;
