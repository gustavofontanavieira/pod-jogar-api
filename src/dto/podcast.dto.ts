import { CategoriesEnum } from 'src/enums/categories.enum';

export type PodcastDto = {
  id?: string;
  name: string;
  description: string;
  image: string;
  file: string;
  userAuthorId: string;
  categoriesId: string;
};
