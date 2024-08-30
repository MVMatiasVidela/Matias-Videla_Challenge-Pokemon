import { Grid, Typography } from "@mui/material";
import pokebola from "../../../public/pokeball.svg"
const Navbar = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      margin={1}
      color="white"
      padding="2em"
    >
      <Grid item>
        <Typography
          className="fontemon-text"
          align="center"
          variant="h4"
          fontWeight="bold"
          sx={{
              fontSize: "4rem",
              fontFamily: "Fontemon, sans-serif",
              "@media (max-width: 850px)": {
                  fontSize: "1.44rem",
                },
                "@media (max-width: 520px)": {
                    fontSize: "1rem",
                },
            }}
        >
            <img src={pokebola} alt="Battle of Pokemon" style={{ width: "5%", padding:"3px" }} />
          Battle of pokemon
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Navbar;
