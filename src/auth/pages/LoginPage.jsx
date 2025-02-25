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
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";



export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <AuthLayout title="Sign in to">
      <form
        onSubmit={() => {}}
        className="animate__animated animate__fadeIn animate__faster"
        style={{ display: "flex" }}
      >
        <Grid2 container direction={"column"} sx={{ gap: 2 }}>
          <Grid2 item xs={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="tomasor@gmail.com"
              fullWidth
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
                // disabled={isCheckingAuthentication}
              >
                Sign Up
              </Button>
            </Grid2>

          </Grid2>
            <Grid2
              container
              alignItems={"center"}
              justifyContent={"end"}
              sx={{ mt: 1, gap: 1 }}
            >
              <Typography>Don't have an account?</Typography>
              <Link
                // component={RouterLink}
                to={"/auth/register"}
                sx={{ color: "primary.400", fontWeight: "bold" }}
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
      <div></div>
    </AuthLayout>
  );
};
