import * as bcrypt from 'bcryptjs';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { UserType } from 'src/users/models/user-type.model';
import { INCORRECT_EMAIL_PASSWORD, USER_NOT_FOUND } from 'src/users/users.const';
import { JwtPayload } from './dto/jwt.payload';

export interface AuthTokens {
    accessToken: string;
}

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<UserType> {
        const user = await this.usersService.findByUsername(username);
        if (!user) throw new UnauthorizedException(USER_NOT_FOUND);
        const isPasswordEqual = await bcrypt.compare(password, user.password);
        if (!isPasswordEqual) throw new UnauthorizedException(INCORRECT_EMAIL_PASSWORD);
        return user;
    }

    async login(user: UserType): Promise<AuthTokens> {
        const payload: JwtPayload = {
            username: user.username,
            sub: user.id
        }

        return {
            accessToken: this.jwtService.sign(payload)
        };
    }
}
