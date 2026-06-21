import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, ()=> {
    console.log('Levantamos el servidor en http://127.0.0.1:3000');
  });
}
bootstrap();
