import Link from "next/link";
import styles from "./style.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">홈</Link>
        </li>
        <li>
          <Link href="/categories">카테고리</Link>
        </li>
      </ul>
    </nav>
  );
}
