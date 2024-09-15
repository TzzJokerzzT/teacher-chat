import styles from "./page.module.css";
import InitialPage from "./view/InitialPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <InitialPage />
    </main>
  );
}
