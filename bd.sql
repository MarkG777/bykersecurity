create database biker_security;
USE biker_security;
CREATE TABLE Usuario (
    ->     id_us INT AUTO_INCREMENT PRIMARY KEY,
    ->     nom_us VARCHAR(100) NOT NULL,
    ->     pass_us VARCHAR(255) NOT NULL,
    ->     tipo_us ENUM('admin', 'cliente') NOT NULL
    -> );

 CREATE TABLE Traje (
    ->     id_play INT AUTO_INCREMENT PRIMARY KEY,
    ->     color_play VARCHAR(50) NOT NULL
    -> );
Query OK, 0 rows affected (0.004 sec)

CREATE TABLE Cliente (
    ->     id_clien INT AUTO_INCREMENT PRIMARY KEY,
    ->     ap_clien VARCHAR(100) NOT NULL,
    ->     am_clien VARCHAR(100),
    ->     nom_clien VARCHAR(100) NOT NULL,
    ->     tel_clien VARCHAR(15) NOT NULL,
    ->     mail_clien VARCHAR(100) NOT NULL UNIQUE,
    ->     id_play INT,  -- Relación con Traje (Playera)
    ->     id_us INT NOT NULL,  -- Relación con Usuario
    ->     FOREIGN KEY (id_us) REFERENCES Usuario(id_us) ON DELETE CASCADE,
    ->     FOREIGN KEY (id_play) REFERENCES Traje(id_play) ON DELETE SET NULL
    -> );
Query OK, 0 rows affected (0.014 sec)

CREATE TABLE Notificacion (
    ->     id_notificacion INT AUTO_INCREMENT PRIMARY KEY,
    ->     id_clien INT NOT NULL,
    ->     mensajes_no TEXT NOT NULL,
    ->     fecha_no TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ->     FOREIGN KEY (id_clien) REFERENCES Cliente(id_clien) ON DELETE CASCADE
    -> );
Query OK, 0 rows affected (0.016 sec)

CREATE TABLE Viaje (
    ->     id_viaje INT AUTO_INCREMENT PRIMARY KEY,
    ->     id_clien INT NOT NULL,
    ->     distancia_via FLOAT NOT NULL,  -- Distancia del viaje en kilómetros
    ->     vpromedio_via FLOAT NOT NULL,  -- Velocidad promedio en km/h
    ->     FOREIGN KEY (id_clien) REFERENCES Cliente(id_clien) ON DELETE CASCADE
    -> );
Query OK, 0 rows affected (0.015 sec)
CREATE TABLE Parametros (
    ->     id_par INT AUTO_INCREMENT PRIMARY KEY,
    ->     tem_min_par FLOAT NOT NULL,  -- Temperatura mínima permitida
    ->     tem_max_par FLOAT NOT NULL,  -- Temperatura máxima antes de alerta
    ->     encen_luz_par TIME NOT NULL, -- Hora de encendido de luz automática
    ->     vel_max_par FLOAT NOT NULL,  -- Velocidad máxima antes de alerta
    ->     vel_min_par FLOAT NOT NULL   -- Velocidad mínima permitida
    -> );
Query OK, 0 rows affected (0.004 sec)


INSERT INTO Usuario (nom_us, pass_us, tipo_us)
VALUES ('cliente1', 'cliente123', 'cliente');

INSERT INTO Cliente (ap_clien, am_clien, nom_clien, tel_clien, mail_clien, id_play, id_us)
VALUES ('García', 'López', 'María', '5559876543', 'maria.garcia@example.com', NULL, @id_usuario);







--Script para insertar 10 playeras con id 
INSERT INTO Traje (color_play) VALUES 
('rojo'),
('azul'),
('verde'),
('negro'),
('rojo'),
('azul'),
('verde'),
('negro'),
('rojo'),
('azul');

