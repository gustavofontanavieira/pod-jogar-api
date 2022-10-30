import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(userDto: UserDto) {
    try {
      const userExist = await this.prisma.user.findFirst({
        where: {
          email: userDto.email,
        },
      });

      if (userExist) {
        throw new Error('E-mail já existente');
      } else {
        const userCreated = await this.prisma.user.create({
          data: userDto,
        });
        return userCreated;
      }
    } catch (error) {
      return error.message;
    }
  }
}
