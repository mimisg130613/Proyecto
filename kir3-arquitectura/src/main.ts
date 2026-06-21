import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //swg
  const config=new DocumentBuilder()
  .setTitle('Productos KIRENA')
  .setDescription('Descripción de Productos KIRENA')
  .setVersion('1.0')
  .addTag('PRODUCTOS KIRENA')
  .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  await app.listen(3000);
}
bootstrap();
