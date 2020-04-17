import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'nooksales',
      signOptions: { expiresIn: 3600 }
    })],
  providers: [AuthService, AuthResolver]
})
export class AuthModule { }
