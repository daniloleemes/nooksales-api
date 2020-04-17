import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { AuthPayload } from './dto/auth.payload';
import { RegisterInput } from './dto/auth.input';

@Resolver('Auth')
export class AuthResolver {
    constructor(private readonly authService: AuthService, private readonly usersService: UsersService) { }

    @Mutation(() => AuthPayload)
    async login(@Args('password') password: string, @Args('username') username: string): Promise<AuthPayload> {
        const user = await this.authService.validateUser(username, password);
        const { accessToken } = await this.authService.login(user);
        return { user, accessToken };
    }

    @Mutation(() => AuthPayload)
    async register(@Args('input') input: RegisterInput): Promise<AuthPayload> {
        const user = await this.usersService.create(input);
        const { accessToken } = await this.authService.login(user);
        return { user, accessToken };
    }
}
