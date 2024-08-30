import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Typography } from "@mui/material";
import { IPokemon } from "../../types";

interface PokemonItemProps {
  pokemon: IPokemon;
  onImageClick: (pokemon: IPokemon) => void;
}

const Img = styled("img")(({ theme }) => ({
  width: "150px",
  height: "150px",
  cursor: "pointer",
  position: "relative",
  zIndex: 1,
  display: "block",
  margin: "0 auto",
  marginBottom: "-20px",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
  [theme.breakpoints.down(1250)]: {
    width: "120px",
    height: "120px",
  },
  [theme.breakpoints.down(1050)]: {
    width: "96px",
    height: "96px",
  },
}));

const TextOverlay = styled(Box)(({ theme }) => ({
  position: "relative",
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(1),
  color: "white",
  textAlign: "center",
  zIndex: 0,
}));

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon, onImageClick }) => {
  return (
    <Grid item marginTop={5} onClick={() => onImageClick(pokemon)} marginX={2}>
      <Box position="relative" display="block" textAlign="center">
        <Img src={pokemon.imageUrl} alt={pokemon.name} />
        <TextOverlay>
          <Typography
            className="fontemon-text"
            align="center"
            variant="h4"
            fontWeight="bold"
            sx={{
              fontSize: "2rem",
              fontFamily: "Fontemon, sans-serif", 
              "@media (max-width: 850px)": {
                fontSize: "1.44rem",
              },
              "@media (max-width: 520px)": {
                fontSize: "1rem",
              },
            }}
          >
            {pokemon.name}
          </Typography>
        </TextOverlay>
      </Box>
    </Grid>
  );
};

export default PokemonItem;
