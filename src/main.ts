import { NestFactory } from '@nestjs/core';
import { AppModule } from './feature/main';

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  //process.env.PORT ?? 3000 = Si la valeur process.env.PORT n’existe pas, ?? = alors prends celle-ci : 3000.
}
bootstrap().then();
