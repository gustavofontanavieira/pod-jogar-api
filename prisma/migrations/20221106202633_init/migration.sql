/*
  Warnings:

  - Added the required column `file` to the `Podcasts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `podcasts` ADD COLUMN `file` VARCHAR(191) NOT NULL;
