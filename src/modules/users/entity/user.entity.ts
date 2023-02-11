import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';



@Entity('users')
export class User {
@PrimaryGeneratedColumn()
  id:number
  @Column()
  name: string;
@Column({unique:true})
  username: string;
@Column()
  password: string;
@Column({nullable:true})
  refreshToken: string;
}

