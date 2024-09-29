import Image from "next/image";
import styles from "./Navbar.module.css";
import MainButton from "../Button/Button";
import Link from "next/link";

export default function Navbar() {
  //Este arreglo es para generar el texto de cada uno de los botones del navbar
  const buttonContent = [
    "Login",
    "Registro",
    "Acerca de",
    "Suscribirse - $5 USD",
  ];
  return (
    <nav className={styles.navbar_container}>
      <Image
        width={93}
        height={93}
        className={styles.logo}
        src="./Logo.svg"
        alt="Logo"
      />
      <div>
        {buttonContent.map((text, index) => (
          <Link key={index} href="./">
            <MainButton
              width={index >= 0 && index <= 2 ? "7rem" : "12rem"}
              txtColor={index >= 0 && index <= 2 ? "black" : ""}
              brdColor={index >= 0 && index <= 2 ? "white" : ""}
              bgColor={index >= 0 && index <= 2 ? "white" : ""}
            >
              {text}
            </MainButton>
          </Link>
        ))}
      </div>
    </nav>
  );
}
