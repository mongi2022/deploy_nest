import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SocialController } from "./social.controller";
import { SocialService } from "./social.service";
import { SocialEntity } from "./entity/social.entity";
import { AgentEntity } from "../agent/entity/agent.entity";
import { AgentService } from "../agent/agent.service";

    @Module({
        imports: [TypeOrmModule.forFeature([SocialEntity,AgentEntity])],
        controllers:[SocialController],
        providers:[SocialService,AgentService]
        
    })
   
    export class SocialModule {
    
    }