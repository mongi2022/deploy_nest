import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AgentEntity } from "../agent/entity/agent.entity";
import { SocialDTO } from "./dto/social.dto";
import { SocialEntity } from "./entity/social.entity";

@Injectable()
export class SocialService{
constructor(@InjectRepository(SocialEntity) private readonly socialRepository:Repository<SocialEntity>,
            @InjectRepository(AgentEntity) private readonly agentRepository:Repository<AgentEntity>){}


getAllSocial(){
    return this.socialRepository.find();
}

getSocialById(id:number){
  return this.socialRepository.findOne({where:{id}})
}

async createSocial(agentId:number,socialDTO:SocialDTO){
    
    const agent = await this.agentRepository.findOne({ where: { id: agentId } });
  
   const agentSaved= await this.socialRepository.create({
    ...socialDTO,
     agent,
   })
   
   await this.socialRepository.save(agentSaved)
   return agentSaved

}


async updateSocial(id:number,catDTO:Partial<SocialDTO>){
    await this.socialRepository.update(id,catDTO)
    const updatedCat=  await this.socialRepository.findOne({where:{id}})
    if(updatedCat==null) throw new NotFoundException(`Social n° ${id} n'existe pas`)

    return updatedCat
}

async deleteSocial(id:number){
    const deletedCat= await this.socialRepository.findOne({where:{id}})
    if(deletedCat==null) throw new NotFoundException(`Social n° ${id} n'existe pas`)

     this.socialRepository.delete(id)
     return deletedCat
}
}