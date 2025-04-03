import { AuthLayout } from "../layout/AuthLayout";
import {
  Button,
  FormControl,
  Grid2,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "../../hooks";
import { useAuthStore } from "../../hooks/useAuthStore";
import Swal from "sweetalert2";
import { PasswordInput } from "../../calendar/components/PasswordInput";
import { isAllOf } from "@reduxjs/toolkit";

const registerForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterPage = () => {
  const { startRegister } = useAuthStore();
  const { onInputChange, name, email, password, confirmPassword } =
    useForm(registerForm);
  const [wasButtonClicked, setWasButtonClicked] = useState(false);
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      Swal.fire("Password Error", "Passwords do not match", "error");
      return
    }
    setWasButtonClicked(true);

    startRegister({ name, email, password });
  };
  const isLargeScreen = useMediaQuery("(min-width:1440px)");
  return (
    <AuthLayout title="Sign up to">
      <form
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={onSubmit}
      >
        <Grid2 container flexDirection={"column"} sx={{ gap: 2 }}>
          <Grid2
            item
            xs={12}
            sx={{
              width: {
                xs: "100%",
                sm: "400px",
                
                lg: "340px",
                xxl: "600px",
              },
            }}
          >
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              onChange={onInputChange}
              placeholder="Tomas Ortega"
              size={isLargeScreen ? "medium" : "small"}
              value={name}
            />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField
              error={wasButtonClicked && !isValidEmail(email)}
              fullWidth
              helperText={
                wasButtonClicked && !isValidEmail(email) ? "Invalid Email" : ""
              }
              label="Email"
              name="email"
              onChange={onInputChange}
              placeholder="tomasor@gmail.com"
              size={isLargeScreen ? "medium" : "small"}
              type="email"
            />
          </Grid2>
          <Grid2 item xs={12}>
            <FormControl fullWidth variant="outlined">
              <PasswordInput
                id="registerPassword"
                label="Password"
                name="password"
                onChange={onInputChange}
                value={password}
              />
            </FormControl>
          </Grid2>
          <Grid2 item xs={12}>
            <FormControl fullWidth variant="outlined">
              <PasswordInput
                id="registerConfirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                onChange={onInputChange}
                value={confirmPassword}
              />
              {/* 
              /> */}
            </FormControl>
          </Grid2>
          <Grid2 container direction="column" spacing={2}>
            {/* <Grid2 item xs={12} display={errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid2> */}
            <Grid2 item xs={12}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#000" }}
                fullWidth
                type="submit"
                // disabled={isCheckingAuthentication}
              >
                Sign Up
              </Button>
            </Grid2>

            <Grid2
              alignItems={"center"}
              container
              justifyContent={"end"}
              sx={{ mt: 1, gap: 1 }}
            >
              <Typography>Do you have an account?</Typography>
              <Link
                // component={RouterLink}
                to={"/auth/login"}
                style={{
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Log in
              </Link>
            </Grid2>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
