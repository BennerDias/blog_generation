import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Entidade se refere à classe. Então Postagem.entity, é a classe, aqui estamos definindo a classe Postagem. Preciso entender apenas se
// virá aqui os métodos e depois serão executados pela controller.
// A entidade é quem define as tabelas no banco de dados, então a entidade Postagem, define a tabela postagem lá no bd.

@Entity({ name: 'tb_temas' })
export class Temas {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  descricao: string;
}
