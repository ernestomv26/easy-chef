-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: hackathon
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `fridge`
--

DROP TABLE IF EXISTS `fridge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fridge` (
  `ingredient` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fridge`
--

LOCK TABLES `fridge` WRITE;
/*!40000 ALTER TABLE `fridge` DISABLE KEYS */;
INSERT INTO `fridge` VALUES ('meshugna');
/*!40000 ALTER TABLE `fridge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hackathon`
--

DROP TABLE IF EXISTS `hackathon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hackathon` (
  `ID` int(11) NOT NULL,
  `recipe` varchar(255) DEFAULT NULL,
  `must` varchar(255) DEFAULT NULL,
  `opt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hackathon`
--

LOCK TABLES `hackathon` WRITE;
/*!40000 ALTER TABLE `hackathon` DISABLE KEYS */;
INSERT INTO `hackathon` VALUES (1,'fried chicken','flour.chicken.egg','cajun.buttermilk');
/*!40000 ALTER TABLE `hackathon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingredients` (
  `ingredient` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients`
--

LOCK TABLES `ingredients` WRITE;
/*!40000 ALTER TABLE `ingredients` DISABLE KEYS */;
/*!40000 ALTER TABLE `ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe`
--

DROP TABLE IF EXISTS `recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipe` (
  `id` varchar(100) DEFAULT NULL,
  `recipe` varchar(100) DEFAULT NULL,
  `need` varchar(200) DEFAULT NULL,
  `op` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe`
--

LOCK TABLES `recipe` WRITE;
/*!40000 ALTER TABLE `recipe` DISABLE KEYS */;
INSERT INTO `recipe` VALUES ('001','Kimbap','dried seaweed sheet.sushi rice.spinach.egg.carrot.ham.yellow radish pickle.sesame oil.salt','imitation crab.burdock root.cucumber.creamcheese.beef.kimchi.inarriage'),('002','Eggplant Lasagna','eggplant.garlic.onion.tomato.egg.whipping cream.salt.olive oil','basil.ricotta cheese.parmesan cheese'),('003','Pancakes','flour.milk.sugar.baking powder.baking soda.salt.egg.butter','vinegar'),('004','Strawberry Smoothie','strawberry.milk','banana.almond milk.pineapple.almond.flax seeds'),('005','Spanish Paella','shrimp.chicken thighs.onion.garlic.olive oil.salt.tomato.peas.rice.clams.scallops.bell pepper','saffron thread.calamari ring.lemon');
/*!40000 ALTER TABLE `recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipes` (
  `meal` varchar(255) DEFAULT NULL,
  `ingredient` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES ('Kimbap','dried seaweed'),('Kimbap','sushi rice'),('Kimbap','spinach'),('Kimbap','egg'),('Kimbap','carrot'),('Kimbap','ham'),('Kimbap','sesame oil'),('Kimbap','yellow radish pickle'),('Kimbap','sesame oil'),('Kimbap','salt'),('Eggplant Lasagna','eggplant'),('Eggplant Lasagna','garlic'),('Eggplant Lasagna','onion'),('Eggplant Lasagna','tomato'),('Eggplant Lasagna','egg'),('Eggplant Lasagna','whipping cream'),('Eggplant Lasagna','salt'),('Eggplant Lasagna','olive oil'),('Pancake','flour'),('Pancake','milk'),('Pancake','sugar'),('Pancake','baking powder'),('Pancake','baking soda'),('Pancake','salt'),('Pancake','egg'),('Pancake','butter'),('Strawberry Smoothie','milk'),('Strawberry Smoothie','strawberry'),('Spanish Paella','shrimp'),('Spanish Paella','chicken thighs'),('Spanish Paella','onion'),('Spanish Paella','garlic'),('Spanish Paella','olive oil'),('Spanish Paella','salt'),('Spanish Paella','tomato'),('Spanish Paella','peas'),('Spanish Paella','rice'),('Spanish Paella','clams'),('Spanish Paella','scallops'),('Spanish Paella','bell pepper');
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-14 16:53:20
