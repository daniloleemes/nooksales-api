import { Injectable } from '@nestjs/common';
import { CreateQueueInput } from './dto/queue.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from './model/queue.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/model/user.entity';

@Injectable()
export class QueuesService {
    constructor(
        @InjectRepository(Queue) private queueRepository: Repository<Queue>
    ) { }

    async create(input: CreateQueueInput, user: User): Promise<Queue> {
        const { ...attributes } = input;
        const queue = this.queueRepository.create({
            ...attributes,
            owner: user
        });

        return this.queueRepository.save(queue);
    }

    async findAll(): Promise<Queue[]> {
        return this.queueRepository.find();
    }

    async findById(id: string): Promise<Queue> {
        return this.queueRepository.findOne(id);
    }
}
