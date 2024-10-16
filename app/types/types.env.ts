export type Route = {
  path: string;
  name: string;
};

export interface NavbarProps {
  width: string;
  txtColor: string;
  bgColor: string;
  brdColor: string;
  bgColorHover: string;
  brdColorHover: string;
  routes: Route[];
}

export interface StyledButtonProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  bgColor?: string;
  brdColor?: string;
  txtColor?: string;
  variant?: "text" | "contained" | "outlined";
  disableRipple?: boolean;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  bgColorHover?: string;
  brdColorHover?: string;
}

export interface StyledInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  id: string;
  label: string;
  required?: boolean;
  width?: string;
  children?: React.ReactNode;
  endAdorment?: React.ReactNode;
  helperText?: string;
}

export interface FormRegisterProps {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  updated_at: string;
  created_at: string;
}

export interface PostResponse {
  status: string;
  user: User;
}

export interface InputAdornmentProps {
  onClick: () => void;
  showIcon: boolean;
}

export interface FormLoginProps {
  email: string;
  password: string;
}

export interface UserLogin {
  credentials: { email: string; password: string };
  token: string;
  expires_in: number;
  message: string;
}

export interface LoginResponse {
  credentials: UserLogin;
  token: string;
  expires_in: number;
  message: string;
  error?: null | string;
}

export interface ModalBoxProps {
  children: React.ReactNode;
  header: React.ReactNode;
  onOpen: boolean;
  onClose: () => void;
}
