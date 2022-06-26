/*
  Warnings:

  - You are about to drop the column `rencanakerjaId` on the `statusrenja` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `statusrenja` DROP FOREIGN KEY `StatusRenja_rencanakerjaId_fkey`;

-- AlterTable
ALTER TABLE `rencanakerja` ADD COLUMN `statusRenjaId` INTEGER NULL;

-- AlterTable
ALTER TABLE `statusrenja` DROP COLUMN `rencanakerjaId`;

-- AddForeignKey
ALTER TABLE `rencanakerja` ADD CONSTRAINT `rencanakerja_statusRenjaId_fkey` FOREIGN KEY (`statusRenjaId`) REFERENCES `StatusRenja`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
