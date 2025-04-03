import { CircularProgress, Grid2 } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.300",
        padding: 8,
        color: "primary.main",
      }}
    >
      <Grid2 item>
        <CircularProgress color="error" />
      </Grid2>
    </Grid2>
  );
};
