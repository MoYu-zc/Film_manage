/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50527
 Source Host           : localhost:3306
 Source Schema         : film

 Target Server Type    : MySQL
 Target Server Version : 50527
 File Encoding         : 65001

 Date: 18/02/2021 19:09:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for film
-- ----------------------------
DROP TABLE IF EXISTS `film`;
CREATE TABLE `film`  (
  `ISDN` int(20) NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `director` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `actor` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `country` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `language` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `score` double(10, 0) NULL DEFAULT NULL,
  `photo` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `href` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ISDN`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of film
-- ----------------------------
INSERT INTO `film` VALUES (1, '神奇女侠', '派蒂·杰金斯', '盖尔·加朵', '科幻', '美国', '英语', 7, 'http://localhost:8080/video/\\sq.png', 'http://localhost:8080/video/\\导入视频.mp4', '故事背景设定在五光十色...');
INSERT INTO `film` VALUES (2, '紧急救援', '林超贤', '彭于晏', '动作', '中国大陆', '汉语普通话', 6, 'http://localhost:8080/video/\\jj.png', 'http://localhost:8080/video/\\导入视频.mp4', '倾覆沉没的钻井平台...');
INSERT INTO `film` VALUES (3, '333333333', '3', '3', '科幻', '3', '4', 3, 'http://localhost:8080/video/\\Snipaste_2020-10-11_00-02-07.png', 'http://localhost:8080/video/\\导入视频.mp4', '111');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news`  (
  `ISDN` int(11) NOT NULL,
  `title` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `author` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` date NULL DEFAULT NULL,
  `description` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ISDN`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES (1, 'test1', 'zczc', '2009-01-13', '这是一个测试');
INSERT INTO `news` VALUES (2, 'test2', 'zctoo', '2001-02-15', '这也是一个测试');

-- ----------------------------
-- Table structure for types
-- ----------------------------
DROP TABLE IF EXISTS `types`;
CREATE TABLE `types`  (
  `id` int(11) NOT NULL,
  `type` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of types
-- ----------------------------
INSERT INTO `types` VALUES (1, '科幻');
INSERT INTO `types` VALUES (2, '战争');
INSERT INTO `types` VALUES (3, '历史');
INSERT INTO `types` VALUES (4, '动作');
INSERT INTO `types` VALUES (5, '爱情');
INSERT INTO `types` VALUES (6, '喜剧');
INSERT INTO `types` VALUES (7, '冒险');
INSERT INTO `types` VALUES (8, '恐怖');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `paw` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tele` int(20) NULL DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '111111', '123456', 111, 'moyu_zc@13.com');
INSERT INTO `user` VALUES (2, '111zc', 'zc123', 1111111111, '1437101473@qq.com');

SET FOREIGN_KEY_CHECKS = 1;
