// battle.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from 'src/pokemon/pokemon.entity';
import { Battle } from './battle.entity';
import { BattleService } from './battle.service';
import { BattleController } from './battle.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, Battle])],
  providers: [BattleService],
  controllers: [BattleController],
})
export class BattleModule {}
