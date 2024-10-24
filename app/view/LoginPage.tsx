import { loginRoutes } from "@/api/register/route";
import FormLogin from "@/components/Form/Login/FormLogin";
import Navbar from "@/components/ui/Navbar/Navbar";
import styles from "@/styles/LoginPage.module.css";
export default function LoginPage() {
  return (
    <>
      <Navbar
        routes={loginRoutes}
        width="12rem"
        txtColor="#eff0f3"
        bgColor="#3740ec"
        brdColor="#3740ec"
        bgColorHover="#39409b"
        brdColorHover="#39409b"
      />
      <main className={styles.login_container}>
        <FormLogin />
      </main>
    </>
  );
}
