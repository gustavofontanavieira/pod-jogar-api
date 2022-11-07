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
        return 'E-mail já existente';
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

  async update(userDto: UserDto, userId: string) {
    try {
      const editedUser = await this.prisma.user.update({
        data: userDto,
        where: {
          id: userId,
        },
      });
      return editedUser;
    } catch (error) {
      return error.message;
    }
  }

  async getById(userId: string) {
    try {
      const userFound = await this.prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      return userFound;
    } catch (error) {
      return error.message;
    }
  }

  async getAllUsers() {
    try {
      const users = await this.prisma.user.findMany();
      return users;
    } catch (error) {
      return error.message;
    }
  }

  async deleteUser(userId: string) {
    try {
      await this.prisma.user.delete({
        where: {
          id: userId,
        },
      });
      return 'Usuário deletado com sucesso';
    } catch (error) {
      return error.message;
    }
  }
}
