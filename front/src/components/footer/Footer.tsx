import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      marginTop={10}
      color="white"
      padding="2em"
    >
      <Grid item>
        <Typography>Copyright © Hecho con amor y pasión por Matias Videla</Typography>
      </Grid>
    </Grid>
  );
};
export default Footer;
