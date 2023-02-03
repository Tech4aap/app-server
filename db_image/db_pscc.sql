-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2023 at 02:58 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pscc`
--

-- --------------------------------------------------------

--
-- Table structure for table `apparel_informations`
--

CREATE TABLE `apparel_informations` (
  `PID` int(11) NOT NULL,
  `Per piece GSM & Spec` float NOT NULL,
  `Body/Chest Width` float NOT NULL,
  `Body/Chest  Lenght/Height` float NOT NULL,
  `Arm Width` float NOT NULL,
  `Arm Lenght/Height` float NOT NULL,
  `Hood Width` float NOT NULL,
  `Hood Lenght/Height` float NOT NULL,
  `Pocket Width` float NOT NULL,
  `Pocket Lenght/Height` float NOT NULL,
  `RIB Percentage` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `basic_informations`
--

CREATE TABLE `basic_informations` (
  `BID` int(11) NOT NULL,
  `Employee Name` text NOT NULL,
  `Client Name` text NOT NULL,
  `Product Type` int(11) NOT NULL,
  `Product Description` text NOT NULL,
  `No of Yarn` int(11) NOT NULL,
  `Stock Type` tinyint(1) NOT NULL DEFAULT 1,
  `Payment Terms` int(11) NOT NULL,
  `isCurrency` tinyint(1) NOT NULL,
  `Currency name` text NOT NULL,
  `Currency Rate` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cmt_per_packs`
--

