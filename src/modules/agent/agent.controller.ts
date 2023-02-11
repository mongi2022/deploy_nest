import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AgentDTO } from "./dto/agent.dto";
import { AgentService } from "./agent.service";
import { AgentEntity } from "./entity/agent.entity";
import { ApiResponse } from "@nestjs/swagger";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";

@Controller('agent')
export class AgentController {
    constructor(private readonly agentService: AgentService,
        ) { }


@Get()
@ApiResponse({
    status: 201,
    description: 'The record list returns.',
})
@ApiResponse({ status: 404, description: 'Not Found.' })
   async getAllAgentController(){
return await this.agentService.getAllAgent()
   }

@Post()
@ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
})
@ApiResponse({ status: 403, description: 'Forbidden.' }) 
   async addAgentController(@Body() appDTO:AgentDTO):Promise<AgentEntity>{
        
        return await this.agentService.createAgent(appDTO)
    }
@Get(':id')
  async getAgentByIdController(@Param('id') id:number):Promise<AgentEntity>{
   return await this.agentService.getAgentById(id)
  }
@Put(':id')
async updateAgentController(@Param('id') id:number,@Body() agentDto:AgentDTO){
return await  this.agentService.updateAgent(id,agentDto)
}
@Delete(':id')
deleteAgent(@Param('id')id:number){
    return this.agentService.deleteAgent(id)
}
    }
