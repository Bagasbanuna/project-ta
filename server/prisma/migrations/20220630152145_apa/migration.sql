/*
  Warnings:

  - You are about to drop the column `fotoKtp` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `fotoProfile` on the `profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `profile` DROP COLUMN `fotoKtp`,
    DROP COLUMN `fotoProfile`;

-- CreateTable
CREATE TABLE `FotoKtp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `profileId` INTEGER NULL,
    `galleryId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FotoProfile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `profileId` INTEGER NULL,
    `galleryId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FotoKtp` ADD CONSTRAINT `FotoKtp_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profile`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FotoKtp` ADD CONSTRAINT `FotoKtp_galleryId_fkey` FOREIGN KEY (`galleryId`) REFERENCES `gallery`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FotoProfile` ADD CONSTRAINT `FotoProfile_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profile`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FotoProfile` ADD CONSTRAINT `FotoProfile_galleryId_fkey` FOREIGN KEY (`galleryId`) REFERENCES `gallery`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
