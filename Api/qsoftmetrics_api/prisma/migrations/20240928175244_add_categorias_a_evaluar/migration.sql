/*
  Warnings:

  - You are about to drop the column `categorias_a_evaluar` on the `encuesta` table. All the data in the column will be lost.
  - Added the required column `categorias_a_evaluar` to the `software` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `encuesta` DROP COLUMN `categorias_a_evaluar`;

-- AlterTable
ALTER TABLE `software` ADD COLUMN `categorias_a_evaluar` VARCHAR(191) NOT NULL;
