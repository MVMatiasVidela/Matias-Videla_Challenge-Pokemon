import React, { useState } from "react";
import axios from "axios";
import { IPokemon, IBattleResult } from "../types";

const Battle: React.FC<{ selectedPokemon: IPokemon }> = ({
  selectedPokemon,
}) => {
  const [battleResult, setBattleResult] = useState<IBattleResult | null>(null);

  const startBattle = async () => {
    try {
      const response = await axios.post("http://localhost:3000/battles", {
        pokemon: selectedPokemon,
      });
      setBattleResult(response.data);
    } catch (error) {
      console.error("Error starting battle:", error);
    }
  };

  return (
    <div>
      <button onClick={startBattle}>Start Battle</button>
      {battleResult && (
        <div>
          <h2>Battle Result</h2>
          <p>Winner: {battleResult.winnerName}</p>
          <p>Loser: {battleResult.loserName}</p>
          <p>Battle Log: {battleResult.battleLog}</p>
        </div>
      )}
    </div>
  );
};

export default Battle;
