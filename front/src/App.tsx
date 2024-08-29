import React, { useState } from "react";
import PokemonList from "./components/PokemonList";
import Battle from "./components/Battle";
import { IPokemon } from "./types";

const App: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon | null>(null);

  return (
    <div style={{ padding: 20 }}>
      <h1>Pokemon Battle</h1>
      <PokemonList onSelectPokemon={setSelectedPokemon} />
      {selectedPokemon && <Battle selectedPokemon={selectedPokemon} />}
    </div>
  );
};

export default App;
