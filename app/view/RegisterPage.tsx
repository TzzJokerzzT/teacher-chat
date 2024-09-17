import Form from "../components/Form/Form";
import Navbar from "../components/Navbar/Navbar";
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
