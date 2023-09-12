"use client";

import Link from "next/link";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  id: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, id, onClick }) => {
  return (
    <Link
      href={id}
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-200 transition font-semibold tracking-wide"
    >
      {label}
    </Link>
  );
};

export default MenuItem;
