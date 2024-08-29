// pokemon.controller.ts
import { Controller, Get } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonService) {}

  @Get()
  findAll() {
    return this.pokemonsService.findAll();
  }
}
