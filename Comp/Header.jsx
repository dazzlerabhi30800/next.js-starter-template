import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <header>
      <h1 className={styles.logo}>Logo</h1>
      <ul>
        <li>
          <Link className={pathname === "/" ? styles.active : ""} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/about" ? styles.active : ""}
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </header>
  );
}
