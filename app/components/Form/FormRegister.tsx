import MainButton from "@/ui/Button/Button";
import Input from "@/ui/Input/Input";
import { checkboxData, inputFields } from "@/utils/dataForm";
import styles from "./FormRegister.module.css";
import MainCheckbox from "@/ui/Checkbox/Checkbox";

export default function Form() {
  return (
    <form className={styles.form_container}>
      {inputFields.map(({ required, helperText, type, id, label }, index) => {
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
      })}

      <div className={styles.chkbox_container}>
        {checkboxData.map(({ content }, index) => {
          return <MainCheckbox key={index} label={content} />;
        })}
      </div>

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
  );
}
