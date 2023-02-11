import { AgentEntity } from "src/modules/agent/entity/agent.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'social'})
export class SocialEntity{
    @PrimaryGeneratedColumn()
id:number

@Column()
twitter: string
@Column()
linkedin:string
@Column()
instagram:string
@Column()
website:string

@OneToOne(() => AgentEntity, agent => agent.social)
@JoinColumn({name:'agentId'})
agent: AgentEntity; 
}

