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
  phone: string;
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
