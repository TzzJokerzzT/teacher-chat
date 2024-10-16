import { FormLoginProps, LoginResponse, UserLogin } from "@/types/types.env";
import { useState } from "react";

export const useLogin = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userLogin, setUserLogin] = useState<UserLogin | null>(null);

  const login = async (loginData: FormLoginProps) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 401) {
          setError(`Error 401: ${JSON.stringify(errorData.error)}`);
        } else {
          setError(`Error ${response.status}: ${response.statusText}`);
        }
        return { success: false, message: errorData.error };
      }

      const data: UserLogin = await response.json();
      setUserLogin(data);

      return { success: true, message: "Login successful" };
      
    } catch (error) {
      setError("Error during Login");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error, userLogin };
};
