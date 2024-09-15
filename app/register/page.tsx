import Input from "../components/Input/Input";
import Navbar from "../components/Navbar/Navbar";
import styles from "./page.module.css";
import { inputFields } from "../utils/dataForm";
import MainButton from "../components/Button/Button";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className={styles.register_form_container}>
        <form>
          {inputFields.map(
            ({ required, helperText, type, id, label }, index) => {
              return (
                <Input
                  key={index}
                  required={required}
                  helperText={helperText}
                  type={type}
                  id={id}
                  label={label}
                />
              );
            }
          )}
          <div className={styles.btn_container}>
            <MainButton
              width="10rem"
              height="5rem"
              bgColor="white"
              txtColor="black"
            >
              Cancel
            </MainButton>
            <MainButton width="10rem" height="5rem">
              Next
            </MainButton>
          </div>
        </form>
      </main>
    </>
  );
}
