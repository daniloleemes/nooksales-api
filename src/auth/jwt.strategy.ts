import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { JwtPayload } from "./dto/jwt.payload";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromHeader('authorization'),
            ignoreExpiration: true,
            secretOrKey: 'nooksales',
        })
    }

    async validate(payload: JwtPayload) {
        return await this.usersService.findByUsername(payload.username);
    }
}