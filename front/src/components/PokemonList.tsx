import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { IPokemon } from "../types";

interface PokemonListProps {
  onSelectPokemon: (pokemon: IPokemon) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ onSelectPokemon }) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get("http://localhost:3000/pokemons");
        setPokemons(response.data);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    };
    fetchPokemons();
  }, []);

  const handleSelectPokemon = (pokemon: IPokemon) => {
    setSelectedPokemon(pokemon);
    onSelectPokemon(pokemon);
  };

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            onClick={() => handleSelectPokemon(pokemon)}
            style={{ margin: 10 }}
          >
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>
      {selectedPokemon && (
        <div>
          <h2>Selected Pokemon:</h2>
          <PokemonCard pokemon={selectedPokemon} />
        </div>
      )}
    </div>
  );
};

export default PokemonList;
