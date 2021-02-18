-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-02-18 15:52:08
-- 伺服器版本： 10.4.13-MariaDB
-- PHP 版本： 7.3.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `eshop`
--

-- --------------------------------------------------------

--
-- 資料表結構 `customer`
--

CREATE TABLE `customer` (
  `id` varchar(50) NOT NULL,
  `uid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` int(10) NOT NULL,
  `email` varchar(200) NOT NULL,
  `product` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`product`)),
  `createtime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `customer`
--

INSERT INTO `customer` (`id`, `uid`, `name`, `address`, `phone`, `email`, `product`, `createtime`) VALUES
('c2c41a12-b679-44a0-9090-820c6c7bc708', 'e6d426a7-2019-44fa-b016-4dd805b068b2', '陳佳瑋', '無敵街風神路99號', 908845121, 'tom29388858@yahoo.com.tw', '{\"cart\":[{\"item\":\"潮流刷白牛仔外套\",\"price\":1850,\"image\":\"http://localhost:3000/113.jpg\",\"amount\":1,\"id\":2,\"size\":\"S\"}],\"total\":1850}', '2021-02-17 15:46:48'),
('cdaf90a5-b659-4966-915d-cac38f7d505f', 'e6d426a7-2019-44fa-b016-4dd805b068b2', '陳佳瑋', '無敵街風神路99號', 908845121, 'tom29388858@yahoo.com.tw', '{\"cart\":[{\"item\":\"潮流刷白牛仔外套\",\"price\":1850,\"image\":\"http://localhost:3000/113.jpg\",\"amount\":1,\"id\":2,\"size\":\"M\"}],\"total\":1850}', '2021-02-17 23:17:50'),
('e26bf15a-c4d5-4be5-b2c0-9e2020547140', 'e6d426a7-2019-44fa-b016-4dd805b068b2', '陳佳瑋', '無敵街風神路99號', 908845121, 'tom29388858@yahoo.com.tw', '{\"cart\":[{\"item\":\"刷破牛仔外套\",\"price\":1680,\"image\":\"http://localhost:3000/p114.jpg\",\"amount\":2,\"id\":15,\"size\":\"M\"}],\"total\":3360}', '2021-02-17 15:40:57'),
('ef2b8dc0-63c5-43b6-abe1-764ecdad69f4', 'e6d426a7-2019-44fa-b016-4dd805b068b2', '陳佳瑋', '無敵街風神路99號', 908845121, 'tom29388858@yahoo.com.tw', '{\"cart\":[{\"item\":\"經典抓破牛仔外套\",\"price\":650,\"image\":\"http://localhost:3000/112.jpg\",\"amount\":1,\"id\":3,\"size\":\"S\"}],\"total\":650}', '2021-02-17 15:45:18');

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(30) COLLATE utf8_bin NOT NULL,
  `descript` varchar(500) COLLATE utf8_bin NOT NULL,
  `price` int(100) NOT NULL,
  `image` varchar(500) COLLATE utf8_bin NOT NULL,
  `category` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`id`, `title`, `descript`, `price`, `image`, `category`) VALUES
(1, '街頭潮流牛仔外套', '  我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。從這個角度來看，牛仔外套改變了我的命運。我想，把牛仔外套的意義想清楚，對各位來說並不是一件壞事。', 1850, 'http://localhost:3000/111.jpg', 1),
(2, '潮流刷白牛仔外套', '     我們普遍認為，若能理解透徹核心原理，對其就有了一定的了解程度。這種事實對本人來說意義重大，相信對這個世界也是有一定意義的。米南德在不經意間這樣說過，俗知憂能老，為視鏡中絲。這句話幾乎解讀出了問題的根本。這樣看來，需要考慮周詳牛仔外套的影響及因應對策。', 1850, 'http://localhost:3000/113.jpg', 1),
(3, '經典抓破牛仔外套', '   我們要學會站在別人的角度思考。我以為我了解牛仔外套，但我真的了解牛仔外套嗎？仔細想想，我對牛仔外套的理解只是皮毛而已。', 650, 'http://localhost:3000/112.jpg', 1),
(4, '男裝潮流襯衫', '如果此時我們選擇忽略襯衫，那後果可想而知。探討襯衫時，如果發現非常複雜，那麼想必不簡單。帶著這些問題，我們一起來審視襯衫。', 750, 'http://localhost:3000/p41.jpg', 2),
(6, '深藍型男衫', '  世界需要改革，需要對襯衫有新的認知。周恩來曾經提到過，每一個人要有做一代豪傑的雄心壯志！應當做個開創一代的人。請諸位將這段話在心中默念三遍。', 860, 'http://localhost:3000/p40.jpg', 2),
(8, '男裝格紋襯衫', '   培根曾經說過，一個人越啜飲世故的烈酒，就越沉醉於世故之中。這句話幾乎解讀出了問題的根本。伊森伯格曾說過一句意義深遠的話，人生的小小不幸，可以幫助我們度過重大的不幸。這讓我的思緒清晰了。襯衫的發生，到底需要如何實現，不襯衫的發生，又會如何產生。', 699, 'http://localhost:3000/114.jpg', 2),
(9, '百搭黑色上衣', '一般來說，當你搞懂後就會明白了。這種事實對本人來說意義重大，相信對這個世界也是有一定意義的。儘管如此，我們仍然需要對百搭黑色上衣保持懷疑的態度。', 399, 'http://localhost:3000/p42.jpg', 2),
(11, '街頭潮流防風外套', '我以為我了解外套，但我真的了解外套嗎？仔細想想，我對外套的理解只是皮毛而已。一般來講，我們都必須務必慎重的考慮考慮。', 1500, 'http://localhost:3000/p14.jpg', 1),
(12, '百搭黑色棉質外套', '我以為我了解外套，但我真的了解外套嗎？仔細想想，我對外套的理解只是皮毛而已。一般來講，我們都必須務必慎重的考慮考慮。', 1600, 'http://localhost:3000/p16.jpg', 1),
(13, '潮流文字上衣', '要想清楚，上衣，到底是一種怎麼樣的存在。馮夢龍曾講過，不可以一時之譽，斷其為君子，不呆以一時之謗，斷其為小人。這句話讓我們得到了一個全新的觀點去思考這個問題。', 300, 'http://localhost:3000/p15.jpg', 2),
(15, '刷破牛仔外套', ' 牛仔外套對我來說有著舉足輕重的地位，必須要嚴肅認真的看待。巴斯德說過一句經典的名言，機遇只偏愛那些有準備的頭腦的人。這段話非常有意思。', 1680, 'http://localhost:3000/p114.jpg', 1),
(17, '卡奇百搭休閒褲', '  世界需要改革，需要對卡其褲有新的認知。卡其褲絕對是史無前例的。一般來講，我們都必須務必慎重的考慮考慮。每個人都不得不面對這些問題。在面對這種問題時，務必詳細考慮卡其褲的各種可能。', 720, 'http://localhost:3000/p113.jpg', 3),
(18, '刷破拼貼牛仔褲', '每個人都不得不面對這些問題。在面對這種問題時，務必詳細考慮刷破拼貼牛仔褲的各種可能。 如果此時我們選擇忽略刷破拼貼牛仔褲，那後果可想而知。', 1180, 'http://localhost:3000/p100.jpg', 3),
(20, '刷破牛仔褲', '每個人都不得不面對這些問題。在面對這種問題時，務必詳細考慮牛仔褲的各種可能。 如果此時我們選擇忽略刷破拼貼牛仔褲，那後果可想而知。', 1180, 'http://localhost:3000/p111.jpg', 3),
(21, '黑色休閒長褲', '每個人都不得不面對這些問題。在面對這種問題時，務必詳細考慮黑色休閒長褲的各種可能。 如果此時我們選擇忽略黑色休閒褲，那後果可想而知。', 900, 'http://localhost:3000/p27.jpg', 3);

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `uid` varchar(100) NOT NULL,
  `name` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` int(30) NOT NULL,
  `phone` int(30) NOT NULL,
  `address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `user`
--

INSERT INTO `user` (`uid`, `name`, `email`, `password`, `phone`, `address`) VALUES
('31344b88-d655-4972-ae64-6534b54742ae', 'JQuery', 'alan2936@hotmail.com', 123456, 909123456, 'asdfasdf'),
('3652dc41-0536-4874-bfa2-c49a4667fa13', 'react前端框架', 'tom2dsfasdf9388858@yahoo.com.tw', 123456, 909123456, 'asdf'),
('61757f8c-9a88-44ed-ace7-1805b135c694', 'react前端框架', 'tom29388858@yahoo.com.twdafasdfasdf', 123456, 908845121, 'asdf'),
('631321e9-f790-4a7f-88fa-40f18e027cf3', 'react前端框架', 'tom293sadf58@yahoo.com.tw', 123456, 908845121, '1234'),
('7859a7dd-464a-440a-a278-7f5bf8a7f741', 'react前端框架', 'tom29388833333333333333358@yahoo.com.tw', 123456, 909123456, '123123'),
('7a5cd0a0-6807-41bc-ad4a-4e3045b7146f', 'react前端框架', 'tom2938884324123412345328@yahoo.com.tw', 123456, 908845121, 'fdsg'),
('90b332b7-b2f9-4145-a705-8a4fcefbee52', '陳xㄅ', 'tom30334@yahoo.com.tw', 0, 908845121, 'sadfadfasdf'),
('954d1444-2a03-4f7c-9255-d2a161c0e532', 'react前端框架', 'tom2932314321488858@yahoo.com.tw', 29388858, 908845121, 'sadfsadfsadf'),
('c3f87e2e-affb-43eb-97ff-4b89f21958c0', 'JQuery', 'alan2936@hotmail.comSADFASDF', 123456, 908845121, 'asdfasdf'),
('e3b07b64-4e48-482c-8cfd-22836e2a5f96', 'react前端框架', 'tom2938213458@yahoo.com.tw', 123456, 908845121, 'asdf'),
('e6c3e301-2b8f-44ed-9617-3290ea2205ea', 'react前端框架', 'tom293adfasdfs88858@yahoo.com.tw', 123456, 909123456, 'asdf'),
('e6d426a7-2019-44fa-b016-4dd805b068b2', '陳佳瑋', 'tom29388858@yahoo.com.tw', 123456, 908845121, '無敵街風神路99號');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
