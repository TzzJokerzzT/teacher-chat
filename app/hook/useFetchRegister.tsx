import { FormRegisterProps, PostResponse, User } from "@/types/types.env";
import { useState } from "react";

const usePostRegister = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const postForm = async (registerData: FormRegisterProps) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });
      // if (!response.ok) {
      //   throw new Error("Error during registration");
      // }
      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 422) {
          setError(`Error 422: ${JSON.stringify(errorData.errors)}`);
        } else {
          setError(`Error ${response.status}: ${response.statusText}`);
        }
        return;
      }
      const data: PostResponse = await response.json();
      setUser(data.user);
    } catch (error) {
      setError("Error during registration");
    } finally {
      setLoading(false);
    }
  };
  return { postForm, loading, error, user };
};

export default usePostRegister;
