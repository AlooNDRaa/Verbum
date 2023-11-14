-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: verbum
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(21) NOT NULL,
  `registertime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ejemplo','correo@example.com','contraseña','2023-11-04 17:30:12'),(2,'ejemplo2','correo@example.com','contraseña','2023-11-05 00:05:37'),(3,'Alondra','alon@gmail.com','ilovemsql','2023-11-05 00:28:52'),(4,'Alondra3','alon2@gmail.com','ilovemsqla','2023-11-05 00:31:11'),(5,'Alondra5','alon3@gmail.com','ilovemsqlda','2023-11-05 01:29:00'),(6,'alsaahira','alonngadea@gmail.com','zwrdxtfcvbuikj','2023-11-05 02:15:48'),(7,'alsaahira','alonngadea@gmail.com','zwrdxtfcvbuikj','2023-11-05 02:15:48'),(8,'alsaahira','alonngadea@gmail.com','zwrdxtfcvbuikj','2023-11-05 02:15:48'),(9,'alsaahira','alonngadea@gmail.com','zwrdxtfcvbuikj','2023-11-05 02:15:48'),(10,'PEPE','pepe@gmail.com','amolavidaXD','2023-11-05 02:18:05'),(11,'PEPE','pepe@gmail.com','amolavidaXD','2023-11-05 02:19:53'),(12,'luisXOXO','luis@gmail.com','loppop','2023-11-05 02:21:12'),(13,'Graciela','graciela@gmail.com','abuelalalal','2023-11-05 22:00:07'),(25,'manuel','manuel@gmail.com','manuelpopo','2023-11-06 03:53:19'),(26,'Lucas','lucas@gmail.com','lucas2023','2023-11-06 12:46:22'),(27,'Juliss009','juli@gmail.com','juli888','2023-11-07 15:18:14'),(28,'Julis','juli2@gmail.com','juli88','2023-11-08 20:15:52'),(29,'mechas','mechita@gmail.com','mechis777','2023-11-08 20:16:58');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-13 13:02:16
