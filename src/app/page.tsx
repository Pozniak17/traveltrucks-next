import Link from "next/link";
import styles from "./styles/home.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Campers of your dreams</h1>
          <h2 className={styles.text}>
            You can find everything you want in our catalog
          </h2>
          <Link
            href="/catalog"
            className={styles.styled_link}
            style={{ width: 173 }}
          >
            View Now
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.second_wrapper}>
          <h1 className={styles.title}>Campers of your dreams</h1>
          <h2 className={styles.text}>
            You can find everything you want in our catalog
          </h2>
          <Link
            href="/catalog"
            className={styles.styled_link}
            style={{ width: 166 }}
          >
            View Now
          </Link>
        </div>
      </section>
    </>
  );
}
