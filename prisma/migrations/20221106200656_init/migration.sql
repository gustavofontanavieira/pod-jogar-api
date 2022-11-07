-- CreateTable
CREATE TABLE `FavoritesPodcasts` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `podcastsId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FavoritesPodcasts` ADD CONSTRAINT `FavoritesPodcasts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FavoritesPodcasts` ADD CONSTRAINT `FavoritesPodcasts_podcastsId_fkey` FOREIGN KEY (`podcastsId`) REFERENCES `Podcasts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
