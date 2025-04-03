import { Box, Grid2, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid2
      container
      spacing={0}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-around"}
      gap={5}
      sx={{
        minHeight: "100vh",
        width: "100vw",
        padding: {md:"0rem 4rem",}
      }}
    >
      <Grid2
        container
        className="box-shadow"
        direction={"column"}
        p={2}
        xs={12}
        sm={7}
        md={5}
        sx={{
          backgroundColor: "#fff",
          border: "1px #878787 solid",
          borderRadius: "10px",
        }}
      >
        <Grid2
          container
          alignItems={"start"}
          flexDirection={"column"}
          spacing={0}
        >
          <Typography variant="h6" sx={{ mb: 0 }}>
            Welcome !
          </Typography>
          <Typography variant="h4" sx={{ mb: 0 }}>
            {title}
          </Typography>
          <Typography variant="p" sx={{ mb: 1 }}>
            Schedule events with your team!
          </Typography>
        </Grid2>

        {children}
      </Grid2>
      <Grid2
        item
        
        
        sx={{
          display: {
            xs: "none", // En pantallas pequeñas, usa todo el ancho disponible
            sm: "none", // En pantallas medianas (sm), el ancho máximo será 400px
            md: "block", // En pantallas medianas, el ancho máximo será 600px
          },
          width: {
            
            md: "40%", // En pantallas medianas, el ancho máximo será 600px
            lg: "40%", // En pantallas grandes (lg), el ancho máximo será 800px
          }
        }}
        display="flex"
        justifyContent="center"
      >
        <img
          src="/images/calendar_auth.svg"
          alt="Calendar"
          style={{ width: "100%", objectFit:"cover",height: "auto" }}
        />
      </Grid2>
    </Grid2>
  );
};
