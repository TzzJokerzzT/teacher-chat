import Link from "next/link";
import styles from "./page.module.css";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hola Mundo</h1>
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    </main>
  );
}
