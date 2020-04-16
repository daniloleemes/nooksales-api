import { Module } from '@nestjs/common';
import { CollectiblesService } from './collectibles.service';
import { CollectiblesResolver } from './collectibles.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectibleSchema } from './collectible.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Collectible', schema: CollectibleSchema }
  ])],
  providers: [CollectiblesService, CollectiblesResolver]
})
export class CollectiblesModule { }
