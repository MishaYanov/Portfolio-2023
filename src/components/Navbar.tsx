import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        end
        className="nav-link md:w-20 w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md xxs:text-sm xxs:w-10 "
      >
        <p className="blue-gradient_text">MY</p>
      </NavLink>
      <nav className="flex text-lg lg:gap-7 gap-4 font-medium xxs:text-sm xxs:gap-3">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-slate-200'} >
          <p>About</p>
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-slate-200'}>
          <p>Projects</p>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-slate-200'}>
          <p>Contacts</p>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
