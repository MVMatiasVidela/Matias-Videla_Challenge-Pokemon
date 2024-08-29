// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonsModule } from './pokemon/pokemon.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemon/pokemon.entity';
import { BattleModule } from './battle/battle.module';
import { Battle } from './battle/battle.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'pokemon.sqlite',
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
