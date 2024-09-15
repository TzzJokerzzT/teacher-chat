import Link from "next/link";
import MainButton from "../components/Button/Button";
import styles from "./InitialPage.module.css";
import Navbar from "../components/Navbar/Navbar";

export default function InitialPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section>
          <h1>Bienvenidos a Teacher Chat</h1>
          <div>
            <p>
              En esta aplicación podras usar inteligencia artificial para el
              desarrollo de preguntas para examanes y pruebas de estado
            </p>
          </div>
          <div className={styles.btn_container}>
            <Link href="./register">
              <MainButton>Registro</MainButton>
            </Link>
            <Link href="./login">
              <MainButton>Login</MainButton>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
