import Form from "../components/Form/FormRegister";
import Navbar from "../components/ui/Navbar/Navbar";
import styles from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className={styles.register_container}>
        <Form />
      </main>
    </>
  );
}
