/*
  Warnings:

  - Added the required column `categoriesId` to the `Podcasts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Podcasts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `podcasts` ADD COLUMN `categoriesId` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `image` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Categories` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Podcasts` ADD CONSTRAINT `Podcasts_categoriesId_fkey` FOREIGN KEY (`categoriesId`) REFERENCES `Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
