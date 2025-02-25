import {
  CalendarMonth,
  LogoutOutlined,
} from "@mui/icons-material";
import { AppBar, Grid2, IconButton, Toolbar, Typography } from "@mui/material";

export const NavBar = () => {
  
  return (
    <AppBar position="relative" sx={{height:"50px",display:"flex",justifyContent:"center"}}>
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
          <IconButton color="inherit">
            <CalendarMonth sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }}
            >
              Tomas Ortega
            </Typography>
          </IconButton>
          <IconButton color="error">
            <LogoutOutlined />
          </IconButton>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};
