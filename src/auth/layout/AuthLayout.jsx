import { Grid2, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid2
      container
      spacing={0}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.300",
        padding: 8,
        color: "primary.main",
      }}
    >
      <Grid2
        item
        className="box-shadow"
        direction={"column"}
        p={2}
        xs={12}
        sm={7}
        md={5}
        sx={{
          backgroundColor: "#fff",
          border: "1px black solid",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Welcome!
        </Typography>
        <Typography variant="h4" sx={{ mb: 2 }}>
          {title}
        </Typography>
        {children}
      </Grid2>
    </Grid2>
  );
};
