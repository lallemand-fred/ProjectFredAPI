import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from '../account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configManager } from '@common';

@Module({
  imports: [AccountModule,TypeOrmModule.forRoot(configManager.getTypeOrmConfig())],
  controllers: [AppController], // Ajoutez votre nouveau contrôleur ici
  providers: [AppService],
})
export class AppModule {}