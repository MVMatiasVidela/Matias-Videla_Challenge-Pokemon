// pokemon.module.ts
import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonsController } from './pokemon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemon.entity';

@Module({
  controllers: [PokemonsController],
  providers: [PokemonService],
  imports: [TypeOrmModule.forFeature([Pokemon])],
})
export class PokemonsModule {}
