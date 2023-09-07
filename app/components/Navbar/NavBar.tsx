"use client";

import Menu from "./Menu";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="container mx-auto">
        <div className="w-full">
          <div className="flex flex-row justify-start items-center p-4 md:mx-16">
            <div className="w-full md:w-1/2 flex flex-row items-center p-5">
              <img src="/icons/HallawIcons.png" alt="Hallaw" />
            </div>

            <div className="w-1/2 md:w-3/4 flex flex-row justify-end items-center">
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
