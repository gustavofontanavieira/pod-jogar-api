import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PodcastDto } from '../dto/podcast.dto';

@Injectable()
export class PodcastService {
  constructor(private prisma: PrismaService) {}

  async findUser(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(podcastDto: PodcastDto, userId: string) {
    try {
      const userExist = await this.findUser(userId);
      const categorie = await this.prisma.categories.findFirst({
        where: {
          name: podcastDto.categoriesId,
        },
      });

      if (
        (userExist !== undefined && userExist) ||
        (userExist !== null && userExist)
      ) {
        if (categorie) {
          podcastDto.userAuthorId = userExist.id;
          podcastDto.categoriesId = categorie.id;

          return await this.prisma.podcasts.create({ data: podcastDto });
        } else {
          return 'Esta categoria não existe';
        }
      } else {
        return 'Falha ao enviar podcast';
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAllPodcastsFromUser(userId: string) {
    try {
      const userExist = await this.findUser(userId);

      if (
        (userExist !== undefined && userExist) ||
        (userExist !== null && userExist)
      ) {
        return await this.prisma.podcasts.findMany({
          where: {
            userAuthorId: userId,
          },
        });
      } else {
        return 'Erro ao listar podcasts';
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAll(id: string) {
    try {
      return await this.prisma.podcasts.findMany({
        where: {
          NOT: {
            userAuthorId: id,
          },
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async delete(podcastId: string) {
    try {
      const podcastExist = await this.prisma.podcasts.findUnique({
        where: {
          id: podcastId,
        },
      });

      if (podcastExist) {
        const deletedPodcast = await this.prisma.podcasts.delete({
          where: {
            id: podcastId,
          },
        });
        if (deletedPodcast) {
          return 'Podcast excluído com sucesso';
        } else {
          return 'Erro ao excluir Podcast';
        }
      } else {
        return 'Podcast já excuído';
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(newPodcast: PodcastDto, podcastId: string) {
    try {
      const podcastExist = await this.prisma.podcasts.findUnique({
        where: {
          id: podcastId,
        },
      });

      if (podcastExist) {
        return await this.prisma.podcasts.update({
          data: newPodcast,
          where: {
            id: podcastId,
          },
        });
      } else {
        return 'O podcast não existe';
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
