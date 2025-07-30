import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import routes from "../routes";

<<<<<<< HEAD
=======
function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
  );
}
>>>>>>> 56544901c0080bc23ca8c8422b8859c2512617e7

const NavBar = () => (
  <div className="navbar">
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/directors">Directors</NavLink>
    <NavLink to="/actors">Actors</NavLink>
  </nav>
</div>
);
export default NavBar;
