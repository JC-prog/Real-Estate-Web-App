CREATE TABLE `properties` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(65,30) NOT NULL,
  `numberofBedrooms` int NOT NULL,
  `numberofBathrooms` int NOT NULL,
  `squareFootage` int NOT NULL,
  `propertyType` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `agentId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sellerId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
