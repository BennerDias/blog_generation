import { TemaController } from './controllers/tema.controller';
import { TemaService } from './services/tema.service';
import { Tema } from './entities/tema.etity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  providers: [TemaService],
  controllers: [TemaController],
  exports: [TemaService],
})
export class TemaModule {}
