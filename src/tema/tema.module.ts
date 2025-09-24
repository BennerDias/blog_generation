import { Tema } from './entities/tema.etity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  providers: [],
  controllers: [],
  exports: [],
})
export class TemaModule {}
