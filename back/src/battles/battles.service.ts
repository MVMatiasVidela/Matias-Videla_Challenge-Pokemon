import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from '../pokemons/pokemon.entity';
import { Battle } from './battle.entity';

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
    @InjectRepository(Battle)
    private readonly battleRepository: Repository<Battle>,
  ) {}

  async startBattle(
    selectedPokemonId: string,
    opponentPokemonId: string,
  ): Promise<Battle> {
    const selectedPokemon = await this.pokemonRepository.findOne({
      where: { id: selectedPokemonId },
    });
    const opponentPokemon = await this.pokemonRepository.findOne({
      where: { id: opponentPokemonId },
    });

    if (!selectedPokemon || !opponentPokemon) {
      throw new NotFoundException('One or both Pokemons not found');
    }

    
    const selectedPokemonCopy = { ...selectedPokemon };
    const opponentPokemonCopy = { ...opponentPokemon };

    let attacker = selectedPokemonCopy;
    let defender = opponentPokemonCopy;

    if (
      attacker.speed < defender.speed ||
      (attacker.speed === defender.speed && attacker.attack < defender.attack)
    ) {
      attacker = opponentPokemonCopy;
      defender = selectedPokemonCopy;
    }

    let battleLog = '';

    while (attacker.hp > 0 && defender.hp > 0) {
      const damage = Math.max(attacker.attack - defender.defense, 1);
      defender.hp -= damage;
      battleLog += `${attacker.name} attacks ${defender.name} for ${damage} damage. ${defender.name} has ${defender.hp} HP left.\n`;

      
      [attacker, defender] = [defender, attacker];
    }

    const winner =
      selectedPokemonCopy.hp > 0 ? selectedPokemon : opponentPokemon;
    const loser =
      selectedPokemonCopy.hp > 0 ? opponentPokemon : selectedPokemon;

    const battle = this.battleRepository.create({
      winnerName: winner.name,
      loserName: loser.name,
      battleLog,
    });

    return this.battleRepository.save(battle);
  }

  async findAllBattles(): Promise<Battle[]> {
    return this.battleRepository.find();
  }
}
