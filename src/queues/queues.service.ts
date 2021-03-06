import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Queue } from './interface/queue.interface';
import { CreateQueueInput } from './dto/queue.input';
import { User } from 'src/users/interface/user.interface';
import { QueueType } from './models/queue-type.model';
import { Types } from 'mongoose';

@Injectable()
export class QueuesService {
    constructor(@InjectModel('Queue') private queueModel: Model<Queue>) { }

    private aggregatePipeline: any[] = [
        {
            $lookup: {
                from: 'users',
                localField: 'visitors',
                foreignField: '_id',
                as: 'visitors'
            }
        },
        {
            $lookup: {
                from: 'users',
                localField: 'line',
                foreignField: '_id',
                as: 'line'
            }
        },
        {
            $lookup: {
                from: 'users',
                localField: 'userId',
                foreignField: '_id',
                as: 'user'
            }
        },
        { $unwind: { path: '$user' } }
    ]

    async create(input: CreateQueueInput, user: User): Promise<QueueType> {
        const queue = new this.queueModel({ ...input, userId: user.id });
        return await queue.save();
    }

    async findAll(): Promise<QueueType[]> {
        return await this.queueModel.find()
            .populate('owner')
            .populate('visitors')
            .populate('line').exec();
    }

    async findOne(id: string): Promise<QueueType> {
        return await this.queueModel.findOne({ _id: Types.ObjectId(id) })
        .populate('owner')
        .populate('visitors')
        .populate('line').exec();
    }
}
