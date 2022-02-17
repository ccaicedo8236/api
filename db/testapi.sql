# con este script se puede crear la base, tabla y llenarla con datos de prueba
CREATE DATABASE IF NOT EXISTS `testapi` ;

use testapi;

CREATE TABLE IF NOT EXISTS `contactos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombres` varchar(20) DEFAULT NULL,
  `apellidos` varchar(20) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `correo` varchar(60) DEFAULT NULL,
  `foto` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

insert into contactos (nombres, apellidos, telefono, correo, foto) values ('Cesar', 'Caicedo', '0987654321', 'correo@correo.com', 'https://media.gq.com.mx/photos/5f57d52d4464f9b88fb26729/3:4/w_1500,h_2000,c_limit/Keanu-Reeves.jpg');
insert into contactos (nombres, apellidos, telefono, correo, foto) values ('Fabian', 'Santana', '0912345678', 'fabian@correo.com', 'https://phantom-telva.unidadeditorial.es/99da4ecff6d748daf9a16d16aa868bef/crop/0x0/2038x2880/resize/828/f/jpg/assets/multimedia/imagenes/2021/05/06/16202888369890.jpg');
insert into contactos (nombres, apellidos, telefono, correo, foto) values ('Samuel', 'Mosquera', '0912378456', 'samuel@correo.com','https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/0d2f/313d/73c9/143a/6875/d46e/d976/bb81/2b1d/b017/b017.jpg');
insert into contactos (nombres, apellidos, telefono, correo, foto) values ('Josue', 'Yagual', '0914785236', 'josue@correo.com','https://i.pinimg.com/564x/8c/72/a9/8c72a905363a3f4612eb36861668f91c.jpg');
insert into contactos (nombres, apellidos, telefono, correo, foto) values ('Karen', 'Tello', '0925874163', 'karen@correo.com','https://static.wikia.nocookie.net/doblaje/images/7/7c/Sandra-bullock-2018.jpg/revision/latest?cb=20180306001109&path-prefix=es');
insert into contactos (nombres, apellidos, telefono, correo, foto) values ('Norma', 'Chevalier', '0942365178', 'norma@correo.com','https://hips.hearstapps.com/ellees.h-cdn.co/assets/15/37/768x999/768x999-6-11e6-a460-e1ac1866e8c1belleza-vip-amanda-seyfried-beauty-star-natural-8521970-1-esl-es-natural-jpg.jpg');
insert into contactos (nombres, apellidos, telefono, correo, foto) values ('William', 'Gomez', '0914257863', 'william@correo.com','https://upload.wikimedia.org/wikipedia/commons/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg');
insert into contactos (nombres, apellidos, telefono, correo, foto) values ('Cindy', 'Lopez', '0985471236', 'cindy@correo.com','https://www.lecturas.com/medio/2020/09/30/elsa-pataky_3d4bad36_800x800.jpg');
insert into contactos (nombres, apellidos, telefono, correo, foto) values ('Gabriela', 'Macias', '0985463127', 'gabriela@correo.com','https://media.vogue.mx/photos/5f622891bf6d0f39b17f33ac/2:3/w_2560%2Cc_limit/la-actriz-elizabeth-olsen.jpg');