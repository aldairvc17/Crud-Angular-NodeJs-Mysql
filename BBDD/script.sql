create database db_basico;

use db_basico;

create table tb_equipo (
	id_equipo int not null auto_increment primary key,
    nombre varchar(50),
    logo varchar(200)
);
insert into tb_equipo (nombre, logo) values ('equipo02', 'https://images.pexels.com/photos/10083580/pexels-photo-10083580.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load');