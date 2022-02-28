import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto';

// import users from './user.json'
const users = require('./user.json')

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}
    signinLocal(dto: AuthDto) {
    // retrieve user
        const user = users.find(_user => _user.email === dto.email);
        if (!user) throw new UnauthorizedException('User does not exist');
        if (user.password !== dto.password)
            throw new UnauthorizedException('User does not exist') 

        return this.signUser(user.id, user.email, 'user'); 
    }

    signUser(userId: number, email: string, type: string) {
        let access_token = this.jwtService.sign({
            sub: userId,
            email,
            type : type,
        })
        return {access_token, refresh_token: ""}
    }
}
