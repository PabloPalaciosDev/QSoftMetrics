/*
  Warnings:

  - Added the required column `tipo_pregunta` to the `pregunta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pregunta` ADD COLUMN `tipo_pregunta` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `subcaracteristica` MODIFY `nombre` VARCHAR(191) NOT NULL;
