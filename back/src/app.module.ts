import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonsModule } from './pokemons/pokemons.module';
import { Pokemon } from './pokemons/pokemon.entity';
import { BattleModule } from './battles/battles.module';
import { Battle } from './battles/battle.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'pokemonDB.sqlite',
      entities: [Pokemon, Battle],
      synchronize: true,
    }),
    PokemonsModule,
    BattleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
