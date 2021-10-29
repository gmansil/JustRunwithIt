import React, { useState } from "react";
import Style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    "Home",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const menuComponents = [];
  const [activeMenu, setActiveMenu] = useState("Home");

  menuItems.forEach((item, index) => {
    menuComponents.push(
      <li className={Style.NavigationItem}>
        <Link
          to={item === "Home" ? "/" : `/${item}`}
          class={Style.navigation_link}
          onClick={() => setActiveMenu(item)}
        >
          {item}
        </Link>
      </li>
    );
  });

  return (
    <>
      <div className={Style.Container}>
        <h1> JustRunwithIt</h1>
        <nav>
          <ul className={Style.NavigationMenu}>{menuComponents}</ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
