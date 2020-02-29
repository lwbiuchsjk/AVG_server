-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: timeline_anwser
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `doc_answer`
--

DROP TABLE IF EXISTS `doc_answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doc_answer` (
  `doc_name` varchar(255) COLLATE utf8_bin NOT NULL,
  `target_people` varchar(255) COLLATE utf8_bin NOT NULL,
  `id` int(11) DEFAULT NULL,
  `timeline` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doc_answer`
--

LOCK TABLES `doc_answer` WRITE;
/*!40000 ALTER TABLE `doc_answer` DISABLE KEYS */;
INSERT INTO `doc_answer` VALUES ('调查5','欧阳志保',2,2),('调查7','欧阳志保',3,3),('调查8','欧阳志保',4,4),('调查12','青晓燕',3,3),('调查14','青晓燕',4,4),('调查24','欧阳文光',3,3),('调查36','欧阳文光',1,1);
/*!40000 ALTER TABLE `doc_answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timeline_answer`
--

DROP TABLE IF EXISTS `timeline_answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `timeline_answer` (
  `timeline_answer` int(11) NOT NULL COMMENT '答案序列',
  `action` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '采取的行动，这里记录文件路径',
  `id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline_answer`
--

LOCK TABLES `timeline_answer` WRITE;
/*!40000 ALTER TABLE `timeline_answer` DISABLE KEYS */;
INSERT INTO `timeline_answer` VALUES (1,'file\\文字AVG【demo】-真结局.pdf',NULL),(0,'file\\文字AVG【demo】-结局.pdf',NULL);
/*!40000 ALTER TABLE `timeline_answer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-29 23:13:32
