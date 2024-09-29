"use client";

import MainButton from "@/ui/Button/Button";
import Input from "@/ui/Input/Input";
import InputAdornments from "@/ui/Input/InputAdornment";
import { checkboxData, urlRegister } from "@/utils/dataForm";
import styles from "./FormRegister.module.css";
import MainCheckbox from "@/ui/Checkbox/Checkbox";
import { useState } from "react";
import usePostRegister from "@/hook/useFetchRegister";
import { useShowPassword } from "@/Store/TeacherStore";

export default function Form() {
  //State
  const [registerData, setRegisterData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    // terms: false,
    // privacy: false,
  });
  //Store
  const {
    showPassword,
    showConfirmPassword,
    togglePasswordVisibility,
    toggleConfirmsPasswordVisibility,
  } = useShowPassword();

  //Custom Hook
  const { postForm, loading, error, user } = usePostRegister(urlRegister);

  //Hanlders Functions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await postForm(registerData);
    setRegisterData({
      ...registerData,
      name: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form_container}>
      <Input
        value={registerData.name}
        onChange={handleChange}
        required
        helperText="Ingresa tu nombre"
        type="text"
        id="name"
        label="Nombre"
        width="40rem"
      >
        Nombre
      </Input>
      <Input
        value={registerData.lastName}
        onChange={handleChange}
        required
        helperText="Ingresa tus apellidos"
        type="text"
        id="lastName"
        label="Apellidos"
        width="40rem"
      >
        Apellidos
      </Input>
      <Input
        value={registerData.email}
        onChange={handleChange}
        required
        type="email"
        id="email"
        label="Correo electronico"
        width="40rem"
      >
        Correo electronico
      </Input>
      <Input
        value={registerData.phone}
        onChange={handleChange}
        required
        type="text"
        id="phone"
        label="Telefono"
        width="40rem"
      >
        Telefono
      </Input>
      <Input
        value={registerData.password}
        onChange={handleChange}
        required
        helperText="Ingresa tu constraseña"
        type={showPassword ? "text" : "password"}
        endAdorment={
          <InputAdornments
            onClick={togglePasswordVisibility}
            showIcon={showPassword}
          />
        }
        id="password"
        label="Ingrese su contraseña"
        width="40rem"
      >
        Ingrese su contraseña
      </Input>
      <Input
        value={registerData.confirmPassword}
        onChange={handleChange}
        required
        helperText="Confirme tu constraseña"
        type={showConfirmPassword ? "text" : "password"}
        endAdorment={
          <InputAdornments
            onClick={toggleConfirmsPasswordVisibility}
            showIcon={showConfirmPassword}
          />
        }
        id="confirmPassword"
        label="Confirme su contraseña"
        width="40rem"
      >
        Confirme su contraseña
      </Input>

      <div className={styles.chkbox_container}>
        {checkboxData.map(({ content }, index) => {
          return <MainCheckbox key={index} label={content} />;
        })}
      </div>

      <div className={styles.btn_container}>
        <MainButton
          width="10rem"
          height="3rem"
          bgColor="white"
          txtColor="#9138D7"
        >
          Cancel
        </MainButton>
        <MainButton
          width="10rem"
          height="3rem"
          disabled
          type="submit"
        >
          {loading ? "Registering..." : "Register"}
        </MainButton>
      </div>
      {error && <p>{error}</p>}
      {user && (
        <div>
          <h3>Welcome, {user.name}!</h3>
          <p>Email: {user.email}</p>
          <p>ID: {user.id}</p>
        </div>
      )}
    </form>
  );
}
