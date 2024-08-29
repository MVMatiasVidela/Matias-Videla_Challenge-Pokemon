// battle.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { BattleService } from './battle.service';
import { Battle } from './battle.entity';

@Controller('battles')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  async createBattle(
    @Body() body: { selectedPokemonId: string; opponentPokemonId: string },
  ): Promise<Battle> {
    const { selectedPokemonId, opponentPokemonId } = body;
    return this.battleService.startBattle(selectedPokemonId, opponentPokemonId);
  }

  @Get()
  async getAllBattles(): Promise<Battle[]> {
    return this.battleService.findAllBattles();
  }
}
