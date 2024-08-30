import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonService } from './pokemons.service';
import { PokemonsController } from './pokemons.controller';
import { Pokemon } from './pokemon.entity';

@Module({
  controllers: [PokemonsController],
  providers: [PokemonService],
  imports: [TypeOrmModule.forFeature([Pokemon])],
})
export class PokemonsModule {}
