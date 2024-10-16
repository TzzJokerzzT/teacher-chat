"use client";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { StyledButtonProps } from "@/types/types.env";

const StyledButton = styled(Button)<StyledButtonProps>(
  ({
    width,
    height,
    bgColor,
    brdColor,
    txtColor,
    bgColorHover,
    brdColorHover,
  }) => ({
    width: width || "7rem",
    height: height || "3rem",
    textTransform: "none",
    color: txtColor || "#fff",
    fontSize: "1rem",
    padding: ".37rem .75rem",
    border: ".063rem solid",
    lineHeight: 1.5,
    backgroundColor: bgColor || "#9138D7",
    borderColor: brdColor || "#9138D7",
    // boxShadow: ".12rem .44rem 1rem 0rem rgba(0,0,0,0.56)",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: bgColorHover || "#871395",
      borderColor: brdColorHover || "#871395",
      boxShadow: "none",
    },
    transition:
      "transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
    "&:active": {
      boxShadow: "none",
      backgroundColor: bgColorHover || "#0062cc",
      borderColor: bgColorHover || "#005cbf",
      transform: "translateY(.1rem)",
    },
  })
);

export default function MainButton({
  children,
  width,
  height,
  bgColor,
  brdColor,
  txtColor,
  type,
  disabled,
  bgColorHover,
  brdColorHover,
}: StyledButtonProps) {
  return (
    <StyledButton
      width={width}
      height={height}
      bgColor={bgColor}
      brdColor={brdColor}
      txtColor={txtColor}
      variant="contained"
      disableRipple
      disabled={disabled}
      type={type}
      bgColorHover={bgColorHover}
      brdColorHover={brdColorHover}
    >
      {children}
    </StyledButton>
  );
}
