import Form from "@/components/Form/Register/FormRegister";
import Navbar from "@/ui/Navbar/Navbar";
import styles from "@/styles/RegisterPage.module.css";

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
