import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AgentController } from "./agent.controller"
import { AgentEntity } from "./entity/agent.entity"
import { AgentService } from "./agent.service"

    @Module({
        imports: [TypeOrmModule.forFeature([AgentEntity])],
        controllers:[AgentController],
        providers:[AgentService]
        
    })
   
    export class AgentModule {
    
    }