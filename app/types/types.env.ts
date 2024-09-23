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
  required?: boolean;
  helperText: string;
  type: string;
  id: string;
  label: string;
  width?: string;
}
