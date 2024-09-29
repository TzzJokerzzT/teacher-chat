import FormLogin from "@/components/Form/Login/FormLogin";
import Navbar from "@/components/ui/Navbar/Navbar";
import styles from "@/styles/LoginPage.module.css";
export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className={styles.login_container}>
        <FormLogin />
      </main>
    </>
  );
}
