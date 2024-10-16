import Image from "next/image";
import styles from "./Navbar.module.css";
import MainButton from "../Button/Button";
import Link from "next/link";
import { NavbarProps } from "@/types/types.env";

export default function Navbar({
  width,
  txtColor,
  bgColor,
  brdColor,
  bgColorHover,
  brdColorHover,
  routes,
}: NavbarProps) {
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
        {routes.map(({ path, name }, index) => {
          const isSuscribe = path === "/suscribe";
          return (
            <Link key={index} href={path}>
              <MainButton
                width={isSuscribe ? width : "9rem"}
                txtColor={txtColor}
                brdColor={brdColor}
                bgColor={bgColor}
                bgColorHover={bgColorHover}
                brdColorHover={brdColorHover}
              >
                {name}
              </MainButton>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
