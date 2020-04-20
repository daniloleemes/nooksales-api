import { Injectable } from '@nestjs/common';
import { Listing } from './interface/listing.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateListingInput } from './dto/listing.input';
import { User } from 'src/users/interface/user.interface';
import { ListingType } from './models/listing-type.model';
import { Types } from 'mongoose';

@Injectable()
export class ListingsService {
    constructor(@InjectModel('Listing') private listingModel: Model<Listing>) { }

    private aggregatePipeline: any[] = [
        {
            $lookup: {
                from: 'users',
                localField: 'userId',
                foreignField: '_id',
                as: 'user'
            }
        },
        { $unwind: '$user' },
        {
            $lookup: {
                from: 'collectibles',
                localField: 'itemsWanted',
                foreignField: '_id',
                as: 'itemsWanted'
            }
        },
    ]

    async create(input: CreateListingInput, user: User): Promise<ListingType> {
        const listing = new this.listingModel({ ...input, userId: user.id })
        return await listing.save();
    }

    async findAll(): Promise<ListingType[]> {
        const result = await this.listingModel.aggregate(this.aggregatePipeline);
        return result;
    }

    aggregateListingType(listingId: string, callback: (ListingType) => void) {
        const matchPipeline = [
            {
                $match: { _id: Types.ObjectId(listingId) }
            }
        ]
        this.listingModel.aggregate(matchPipeline.concat(this.aggregatePipeline), (err, result) => {
            if (!err) callback(result[0]);
        })
    }
}
