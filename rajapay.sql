-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 07, 2026 at 04:56 AM
-- Server version: 8.0.30
-- PHP Version: 8.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rajapay`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` varchar(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `title`, `content`, `createdAt`, `updatedAt`) VALUES
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Belajar SQL untuk Pemula', 'SQL adalah bahasa yang digunakan untuk mengelola dan memanipulasi database relasional.', '2026-03-01 13:47:04', '2026-03-01 13:47:04'),
('b2c3d4e5-f6a7-8901-bcde-f23456789012', 'Mengenal TypeScript', 'TypeScript adalah superset dari JavaScript yang menambahkan static typing.', '2026-03-01 13:47:04', '2026-03-01 13:47:04'),
('c3d4e5f6-a7b8-9012-cdef-345678901234', 'Membuat REST API dengan Node.js', 'Node.js memungkinkan kita membuat server-side application menggunakan JavaScript.', '2026-03-01 13:47:04', '2026-03-01 13:47:04');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` varchar(36) NOT NULL,
  `name` varchar(150) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
('cat-001', 'Paket Data Axis Data edit', '2026-03-01 13:53:52', '2026-03-01 15:16:28'),
('cat-002', 'Paket Data by.U', '2026-03-01 13:53:52', '2026-03-01 13:53:52'),
('cat-003', 'Paket Data IM3 Ooredoo', '2026-03-01 13:53:52', '2026-03-01 13:53:52'),
('cat-004', 'Paket Data Smartfren Data', '2026-03-01 13:53:52', '2026-03-01 13:53:52'),
('cat-005', 'Paket Data Telkomsel Data', '2026-03-01 13:53:52', '2026-03-01 13:53:52');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` varchar(36) NOT NULL,
  `category_id` varchar(36) NOT NULL,
  `kode` varchar(20) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `keterangan` text,
  `harga` decimal(15,2) NOT NULL,
  `status` enum('Lancar','Gangguan','Nonaktif') DEFAULT 'Lancar',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `kode`, `nama`, `keterangan`, `harga`, `status`, `createdAt`, `updatedAt`) VALUES
('ff96f647-468c-413e-8ca7-110824b10d61', 'cat-003', '789', 'test', 'keren', 100000.00, 'Gangguan', '2026-03-01 23:19:30', '2026-03-01 23:19:30'),
('prd-001', 'cat-001', 'AB1', 'Axis AIGO 3GB + Kuota Dikota-Mu,28hr', '-', 20535.00, 'Lancar', '2026-03-01 13:53:52', '2026-03-01 13:53:52'),
('prd-002', 'cat-001', 'AB2', 'Axis AIGO 5GB + Kuota Dikota-Mu,28hr', '-', 25500.00, 'Lancar', '2026-03-01 13:53:52', '2026-03-01 13:53:52'),
('prd-003', 'cat-001', 'AB3', 'Axis AIGO 8GB + Kuota Dikota-Mu,28hr', '-', 30500.00, 'Lancar', '2026-03-01 13:53:52', '2026-03-01 13:53:52');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
