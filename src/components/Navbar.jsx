import React, { useEffect, useState, forwardRef } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";

const Navbar = forwardRef((props, ref) => {
  const [setActive, setsetActive] = useState("");

  console.log(navLinks); // Log outside the JSX block

  return (
    <nav
      ref={ref}
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Thomas Stewart <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;
