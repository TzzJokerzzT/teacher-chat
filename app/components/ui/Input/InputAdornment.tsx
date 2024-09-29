import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornmentProps } from "@/types/types.env";

const InputAdornments = ({ onClick, showIcon }: InputAdornmentProps) => {
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleMouseUpPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={onClick}
        onMouseDown={handleMouseDownPassword}
        onMouseUp={handleMouseUpPassword}
        edge="end"
      >
        {showIcon ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
};

export default InputAdornments;
