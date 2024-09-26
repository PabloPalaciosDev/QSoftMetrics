-- CreateTable
CREATE TABLE `caracteristica` (
    `id_caracteristica` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`id_caracteristica`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `encuesta` (
    `id_encuesta` INTEGER NOT NULL AUTO_INCREMENT,
    `software_id` INTEGER NOT NULL,
    `usuario_id` INTEGER NOT NULL,

    INDEX `software_id`(`software_id`),
    INDEX `usuario_id`(`usuario_id`),
    PRIMARY KEY (`id_encuesta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pregunta` (
    `id_pregunta` INTEGER NOT NULL AUTO_INCREMENT,
    `pregunta` VARCHAR(500) NOT NULL,
    `subcaracteristica_id` INTEGER NOT NULL,

    INDEX `subcaracteristica_id`(`subcaracteristica_id`),
    PRIMARY KEY (`id_pregunta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `respuesta` (
    `id_respuesta` INTEGER NOT NULL AUTO_INCREMENT,
    `respuesta` INTEGER NOT NULL,
    `pregunta_id` INTEGER NOT NULL,
    `encuesta_id` INTEGER NOT NULL,
    `comentario` VARCHAR(200) NOT NULL,

    INDEX `encuesta_id`(`encuesta_id`),
    INDEX `pregunta_id`(`pregunta_id`),
    PRIMARY KEY (`id_respuesta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `software` (
    `id_software` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(200) NOT NULL,
    `version` VARCHAR(200) NOT NULL,
    `tipo_software` VARCHAR(200) NOT NULL,
    `descripcion` VARCHAR(200) NOT NULL,
    `usuario_id` INTEGER NOT NULL,

    INDEX `usuario_id`(`usuario_id`),
    PRIMARY KEY (`id_software`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subcaracteristica` (
    `id_subcaracteristica` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` INTEGER NOT NULL,
    `caracteristica_id` INTEGER NOT NULL,

    INDEX `caracteristica_id`(`caracteristica_id`),
    PRIMARY KEY (`id_subcaracteristica`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(200) NOT NULL,
    `correo` VARCHAR(200) NOT NULL,
    `contrase??a` VARCHAR(200) NOT NULL,
    `rol` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `encuesta` ADD CONSTRAINT `encuesta_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `encuesta` ADD CONSTRAINT `encuesta_ibfk_2` FOREIGN KEY (`software_id`) REFERENCES `software`(`id_software`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `pregunta` ADD CONSTRAINT `pregunta_ibfk_1` FOREIGN KEY (`subcaracteristica_id`) REFERENCES `subcaracteristica`(`id_subcaracteristica`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `respuesta` ADD CONSTRAINT `respuesta_ibfk_1` FOREIGN KEY (`encuesta_id`) REFERENCES `encuesta`(`id_encuesta`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `respuesta` ADD CONSTRAINT `respuesta_ibfk_2` FOREIGN KEY (`pregunta_id`) REFERENCES `pregunta`(`id_pregunta`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `software` ADD CONSTRAINT `software_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `subcaracteristica` ADD CONSTRAINT `subcaracteristica_ibfk_1` FOREIGN KEY (`caracteristica_id`) REFERENCES `caracteristica`(`id_caracteristica`) ON DELETE RESTRICT ON UPDATE RESTRICT;

