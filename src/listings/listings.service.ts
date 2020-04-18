import { Injectable } from '@nestjs/common';
import { Listing } from './interface/listing.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateListingInput } from './dto/listing.input';
import { User } from 'src/users/interface/user.interface';
import { ListingType } from './models/listing-type.model';

@Injectable()
export class ListingsService {
    constructor(@InjectModel('Listing') private listingModel: Model<Listing>) { }

    async create(input: CreateListingInput, user: User): Promise<ListingType> {
        const listing = new this.listingModel({ ...input, userId: user.id })
        return await listing.save();
    }

    async findAll(): Promise<ListingType[]> {
        return await this.listingModel.find().exec();
    }
}
