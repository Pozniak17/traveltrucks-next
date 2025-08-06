/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useState } from "react";
import styles from "./AppBar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function AppBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <img src="/icons/Logo.svg" alt="logo" className={styles.image} />
      </Link>

      <nav className={styles.nav}>
        <Link
          href="/"
          className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        >
          Home
        </Link>

        <Link
          href="/catalog"
          className={`${styles.link} ${
            pathname === "/catalog" ? styles.active : ""
          }`}
        >
          Catalog
        </Link>
        <Link
          href="/favorites"
          className={`${styles.link} ${
            pathname === "/favorites" ? styles.active : ""
          }`}
        >
          Favorites
        </Link>
      </nav>

      <nav className={styles.mobile_nav}>
        {isOpen ? (
          <img src="/icons/square-x.svg" onClick={() => setIsOpen(false)} />
        ) : (
          <img src="/icons/Menu.svg" onClick={() => setIsOpen(true)} />
        )}
        <MobileMenu status={isOpen} />
      </nav>
    </header>
  );
}
