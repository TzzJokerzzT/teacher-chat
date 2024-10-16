import Link from "next/link";
import MainButton from "@/ui/Button/Button";
import styles from "@/styles/InitialPage.module.css";
import Navbar from "@/components/ui/Navbar/Navbar";
import { homeRoutes } from "@/api/register/route";

export default function InitialPage() {
  return (
    <>
      <Navbar
        routes={homeRoutes}
        width="12rem"
        txtColor="#eff0f3"
        bgColor="#3740ec"
        brdColor="#3740ec"
        bgColorHover="#39409b"
        brdColorHover="#39409b"
      />
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
