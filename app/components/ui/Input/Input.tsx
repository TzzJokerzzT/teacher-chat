"use client";

import { StyledInputProps } from "@/types/types.env";
import { styled } from "@mui/material/styles";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const CustomFormControl = styled(FormControl)<{ width: string | undefined }>(
  ({ width }) => ({
    width: width || "90%",
    margin: "0.5rem 0",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "blue",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#025a97",
      },
    },
  })
);

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  color: "gray",
  "&.Mui-focused": {
    color: "#025a97",
  },
}));

const CustomHelperText = styled(FormHelperText)(({ theme }) => ({
  color: "gray",
  margin: "0.5rem 0",
  height: "1rem",
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
  helperText,
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
      <CustomHelperText>{helperText}</CustomHelperText>
    </CustomFormControl>
  );
}