CREATE TABLE `cmt_per_packs` (
  `CWPID` int(11) NOT NULL,
  `TagPin` float NOT NULL,
  `Twill` float NOT NULL,
  `BasicCarton` float NOT NULL,
  `FancyCarton` float NOT NULL,
  `Hanger` float NOT NULL,
  `RFIDtag` float NOT NULL,
  `PolyBag` float NOT NULL,
  `BallyBand` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cmt_per_pieces`
--

CREATE TABLE `cmt_per_pieces` (
  `COPID` int(11) NOT NULL,
  `Stitching` float NOT NULL,
  `Lable` float NOT NULL,
  `StitchingThread` float NOT NULL,
  `PolyBag` float NOT NULL,
  `Zipper` float NOT NULL,
  `Velcru` float NOT NULL,
  `Elastic` float NOT NULL,
  `TagCard` float NOT NULL,
  `GarmentWash` float NOT NULL,
  `ElasticBand` float NOT NULL,
  `BasicCarton` float NOT NULL,
  `FancyCarton` float NOT NULL,
  `Embriodery` float NOT NULL,
  `TagPin` float NOT NULL,
  `Twill` float NOT NULL,
  `BallyBand` float NOT NULL,
  `Hanger` float NOT NULL,
  `RFIDtag` float NOT NULL,
  `Inlay` float NOT NULL,
  `Bailing` float NOT NULL,
  `rebated` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fabric_informations`
--

CREATE TABLE `fabric_informations` (
  `FID` int(11) NOT NULL,
  `Weaving / Knitting Cost` float NOT NULL,
  `Fabric Dying Cost` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `finance_costs`
--

CREATE TABLE `finance_costs` (
  `FIID` int(11) NOT NULL,
  `Finance` float NOT NULL,
  `Gross Profit` float NOT NULL,
  `Debbs` float NOT NULL,
  `Insurance` float NOT NULL,
  `CFreight` float NOT NULL,
  `Freight` float NOT NULL,
  `Custom Fee` float NOT NULL,
  `Online Holding Cost` float NOT NULL,
  `Defective Allowance` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2023_01_13_070859_create_apparel_information_table', 0),
(2, '2023_01_13_070859_create_basic_information_table', 0),
(3, '2023_01_13_070859_create_cmt_per_pack_table', 0),
(4, '2023_01_13_070859_create_cmt_per_piece_table', 0),
(5, '2023_01_13_070859_create_fabric_information_table', 0),
(6, '2023_01_13_070859_create_finance_cost_table', 0),
(7, '2023_01_13_070859_create_onborading_table', 0),
(8, '2023_01_13_070859_create_operating_cost_table', 0),
(9, '2023_01_13_070859_create_piece_information_table', 0),
(10, '2023_01_13_070859_create_product_information_table', 0),
(11, '2023_01_13_070859_create_product_name_table', 0),
(12, '2023_01_13_070859_create_product_type_table', 0),
(13, '2023_01_13_070859_create_production_wastages_table', 0),
(14, '2023_01_13_070859_create_report_table', 0),
(15, '2023_01_13_075035_create_apparel_information_table', 0),
(16, '2023_01_13_075035_create_basic_information_table', 0),
(17, '2023_01_13_075035_create_cmt_per_pack_table', 0),
(18, '2023_01_13_075035_create_cmt_per_piece_table', 0),
(19, '2023_01_13_075035_create_fabric_information_table', 0),
(20, '2023_01_13_075035_create_finance_cost_table', 0),
(21, '2023_01_13_075035_create_onborading_table', 0),
(22, '2023_01_13_075035_create_operating_cost_table', 0),
(23, '2023_01_13_075035_create_piece_information_table', 0),
(24, '2023_01_13_075035_create_product_information_table', 0),
(25, '2023_01_13_075035_create_product_name_table', 0),
(26, '2023_01_13_075035_create_product_type_table', 0),
(27, '2023_01_13_075035_create_production_wastages_table', 0),
(28, '2023_01_13_075035_create_report_table', 0),
(29, '2023_01_13_080924_create_apparel_information_table', 0),
(30, '2023_01_13_080924_create_basic_information_table', 0),
(31, '2023_01_13_080924_create_cmt_per_pack_table', 0),
(32, '2023_01_13_080924_create_cmt_per_piece_table', 0),
(33, '2023_01_13_080924_create_fabric_information_table', 0),
(34, '2023_01_13_080924_create_finance_cost_table', 0),
(35, '2023_01_13_080924_create_onborading_table', 0),
(36, '2023_01_13_080924_create_operating_cost_table', 0),
(37, '2023_01_13_080924_create_piece_information_table', 0),
(38, '2023_01_13_080924_create_production_wastages_table', 0),
(39, '2023_01_13_080924_create_product_information_table', 0),
(40, '2023_01_13_080924_create_product_name_table', 0),
(41, '2023_01_13_080924_create_product_type_table', 0),
(42, '2023_01_13_080924_create_reports_table', 0);

-- --------------------------------------------------------

--
-- Table structure for table `onborading`
--

CREATE TABLE `onborading` (
  `SCID` int(11) NOT NULL,
  `Text` text NOT NULL,
  `imageURL` text NOT NULL,
  `Status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `operating_costs`
--

CREATE TABLE `operating_costs` (
  `OID` int(11) NOT NULL,
  `ExportTax` float NOT NULL,
  `Sample` float NOT NULL,
  `Testing` float NOT NULL,
  `Inspection` float NOT NULL,
  `Factory` float NOT NULL,
  `Domestic` float NOT NULL,
  `SalesCommission` float NOT NULL,
  `Exhibition` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `piece_information`
--

CREATE TABLE `piece_information` (
  `PID` int(11) NOT NULL,
  `Per piece GSM & Spec` float NOT NULL,
  `Width` float NOT NULL,
  `Lenght/Height` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `production_wastages`
--

CREATE TABLE `production_wastages` (
  `WID` int(11) NOT NULL,
  `Dying Process` float NOT NULL,
  `Cutting / Stitching / B%` float NOT NULL,
  `Weaving / Knitting Yarn` float NOT NULL,
  `Shairing / Rising` float NOT NULL,
  `Yarn Dying` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product_informations`
--

CREATE TABLE `product_informations` (
  `Yarn ID` int(11) NOT NULL,
  `PTID` int(11) NOT NULL,
  `Rate_LBS` float NOT NULL,
  `Percentage` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product_names`
--

CREATE TABLE `product_names` (
  `PNID` int(11) NOT NULL,
  `NAME` text NOT NULL,
  `STATUS` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_names`
--

INSERT INTO `product_names` (`PNID`, `NAME`, `STATUS`) VALUES
(1, '10/S Organic R/S', 1),
(2, '10/S Cotton R/S', 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_types`
--

CREATE TABLE `product_types` (
  `PTID` int(11) NOT NULL,
  `NAME` text NOT NULL,
  `STATUS` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `RDID` int(11) NOT NULL,
  `Name` text NOT NULL,
  `BID` float NOT NULL,
  `YID` float NOT NULL,
  `PID` float NOT NULL,
  `FID` float NOT NULL,
  `WID` float NOT NULL,
  `COPID` float NOT NULL,
  `CWPID` float NOT NULL,
  `OID` float NOT NULL,
  `FIID` float NOT NULL,
  `Status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apparel_informations`
--
ALTER TABLE `apparel_informations`
  ADD PRIMARY KEY (`PID`);

--
-- Indexes for table `basic_informations`
--
ALTER TABLE `basic_informations`
  ADD PRIMARY KEY (`BID`);

--
-- Indexes for table `cmt_per_packs`
--
ALTER TABLE `cmt_per_packs`
  ADD PRIMARY KEY (`CWPID`);

--
-- Indexes for table `cmt_per_pieces`
--
ALTER TABLE `cmt_per_pieces`
  ADD PRIMARY KEY (`COPID`);

--
-- Indexes for table `fabric_informations`
--
ALTER TABLE `fabric_informations`
  ADD PRIMARY KEY (`FID`);

--
-- Indexes for table `finance_costs`
--
ALTER TABLE `finance_costs`
  ADD PRIMARY KEY (`FIID`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `onborading`
--
ALTER TABLE `onborading`
  ADD PRIMARY KEY (`SCID`);

--
-- Indexes for table `operating_costs`
--
ALTER TABLE `operating_costs`
  ADD PRIMARY KEY (`OID`);

--
-- Indexes for table `piece_information`
--
ALTER TABLE `piece_information`
  ADD PRIMARY KEY (`PID`);

--
-- Indexes for table `production_wastages`
--
ALTER TABLE `production_wastages`
  ADD PRIMARY KEY (`WID`);

--
-- Indexes for table `product_informations`
--
ALTER TABLE `product_informations`
  ADD PRIMARY KEY (`Yarn ID`);

--
-- Indexes for table `product_names`
--
ALTER TABLE `product_names`
  ADD PRIMARY KEY (`PNID`);

--
-- Indexes for table `product_types`
--
ALTER TABLE `product_types`
  ADD PRIMARY KEY (`PTID`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`RDID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `apparel_informations`
--
ALTER TABLE `apparel_informations`
  MODIFY `PID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `basic_informations`
--
ALTER TABLE `basic_informations`
  MODIFY `BID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cmt_per_packs`
--
ALTER TABLE `cmt_per_packs`
  MODIFY `CWPID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cmt_per_pieces`
--
ALTER TABLE `cmt_per_pieces`
  MODIFY `COPID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fabric_informations`
--
ALTER TABLE `fabric_informations`
  MODIFY `FID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `finance_costs`
--
ALTER TABLE `finance_costs`
  MODIFY `FIID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `onborading`
--
ALTER TABLE `onborading`
  MODIFY `SCID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `operating_costs`
--
ALTER TABLE `operating_costs`
  MODIFY `OID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `piece_information`
--
ALTER TABLE `piece_information`
  MODIFY `PID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `production_wastages`
--
ALTER TABLE `production_wastages`
  MODIFY `WID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_informations`
--
ALTER TABLE `product_informations`
  MODIFY `Yarn ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_names`
--
ALTER TABLE `product_names`
  MODIFY `PNID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product_types`
--
ALTER TABLE `product_types`
  MODIFY `PTID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `RDID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
