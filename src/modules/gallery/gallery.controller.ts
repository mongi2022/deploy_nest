import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";
import { GalleryDTO } from "./dto/gallery.dto";
import { GalleryService } from "./gallery.service";

@Controller('gallery')
export class GalleryController{
  constructor(private readonly galleryService:GalleryService){}

@Get()
  getAllGallery(){
    return this.galleryService.getAllGallery()
  }

  @Get(':id')
  getGalleryById(@Param('id')id:number){
    return this.galleryService.getGalleryById(id)
  }



  @Post('property/:id')
  createFeatures(@Param('id') id:number, @Body()galleryDTO:GalleryDTO){
    return this.galleryService.createGallery(id,galleryDTO)
  }


  @Put(':id')
  updateGallery(@Param('id')id:number,@Body()galleryDTO:GalleryDTO){
    return this.galleryService.updateGallery(id,galleryDTO)
  }

  @Delete(':id')
    deleteGallery(@Param('id')id:number){
      return this.galleryService.deleteGallery(id)
    
  }
}