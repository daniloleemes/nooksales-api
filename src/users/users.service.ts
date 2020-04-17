import * as bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';
import { UserType } from './models/user-type.model';
import { RegisterInput } from 'src/auth/dto/auth.input';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }

    async findByUsername(username: string): Promise<UserType> {
        return await this.userModel.findOne({ username });
    }

    async create(input: RegisterInput): Promise<UserType> {
        const { password } = input;
        const encrypted = await bcrypt.hash(password, 1);
        const user = new this.userModel({ ...input, password: encrypted });
        
        return await user.save();
    }
}
