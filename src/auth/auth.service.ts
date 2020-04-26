import * as bcrypt from 'bcryptjs';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { INCORRECT_EMAIL_PASSWORD, USER_NOT_FOUND } from 'src/users/users.const';
import { JwtPayload } from './dto/jwt.payload';
import { User } from 'src/users/model/user.entity';

export interface AuthTokens {
    accessToken: string;
}

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<User> {
        const user = await this.usersService.findByUsername(username);
        if (!user) throw new UnauthorizedException(USER_NOT_FOUND);
        const isPasswordEqual = await bcrypt.compare(password, user.password);
        if (!isPasswordEqual) throw new UnauthorizedException(INCORRECT_EMAIL_PASSWORD);
        return user;
    }

    async login(user: User): Promise<AuthTokens> {
        const payload: JwtPayload = {
            username: user.username,
            sub: user.hashId
        }

        return {
            accessToken: this.jwtService.sign(payload)
        };
    }
}
