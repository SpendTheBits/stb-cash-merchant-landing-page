"use client";
import { useState, useEffect } from "react";
import { HeaderBanner } from "@public/assets";
import styles from "./style.module.scss";
import { navItems } from "@utils/data";
import Link from "next/link";
import MobileHeader from "../mobileHeader";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  console.log("hash value", activeSection);

  return (
    <>
      <MobileHeader />
      <header className={styles.header}>
        <section
          className={styles.headerBanner}
          style={{ backgroundImage: `url(${HeaderBanner.src})` }}
        ></section>
      </header>
      <section className={styles.navListBlock}>
        <nav>
          {navItems.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className={
                activeSection === item.link ? styles.activeLink : styles.navLink
              }
              onClick={() => setActiveSection(item.link)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </section>
    </>
  );
};

export default Header;
