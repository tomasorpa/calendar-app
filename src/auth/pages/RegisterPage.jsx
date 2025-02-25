import { Visibility, VisibilityOff } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
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
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

export const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <AuthLayout title="Sign up">
      <form className="animate__animated animate__fadeIn animate__faster">
        <Grid2 container sx={{ gap: 2 }} direction={"column"}>
          <Grid2 item xs={12}>
            <TextField
              label="Full Name"
              placeholder="Tomas Ortega"
              fullWidth
              name="displayName"
            />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="tomasor@gmail.com"
              fullWidth
              name="email"
            />
          </Grid2>
          <Grid2 item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid2>
          <Grid2 item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid2>
          <Grid2 container spacing={2}>
            {/* <Grid2 item xs={12} display={errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid2> */}
            <Grid2 item xs={12}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "primary.700" }}
                fullWidth
                type="submit"
              >
                Sign Up
              </Button>
            </Grid2>

            <Grid2
              container
              alignItems={"center"}
              justifyContent={"end"}
              sx={{ mt: 1, gap: 1 }}
            >
              <Typography>Do you have an account?</Typography>
              <Link
                // component={RouterLink}
                to={"/auth/login"}
                sx={{ color: "primary.400", fontWeight: "bold" }}
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
