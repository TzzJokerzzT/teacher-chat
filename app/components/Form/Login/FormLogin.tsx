"use client";

import MainButton from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import styles from "./FormLogin.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLogin } from "@/hook/useLogin";
import { urlLogin } from "@/utils/dataForm";
import { WrongIcon } from "@/utils/Icons";
import { useRouter } from "next/navigation";
import ModalBox from "@/components/ui/Modal/Modal";
import { useTeacherProvider } from "@/Store/TeacherStore";
import Loading from "@/components/ui/Loading/Loading";
import Link from "next/link";
import InputAdornments from "@/components/ui/Input/InputAdornment";
import { useAuth } from "@/hook/useAuthenticard";

export default function FormLogin() {
  //State
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  //State Mannagment
  const { openModal, toggleModal } = useTeacherProvider();

  const router = useRouter();

  //Store
  const { showPassword, togglePasswordVisibility } = useTeacherProvider();

  //Custom Hook
  const { login, isLoading, error, userLogin } = useLogin(urlLogin);
  const { isAuthenticated, isLogin } = useAuth();

  //Handlers Functions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await login(loginData);

    if (response?.success) {
      isLogin();
      router.push("/main");
    } else {
      toggleModal();
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/main");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (error) {
      toggleModal();
    }
  }, [error, toggleModal]);

  return (
    <div className={styles.login_container}>
      <div className={styles.image_container}>
        <Image
          src="/LoginImage.png"
          alt="Login Image"
          loading="lazy"
          width={1800}
          height={1200}
        />
      </div>
      <div>
        <div className={styles.form_container}>
          <form onSubmit={handleSubmit}>
            <h1>Teacher App</h1>
            <Input
              required
              helperText="Use your Email"
              id="email"
              label="Email"
              type="email"
              onChange={handleChange}
              value={loginData.email}
              width="30rem"
            >
              Email
            </Input>
            <Input
              required
              endAdorment={
                <InputAdornments
                  onClick={togglePasswordVisibility}
                  showIcon={showPassword}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                />
              }
              helperText="Use your Password"
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              value={loginData.password}
              width="30rem"
            >
              Password
            </Input>
            <div className={styles.btn_container}>
              <MainButton
                disabled={isLoading}
                bgColor="#3740EC"
                brdColor="transparent"
                bgColorHover="#39409B"
                brdColorHover="transparent"
                type="submit"
                width="14.0625rem"
              >
                {isLoading ? <Loading /> : "Login"}
              </MainButton>
            </div>
            <p>
              ¿Nuevo en nuestra app?{" "}
              <Link href="./register">
                <strong>Registrate Aqui</strong>
              </Link>
            </p>
            <ModalBox
              header={<WrongIcon />}
              onOpen={openModal}
              onClose={toggleModal}
            >
              {error}
            </ModalBox>
          </form>
        </div>
      </div>
    </div>
  );
}
