-- CreateTable
CREATE TABLE `Podcasts` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `userAuthorId` VARCHAR(191) NOT NULL,
    

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Podcasts` ADD CONSTRAINT `Podcasts_userAuthorId_fkey` FOREIGN KEY (`userAuthorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
