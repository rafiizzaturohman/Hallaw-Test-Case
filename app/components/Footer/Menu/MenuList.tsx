import Link from "next/link";
import React from "react";

interface MenuListProps {
  title: string;
  link: string;
}

const MenuList: React.FC<MenuListProps> = ({ title, link }) => {
  return (
    <Link href={`#${link}`} className="text-sm md:text-lg">
      {title}
    </Link>
  );
};

export default MenuList;
