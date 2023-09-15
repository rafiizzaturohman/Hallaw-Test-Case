"use client";

import Menu from "./Menu";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="container max-w-7xl mx-auto">
        <div className="w-full">
          <div className="flex flex-row justify-start items-center p-8 box-border">
            <div className="w-full md:w-2/6 flex flex-row justify-start items-center">
              <img src="/icons/HallawIcons.png" alt="Hallaw" />
            </div>

            <div className="w-1/2 base:w-3/4 flex flex-row justify-end items-center">
              <div className="hidden md:flex md:flex-row md:justify-between w-full">
                <NavLink />
              </div>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
