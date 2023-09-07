import Link from "next/link";
import React from "react";

const NavLink = () => {
  return (
    <div className="flex flex-row justify-start items-center gap-4 w-2/3 text-lg text-white font-normal">
      <Link
        href={"#"}
        className="capitalize w-1/2 whitespace-nowrap tracking-wide"
      >
        <h4>Beranda</h4>
      </Link>

      <Link
        href={"#layanan"}
        className="capitalize w-1/2 whitespace-nowrap tracking-wide"
      >
        <h4>Layanan</h4>
      </Link>

      <Link
        href={"#keunggulan"}
        className="capitalize w-1/2 whitespace-nowrap tracking-wide"
      >
        <h4>fitur & keunggulan</h4>
      </Link>

      <Link
        href={"#praktisi"}
        className="capitalize w-1/2 whitespace-nowrap tracking-wide"
      >
        <h4>praktisi hukum</h4>
      </Link>

      <Link
        href={"#testimoni"}
        className="capitalize w-1/2 whitespace-nowrap tracking-wide"
      >
        <h4>testimoni</h4>
      </Link>

      <Link
        href={"#event"}
        className="capitalize w-1/2 whitespace-nowrap tracking-wide"
      >
        <h4>event</h4>
      </Link>

      <Link
        href={"#kontak"}
        className="capitalize w-1/2 whitespace-nowrap tracking-wide"
      >
        <h4>kontak</h4>
      </Link>

      <Link
        href={"#berita"}
        className="capitalize w-1/2 whitespace-nowrap tracking-wide"
      >
        <h4>berita</h4>
      </Link>
    </div>
  );
};

export default NavLink;
