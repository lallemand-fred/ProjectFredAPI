import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountController } from './account.controller';

@Module({
  imports: [],
  controllers: [AppController, AccountController], // Ajoutez votre nouveau contrôleur ici
  providers: [AppService],
})
export class AppModule {}