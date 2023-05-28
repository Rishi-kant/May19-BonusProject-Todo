import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css"
import {AiOutlineHome} from "react-icons/ai"
function NavBar() {
  return (
    <div className={style.container} >
      <div className={style.leftNav}>
        <NavLink to="/" className={style.navLink}><AiOutlineHome/></NavLink>
      </div>
      <div className={style.rightNav}>
        <NavLink to="/task" className={style.navLink}>Task</NavLink>
        <NavLink to="/contact"  className={style.navLink}>Contact</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
