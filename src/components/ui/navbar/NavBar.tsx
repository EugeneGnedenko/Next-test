"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { menuItems } from "./menuItems";
import styles from "./NavBar.module.scss";

const NavBar: FC = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>LOGO</h1>
      <div className={styles.headerNav}>
        {menuItems.map((item, index) => (
          <Link href={item.link} className={styles.headerNavItem} key={index}>
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default NavBar;
