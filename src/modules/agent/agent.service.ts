import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AgentDTO } from "./dto/agent.dto";
import { AgentEntity } from "./entity/agent.entity";

@Injectable()
export class AgentService{
constructor(@InjectRepository(AgentEntity) private readonly agentRepository:Repository<AgentEntity>){}

getAllAgent():Promise<AgentEntity[]>{
    return this.agentRepository.find();
}

async createAgent(data: AgentDTO):Promise<AgentEntity>{
    const agent = await this.agentRepository.create(data );
    return this.agentRepository.save(agent);
  

}

getAgentById(id:number):Promise<AgentEntity>{
    return this.agentRepository.findOne({where:{id}});
} 

async updateAgent(id:number,agentDto:Partial<AgentDTO> ){
  await this.agentRepository.update({id},agentDto)

const agent=await this.agentRepository.findOne({where:{id}})
if(agent==null) throw new NotFoundException(`Appartement n° ${id} n'existe pas`)

return agent
}

 async deleteAgent(id:number){
const deletedApp= await this.agentRepository.findOne({where:{id}})
if(deletedApp==null) throw new NotFoundException(`Appartement n° ${id} n'existe pas`)
   this.agentRepository.delete(id)
   return deletedApp
}
}