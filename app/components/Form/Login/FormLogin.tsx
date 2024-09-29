"use client";

import MainButton from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import styles from "./FormLogin.module.css";
import Image from "next/image";

export default function FormLogin() {
  return (
    <div className={styles.login_container}>
      <div className={styles.image_container}>
        <Image
          src="/LoginImage.png"
          alt="Login Image"
          loading="lazy"
          width={1800}
          height={1200}
        />
      </div>
      <div>
        <div className={styles.form_container}>
          <h1>Teacher App</h1>
          <form>
            <Input id="email" label="Email" type="email" required />
            <Input id="password" label="Password" type="password" required />
            <div className={styles.btn_container}>
              <MainButton width="26rem" type="submit">
                LOGIN &gt;
              </MainButton>
            </div>
          </form>
          <p>
            ¿Nuevo en nuestra app?{" "}
            <a href="./register">
              <strong>REGISTRATE AQUI</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
