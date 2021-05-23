import Link from "next/link";
import styles from "../styles/Card.module.scss";

export default function Card({ path, title, route }) {
  return (
    <Link href={route}>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <div className={styles.image}>
          <img src={path} />
        </div>
      </div>
    </Link>
  );
}
