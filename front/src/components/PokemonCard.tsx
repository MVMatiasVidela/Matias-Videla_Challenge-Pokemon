import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IPokemon } from "../types";

const PokemonCard: React.FC<{ pokemon: IPokemon }> = ({ pokemon }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={pokemon.imageUrl}
        alt={pokemon.name}
      />
      <CardContent>
        <Typography variant="h5">{pokemon.name}</Typography>
        <Typography>Attack: {pokemon.attack}</Typography>
        <Typography>Defense: {pokemon.defense}</Typography>
        <Typography>HP: {pokemon.hp}</Typography>
        <Typography>Speed: {pokemon.speed}</Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
