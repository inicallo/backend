-- AlterTable
ALTER TABLE `Author` ADD COLUMN `role` ENUM('Author', 'Admin') NOT NULL DEFAULT 'Author';
