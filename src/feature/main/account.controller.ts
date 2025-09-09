import { Controller, Get, Post } from '@nestjs/common';

@Controller('account')
export class AccountController {

  @Get('list')
  public async list(): Promise<string> {
    // Simulation d'une opération asynchrone (base de données, API...)
    await new Promise(resolve => setTimeout(resolve, 100));
    return 'Liste des comptes utilisateurs';
  }

  @Post('create')
  public async create(): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return 'Créer un nouveau compte';
  }

  @Get('profile')
  public async profile(): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return 'Profil utilisateur';
  }
}