import { PropertyEntity } from "src/modules/property/entity/property.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity({name:'videos'})
export class VideosEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    link:string
    @ManyToOne(() => PropertyEntity, (property: PropertyEntity) => property.videos)
     property: PropertyEntity; 

}