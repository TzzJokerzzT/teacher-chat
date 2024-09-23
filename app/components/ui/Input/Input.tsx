"use client";

import { StyledInputProps } from "@/types/types.env";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const InputField = styled(TextField)<StyledInputProps>(({ width }) => ({
  width: width || "90%",
  margin: "1rem 0",
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
}));

export default function Input({
  helperText,
  type,
  id,
  label,
  required,
  width,
}: StyledInputProps) {
  return (
    <InputField
      required={required}
      helperText={helperText}
      type={type}
      id={id}
      label={label}
      width={width}
    />
  );
}
