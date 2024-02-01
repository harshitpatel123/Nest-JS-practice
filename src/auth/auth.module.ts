import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { usermodule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.constant';

@Module({
    controllers: [AuthController],
    imports: [
        usermodule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
          }),
    ],
    providers: [AuthService]
})
export class AuthModule { }
