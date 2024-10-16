"use client";

import MainButton from "@/ui/Button/Button";
import Input from "@/ui/Input/Input";
import InputAdornments from "@/ui/Input/InputAdornment";
import { checkboxData, urlRegister } from "@/utils/dataForm";
import styles from "./FormRegister.module.css";
import MainCheckbox from "@/ui/Checkbox/Checkbox";
import { useState } from "react";
import usePostRegister from "@/hook/useFetchRegister";
import { useTeacherProvider } from "@/Store/TeacherStore";
import { useRouter } from "next/navigation";
import Loading from "@/components/ui/Loading/Loading";
import Link from "next/link";

export default function Form() {
  //State
  const [registerData, setRegisterData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    // terms: false,
    // privacy: false,
  });

  //Router
  const router = useRouter();

  //Store
  const {
    showPassword,
    showConfirmPassword,
    togglePasswordVisibility,
    toggleConfirmsPasswordVisibility,
  } = useTeacherProvider();

  //Custom Hook
  const { postForm, isLoading, error, user } = usePostRegister(urlRegister);

  //Hanlders Functions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await postForm(registerData);
    setRegisterData({
      ...registerData,
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
    // response?.success ? router.push("/login")
    if (response?.success) {
      router.push("/login");
    }
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
        required
        helperText="Ingresa tus apellidos"
        id="lastName"
        label="Apellidos"
        type="text"
        onChange={handleChange}
        value={registerData.lastName}
        width="40rem"
      >
        Apellidos
      </Input>
      <Input
        required
        id="email"
        label="Correo electronico"
        type="email"
        onChange={handleChange}
        value={registerData.email}
        width="40rem"
      >
        Correo electronico
      </Input>
      <Input
        required
        id="phoneNumber"
        label="Telefono"
        type="text"
        onChange={handleChange}
        value={registerData.phoneNumber}
        width="40rem"
      >
        Telefono
      </Input>
      <Input
        required
        endAdorment={
          <InputAdornments
            onClick={togglePasswordVisibility}
            showIcon={showPassword}
          />
        }
        helperText="Ingresa tu constraseña"
        id="password"
        label="Ingrese su contraseña"
        type={showPassword ? "text" : "password"}
        onChange={handleChange}
        value={registerData.password}
        width="40rem"
      >
        Ingrese su contraseña
      </Input>
      <Input
        required
        endAdorment={
          <InputAdornments
            onClick={toggleConfirmsPasswordVisibility}
            showIcon={showConfirmPassword}
          />
        }
        helperText="Confirme tu constraseña"
        id="confirmPassword"
        type={showConfirmPassword ? "text" : "password"}
        label="Confirme su contraseña"
        onChange={handleChange}
        value={registerData.confirmPassword}
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
          disabled={isLoading}
          type="submit"
          txtColor="#eff0f3"
          bgColor="#3740ec"
          brdColor="#3740ec"
          bgColorHover="#39409b"
          brdColorHover="#39409b"
        >
          {isLoading ? <Loading /> : "Register"}
        </MainButton>
        <p>
          ¿Ya tienes una cuenta?{" "}
          <Link href="/login" className={styles.link}>
            <strong>Inicia sesión</strong>
          </Link>
        </p>
      </div>
    </form>
  );
}
