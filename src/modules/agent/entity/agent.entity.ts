import { SocialEntity } from "src/modules/social/entity/social.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'agent'})
export class AgentEntity{
    @PrimaryGeneratedColumn()
id:number
@Column()
fullName:string
@Column()

desc:string
@Column()

organization:string
@Column()

email:string
@Column()

phone:string



@Column()

ratingsCount:number
@Column()

ratingsValue:number
@Column()

image:string
@OneToOne(() => SocialEntity, social=>social.agent,{cascade:true,eager:true})
social:SocialEntity

}


