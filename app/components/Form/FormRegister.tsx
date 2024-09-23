"use client";

import MainButton from "@/ui/Button/Button";
import Input from "@/ui/Input/Input";
import { checkboxData, inputFields } from "@/utils/dataForm";
import styles from "./FormRegister.module.css";
import MainCheckbox from "@/ui/Checkbox/Checkbox";
import Box from "@mui/material/Box";

export default function Form() {
  return (
    <form onSubmit={() => alert("Hola")} className={styles.form_container}>
      {inputFields.map(({ required, helperText, type, id, label }, index) => {
        return (
          <Input
            key={index}
            required={required}
            helperText={helperText}
            type={type}
            id={id}
            label={label}
            width="50rem"
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
        <MainButton width="10rem" height="5rem" type="submit">
          Next
        </MainButton>
      </div>
    </form>
  );
}
