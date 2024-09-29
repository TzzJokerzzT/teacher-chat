"use client";

import { StyledInputProps } from "@/types/types.env";
import { styled } from "@mui/material/styles";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const CustomFormControl = styled(FormControl)<{ width: string | undefined}>(
  ({ width }) => ({
    width: width || "90%",
    margin: "1rem 0",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray", // Color del borde cuando no está en foco
      },
      "&:hover fieldset": {
        borderColor: "blue", // Color del borde cuando el mouse está sobre el input
      },
      "&.Mui-focused fieldset": {
        borderColor: "#025a97", // Color del borde cuando está en foco
      },
    },
  })
);

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  color: "gray", // Color inicial del label
  "&.Mui-focused": {
    color: "#025a97",
  },
}));

export default function Input({
  value,
  onChange,
  type,
  id,
  label,
  required,
  width,
  children,
  endAdorment,
  helperText
}: StyledInputProps) {

  return (
    <CustomFormControl variant="outlined" width={width}>
      <CustomLabel htmlFor={id}>{children}</CustomLabel>
      <OutlinedInput
        onChange={onChange}
        value={value}
        id={id}
        type={type}
        endAdornment={endAdorment}
        label={label}
        required={required}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </CustomFormControl>
  );
}
