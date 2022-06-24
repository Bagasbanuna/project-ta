-- CreateTable
CREATE TABLE `Roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profile` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `nim` INTEGER NOT NULL,
    `namaDepan` VARCHAR(191) NULL,
    `namaBelakang` VARCHAR(191) NULL,
    `alamat` VARCHAR(191) NULL,
    `tempatLahir` VARCHAR(191) NULL,
    `tanggalLahir` VARCHAR(191) NULL,
    `jenisKelamin` VARCHAR(191) NULL,
    `nomorHp` VARCHAR(191) NULL,
    `tahunAngkatan` INTEGER NULL,
    `fotoKtp` VARCHAR(191) NULL,
    `fotoProfile` VARCHAR(191) NULL,
    `userId` INTEGER NULL,

    UNIQUE INDEX `profile_nim_key`(`nim`),
    UNIQUE INDEX `profile_userId_key`(`userId`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jabatan` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaJabatan` VARCHAR(191) NOT NULL,
    `profileId` INTEGER NULL,

    UNIQUE INDEX `jabatan_profileId_key`(`profileId`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `divisi` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaDivisi` VARCHAR(191) NOT NULL,
    `profileId` INTEGER NULL,

    UNIQUE INDEX `divisi_profileId_key`(`profileId`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jurusan` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaJurusan` VARCHAR(191) NOT NULL,
    `profileId` INTEGER NULL,

    UNIQUE INDEX `jurusan_profileId_key`(`profileId`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rencanakerja` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NULL,
    `keterangan` VARCHAR(191) NULL,
    `createAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NULL,
    `status` VARCHAR(191) NULL,
    `userId` INTEGER NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `files` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `file` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `rencanakerjaId` INTEGER NULL,
    `namaFileId` INTEGER NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `namaFile` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaFile` VARCHAR(191) NOT NULL,
    `filesId` INTEGER NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gallery` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `gambar` VARCHAR(191) NOT NULL,
    `rencanakerjaId` INTEGER NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kritiksaran` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `subjek` VARCHAR(191) NOT NULL,
    `komentar` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StatusRenja` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `rencanakerjaId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Roles` ADD CONSTRAINT `Roles_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `profile` ADD CONSTRAINT `profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`Id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jabatan` ADD CONSTRAINT `jabatan_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profile`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `divisi` ADD CONSTRAINT `divisi_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profile`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jurusan` ADD CONSTRAINT `jurusan_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `profile`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rencanakerja` ADD CONSTRAINT `rencanakerja_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`Id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `files` ADD CONSTRAINT `files_rencanakerjaId_fkey` FOREIGN KEY (`rencanakerjaId`) REFERENCES `rencanakerja`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `files` ADD CONSTRAINT `files_namaFileId_fkey` FOREIGN KEY (`namaFileId`) REFERENCES `namaFile`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gallery` ADD CONSTRAINT `gallery_rencanakerjaId_fkey` FOREIGN KEY (`rencanakerjaId`) REFERENCES `rencanakerja`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kritiksaran` ADD CONSTRAINT `kritiksaran_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`Id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StatusRenja` ADD CONSTRAINT `StatusRenja_rencanakerjaId_fkey` FOREIGN KEY (`rencanakerjaId`) REFERENCES `rencanakerja`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
