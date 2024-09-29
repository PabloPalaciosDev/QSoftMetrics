/*
  Warnings:

  - You are about to drop the column `contrase??a` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `categorias_a_evaluar` to the `encuesta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contraseña` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `encuesta` ADD COLUMN `categorias_a_evaluar` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `contrase??a`,
    ADD COLUMN `contraseña` VARCHAR(200) NOT NULL;
