-- Active: 1669676239616@@127.0.0.1@3306@productos
use productos;

create table articulo(
id int auto_increment not null,
nombre varchar(255),
marca varchar(255),
presentacion varchar(255),
categoria varchar(255),
precio int(20) not null,
imagen text(255),
primary key (id)
);

use productos;

select * from articulo;

alter table articulo add cantidad int(100) after precio;

