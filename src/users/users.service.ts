import { Injectable } from '@nestjs/common';
import { RegisterInput } from 'src/auth/dto/auth.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>
    ) { }

    async findByUsername(username: string): Promise<User> {
        return await this.usersRepository.findOne({ username });
    }

    async create(input: RegisterInput): Promise<User> {
        const user = this.usersRepository.create(input);
        try {
            await this.usersRepository.save(user);
        } catch (error) {
            throw error;
        }

        return user;
    }
}
