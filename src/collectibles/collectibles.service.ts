import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Collectible } from './interface/collectible.interface';
import { CollectibleType } from './models/collectible-type.model';

@Injectable()
export class CollectiblesService {
    constructor(@InjectModel('Collectible') private collectibleModel: Model<Collectible>) { }

    async findAll(): Promise<CollectibleType[]> {
        return await this.collectibleModel.find().exec();
    }

    async findOne(id: string): Promise<CollectibleType> {
        return await this.collectibleModel.findOne({ _id: id });
    }
}
