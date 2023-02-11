import { Exclude } from "class-transformer";
import { PropertyEntity } from "src/modules/property/entity/property.entity"
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { FeatureEnum } from "../enum/feature.enum";
@Entity({name:'features'})
export class FeaturesEntity{

    @PrimaryGeneratedColumn()
    id:number
    
    @Column({
    
    
        type:'enum',
        enum:FeatureEnum,
        default:FeatureEnum.jardin,
    })
    desc:string
    
    @ManyToOne(type => PropertyEntity, property => property.features)
    property: PropertyEntity;

  

}