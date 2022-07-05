-- DropForeignKey
ALTER TABLE `fotoktp` DROP FOREIGN KEY `FotoKtp_profileId_fkey`;

-- DropForeignKey
ALTER TABLE `fotoprofile` DROP FOREIGN KEY `FotoProfile_profileId_fkey`;

-- AlterTable
ALTER TABLE `profile` ADD COLUMN `fotoKtpId` INTEGER NULL,
    ADD COLUMN `fotoProfileId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `profile` ADD CONSTRAINT `profile_fotoKtpId_fkey` FOREIGN KEY (`fotoKtpId`) REFERENCES `FotoKtp`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `profile` ADD CONSTRAINT `profile_fotoProfileId_fkey` FOREIGN KEY (`fotoProfileId`) REFERENCES `FotoProfile`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
