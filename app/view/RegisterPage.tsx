import Form from "@/components/Form/Register/FormRegister";
import Navbar from "@/ui/Navbar/Navbar";
import styles from "@/styles/RegisterPage.module.css";
import { registerRoutes } from "@/api/register/route";

export default function RegisterPage() {
  return (
    <>
      <Navbar
        routes={registerRoutes}
        width="12rem"
        txtColor="#eff0f3"
        bgColor="#3740ec"
        brdColor="#3740ec"
        bgColorHover="#39409b"
        brdColorHover="#39409b"
      />
      <main className={styles.register_container}>
        <Form />
      </main>
    </>
  );
}
