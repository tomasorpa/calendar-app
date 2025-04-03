import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid2,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useAuthStore } from "../../hooks/useAuthStore";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { PasswordInput } from "../../calendar/components/PasswordInput";

const loginForm = {
  email: "",
  password: "",
};
export const LoginPage = () => {
  const { onInputChange, email, password } = useForm(loginForm);
  const { errorMessage } = useSelector((state) => state.auth);
  const { startLogin } = useAuthStore();
  const isLargeScreen = useMediaQuery("(min-width:1440px)");

  const onSubmit = (event) => {
    event.preventDefault();
    startLogin({ email, password });
  };
  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Auth error", errorMessage, "error");
    }
  }, [errorMessage]);
  return (
    <AuthLayout title="Sign in to">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
        style={{ display: "flex" }}
      >
        <Grid2
          container
          direction={"column"}
          sx={{
            gap: 2,
          }}
        >
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
              label="Email"
              type="email"
              placeholder="tomasor@gmail.com"
              fullWidth
              size={isLargeScreen ? "medium" : "small"}
              onChange={onInputChange}
              name="email"
            />
          </Grid2>
          <Grid2 item xs={12}>
            <FormControl fullWidth variant="outlined">
              <PasswordInput
                label={"Password"}
                name={"password"}
                value={password}
                onChange={onInputChange}
                id="loginPassword"
              />
            </FormControl>
          </Grid2>
          <Grid2 container spacing={2}>
            {/* <Grid2 item xs={12} display={errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
              </Grid2> */}

            <Button
              variant="contained"
              sx={{ backgroundColor: "#000" }}
              fullWidth
              type="submit"
              // disabled={isCheckingAuthentication}
            >
              Log in
            </Button>
          </Grid2>
          <Grid2
            container
            alignItems={"center"}
            justifyContent={"end"}
            sx={{ mt: 1, gap: 1 }}
          >
            <Typography>Don&apos;t have an account?</Typography>
            <Link
              // component={RouterLink}

              to={"/auth/register"}
              style={{
                fontWeight: "bold",
                color: "black",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Sign Up
            </Link>
          </Grid2>
        </Grid2>
        {/* <FormControl>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
        </FormControl> */}
      </form>
    </AuthLayout>
  );
};
