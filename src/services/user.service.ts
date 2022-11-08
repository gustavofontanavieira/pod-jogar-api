import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { LoginDto } from 'src/dto/login.dto';
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

  async login(loginDto: LoginDto) {
    try {
      const emailFinded = await this.prisma.user.findFirst({
        where: {
          email: loginDto.email,
        },
      });

      if (emailFinded) {
        if (emailFinded.password === loginDto.password) {
          return true;
        } else {
          return 'Senha errada';
        }
      } else {
        return 'E-mail não encontrado';
      }
    } catch (error) {
      return error.message;
    }
  }

  async favoritePodcast(userId: string, podcastId: string) {
    try {
      await this.prisma.favoritesPodcasts.create({
        data: {
          podcastsId: podcastId,
          userId: userId,
        },
      });

      return 'Favoritado';
    } catch (error) {
      return error.message;
    }
  }

  async disfavorPodcast(id: string, userId: string) {
    try {
      const userExist = this.prisma.user.findFirst({
        where: {
          id: userId,
        },
      });

      if (userExist) {
        await this.prisma.favoritesPodcasts.delete({
          where: {
            id: id,
          },
        });
        return 'Removido dos favoritos';
      }
      return 'Erro eo remover dos favoritos';
    } catch (error) {
      return error.message;
    }
  }
}
