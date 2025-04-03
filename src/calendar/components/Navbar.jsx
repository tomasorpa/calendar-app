import { CalendarMonth, LogoutOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Grid2,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useAuthStore } from "../../hooks/useAuthStore";
import { onLogoutCalendar } from "../../store";

export const NavBar = () => {
  const { user, startOnLogout } = useAuthStore();
  const onLogout = () => {
    startOnLogout();
    onLogoutCalendar();
  };
  return (
    <AppBar
      position="relative"
      sx={{
        height: "50px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#EEEEF0",
        color: "#000",
      }}
    >
      <Toolbar>
        {/* <IconButton
          edge="start"
          color="inherit"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton> */}

        <Grid2
          container
          justifyContent="space-between"
          width={"100%"}
          alignItems="center"
        >
          <Grid2 container alignItems="center">
            <img src="/images/logo.svg" style={{ width: "30px" }} />
            <Typography
              variant="h6"
              sx={{
                ml: 1,
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              }}
            >
              {user.name}
            </Typography>
          </Grid2>
          <IconButton color="error" onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};
