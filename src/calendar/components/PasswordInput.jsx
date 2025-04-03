import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

export const PasswordInput = ({ label, name, value, onChange, id }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width:1440px)");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <>
      <InputLabel
        htmlFor="outlined-adornment-password"
        sx={{
          top: "50%",
          transform: "translateY(-50%)",
          transition: "all 200ms ease",
          padding: "0px 14px ",
          "&.MuiInputLabel-shrink": {
            top: "-10px",
            fontSize: 12.5,

            transform: "translateY(0%)",
          },
        }}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        size={isLargeScreen ? "medium" : "small"}
        onChange={onChange}
        name={name}
        value={value}
        id={id}
        type={showPassword ? "text" : "password"}
        sx={{}}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? "hide the password" : "display the password"
              }
              onClick={handleClickShowPassword}
              sx={{
                padding: "5px", // Reduce el tamaño del hover
                "&:hover": {
                  backgroundColor: "#0001", // Cambia el color de fondo al hacer hover
                },
              }}
            >
              {showPassword ? (
                <VisibilityOff sx={{ color: "#000" }} />
              ) : (
                <Visibility sx={{ color: "#000" }} />
              )}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </>
  );
};
