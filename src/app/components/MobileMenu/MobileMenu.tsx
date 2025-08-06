/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import styles from "./MobileMenu.module.css";
import { usePathname } from "next/navigation";

type MobileMenuProps = {
  status: boolean;
};

export default function MobileMenu({ status }: MobileMenuProps) {
  const pathname = usePathname();
  return (
    <nav
      className={`${styles.menu_nav} ${
        status ? styles["menu_nav--active"] : ""
      }`}
    >
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            href="/"
            className={`${styles.link} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            <img
              src={
                pathname === "/" ? "/icons/truck-red.svg" : "/icons/truck.svg"
              }
            />
            Home
          </Link>
        </li>

        <li className={styles.item}>
          <Link
            href="/catalog"
            className={`${styles.link} ${
              pathname === "/catalog" ? styles.active : ""
            }`}
          >
            <img
              src={
                pathname === "/catalog"
                  ? "/icons/catalog-red.svg"
                  : "/icons/catalog.svg"
              }
            />
            Catalog
          </Link>
        </li>

        <li className={styles.item}>
          <Link
            href="/favorites"
            className={`${styles.link} ${
              pathname === "/favorites" ? styles.active : ""
            }`}
          >
            <img
              src={
                pathname === "/favorites"
                  ? "/icons/heart-red2.svg"
                  : "/icons/heart-2.svg"
              }
            />
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}
