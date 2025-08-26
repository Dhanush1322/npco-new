"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  label: string;
  link: string;
  submenu?: MenuItemProps[]; // allow nested submenu
}

const MenuItem: React.FC<MenuItemProps> = ({ label, link, submenu }) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
   
    <>
     <li className={`nav-item ${submenu ? "dropdown" : ""}`} key={label}>
      <Link
        href={link}
        className={`nav-link ${isActive ? "active" : ""} ${
          submenu ? "dropdown-toggle" : ""
        }`}
        onClick={(e) => submenu && e.preventDefault()}
      >
        {label} {submenu && <i className="bx bx-chevron-down"></i>}
      </Link>

      {submenu && (
        <ul className="dropdown-menu">
          {submenu.map((subItem) => (
            <MenuItem key={subItem.label} {...subItem} />
          ))}
        </ul>
      )}
    </li>
    
    </>
  );
};

export default MenuItem;
