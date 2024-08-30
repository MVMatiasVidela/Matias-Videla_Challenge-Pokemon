import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './pokemon.entity';
import * as data from '../helpers/preload-pokemons-data.json';

@Injectable()
export class PokemonService implements OnModuleInit {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  async onModuleInit() {
    const count = await this.pokemonRepository.count();
    if (count === 0) {
      await this.pokemonRepository.save(data.pokemon);
    }
  }

  findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }
}
