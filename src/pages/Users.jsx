import { useState, useEffect } from 'react';
import './Users.css';
import { paymentsData } from './Payments';

export const usersData = [
  // N45 - Frontend React.js
  { id: 1,   name: 'Azizjon Norimboyev',  group: 'N45', course: 'Frontend React.js', phone: '+998 93 364 20 30', status: 'Faol' },
  { id: 2,   name: 'Jasur Toshmatov',     group: 'N45', course: 'Frontend React.js', phone: '+998 91 234 56 78', status: 'Faol' },
  { id: 3,   name: 'Shahlo Raximova',     group: 'N45', course: 'Frontend React.js', phone: '+998 90 111 22 33', status: 'Faol' },
  { id: 4,   name: 'Doniyor Xasanov',     group: 'N45', course: 'Frontend React.js', phone: '+998 93 456 78 90', status: 'Faol' },
  { id: 5,   name: 'Gulnora Mirzayeva',   group: 'N45', course: 'Frontend React.js', phone: '+998 97 567 89 01', status: 'Faol' },
  { id: 6,   name: 'Bobur Ergashev',      group: 'N45', course: 'Frontend React.js', phone: '+998 98 678 90 12', status: 'Faol' },
  { id: 7,   name: 'Nargiza Karimova',    group: 'N45', course: 'Frontend React.js', phone: '+998 90 789 01 23', status: 'Faol' },
  { id: 8,   name: 'Sherzod Abdullayev',  group: 'N45', course: 'Frontend React.js', phone: '+998 91 890 12 34', status: 'Faol' },
  // N46 - Python
  { id: 9,   name: 'Bekzod Mirzayev',     group: 'N46', course: 'Python', phone: '+998 93 222 33 44', status: 'Faol', ball: 85, xp: 850,  kumush: 4675 },
  { id: 10,  name: 'Nilufar Rahimova',    group: 'N46', course: 'Python', phone: '+998 93 345 67 89', status: 'Faol', ball: 78, xp: 780,  kumush: 4290 },
  { id: 11,  name: 'Sanjar Qodirov',      group: 'N46', course: 'Python', phone: '+998 97 333 44 55', status: 'Faol', ball: 92, xp: 920,  kumush: 5060 },
  { id: 12,  name: 'Ozoda Yusupova',      group: 'N46', course: 'Python', phone: '+998 94 444 55 66', status: 'Faol', ball: 71, xp: 710,  kumush: 3905 },
  { id: 13,  name: 'Ulugbek Hasanov',     group: 'N46', course: 'Python', phone: '+998 95 555 66 77', status: 'Faol', ball: 88, xp: 880,  kumush: 4840 },
  { id: 14,  name: 'Feruza Holiqova',     group: 'N46', course: 'Python', phone: '+998 97 666 77 88', status: 'Faol', ball: 76, xp: 760,  kumush: 4180 },
  { id: 15,  name: 'Temur Aliyev',        group: 'N46', course: 'Python', phone: '+998 98 777 88 99', status: 'Faol', ball: 83, xp: 830,  kumush: 4565 },
  { id: 16,  name: 'Maftuna Sultonova',   group: 'N46', course: 'Python', phone: '+998 90 888 99 00', status: 'Faol', ball: 69, xp: 690,  kumush: 3795 },
  // N44 - Flutter
  { id: 17,  name: 'Asilbek Ergashev',    group: 'N44', course: 'Flutter', phone: '+998 91 999 00 11', status: 'Faol' },
  { id: 18,  name: 'Zulfiya Nazarova',    group: 'N44', course: 'Flutter', phone: '+998 93 100 11 22', status: 'Faol' },
  { id: 19,  name: 'Farrux Tursunov',     group: 'N44', course: 'Flutter', phone: '+998 94 111 22 33', status: 'Faol' },
  { id: 20,  name: 'Dilnoza Xolmatova',   group: 'N44', course: 'Flutter', phone: '+998 95 222 33 44', status: 'Faol' },
  { id: 21,  name: 'Oybek Salimov',       group: 'N44', course: 'Flutter', phone: '+998 97 333 44 55', status: 'Faol' },
  { id: 22,  name: 'Sarvinoz Umarova',    group: 'N44', course: 'Flutter', phone: '+998 98 444 55 66', status: 'Faol' },
  { id: 23,  name: 'Nodir Holmatov',      group: 'N44', course: 'Flutter', phone: '+998 90 555 66 77', status: 'Faol' },
  // N43 - Java (Tugagan)
  { id: 24,  name: 'Alisher Valiyev',     group: 'N43', course: 'Java', phone: '+998 91 666 77 88', status: 'Faol' },
  { id: 25,  name: 'Kamola Usmonova',     group: 'N43', course: 'Java', phone: '+998 93 777 88 99', status: 'Faol' },
  { id: 26,  name: 'Jahongir Nishonov',   group: 'N43', course: 'Java', phone: '+998 94 888 99 00', status: 'Faol' },
  { id: 27,  name: 'Shahnoza Raximova',   group: 'N43', course: 'Java', phone: '+998 95 999 00 11', status: 'Faol' },
  { id: 28,  name: 'Husan Botirov',       group: 'N43', course: 'Java', phone: '+998 97 010 11 22', status: 'Faol' },
  { id: 29,  name: 'Sevinch Qosimova',    group: 'N43', course: 'Java', phone: '+998 98 020 22 33', status: 'Faol' },
  { id: 30,  name: 'Dilshod Mamadaliyev', group: 'N43', course: 'Java', phone: '+998 90 030 33 44', status: 'Faol' },
  // N47 - UI/UX
  { id: 31,  name: 'Fotima Zokirova',     group: 'N47', course: 'UI/UX', phone: '+998 91 040 44 55', status: 'Faol', ball: 89, xp: 890,  kumush: 4895 },
  { id: 32,  name: 'Mansur Sobirov',      group: 'N47', course: 'UI/UX', phone: '+998 93 050 55 66', status: 'Faol', ball: 76, xp: 760,  kumush: 4180 },
  { id: 33,  name: 'Dilorom Sharipova',   group: 'N47', course: 'UI/UX', phone: '+998 94 060 66 77', status: 'Faol', ball: 95, xp: 950,  kumush: 5225 },
  { id: 34,  name: 'Akbar Hamidov',       group: 'N47', course: 'UI/UX', phone: '+998 95 070 77 88', status: 'Faol', ball: 82, xp: 820,  kumush: 4510 },
  { id: 35,  name: 'Lola Ismoilova',      group: 'N47', course: 'UI/UX', phone: '+998 97 080 88 99', status: 'Faol', ball: 71, xp: 710,  kumush: 3905 },
  { id: 36,  name: 'Vohid Yunusov',       group: 'N47', course: 'UI/UX', phone: '+998 98 090 99 00', status: 'Faol', ball: 88, xp: 880,  kumush: 4840 },
  { id: 37,  name: 'Hulkar Musayeva',     group: 'N47', course: 'UI/UX', phone: '+998 90 101 00 11', status: 'Faol', ball: 66, xp: 660,  kumush: 3630 },
  { id: 38,  name: 'Javlon Tillayev',     group: 'N47', course: 'UI/UX', phone: '+998 91 112 11 22', status: 'Faol', ball: 93, xp: 930,  kumush: 5115 },
  // N48 - SMM
  { id: 39,  name: 'Muhammadali Aliyev',  group: 'N48', course: 'SMM', phone: '+998 93 123 12 23', status: 'Faol' },
  { id: 40,  name: 'Barno Tosheva',       group: 'N48', course: 'SMM', phone: '+998 94 134 23 34', status: 'Faol' },
  { id: 41,  name: 'Shohruh Olimov',      group: 'N48', course: 'SMM', phone: '+998 95 145 34 45', status: 'Faol' },
  { id: 42,  name: 'Zamira Xo\'jayeva',   group: 'N48', course: 'SMM', phone: '+998 97 156 45 56', status: 'Faol' },
  { id: 43,  name: 'Elbek Ganiyev',       group: 'N48', course: 'SMM', phone: '+998 98 167 56 67', status: 'Faol' },
  { id: 44,  name: 'Gulsanam Rashidova',  group: 'N48', course: 'SMM', phone: '+998 90 178 67 78', status: 'Faol' },
  { id: 45,  name: 'Mirzo Zokirov',       group: 'N48', course: 'SMM', phone: '+998 91 189 78 89', status: 'Faol' },
  { id: 46,  name: 'Madina Holiqova',     group: 'N48', course: 'SMM', phone: '+998 93 190 89 90', status: 'Faol' },
  // N49 - Node.js
  { id: 47,  name: 'Ulugbek Karimov',     group: 'N49', course: 'Node.js', phone: '+998 94 201 90 01', status: 'Faol' },
  { id: 48,  name: 'Shoira Yusupova',     group: 'N49', course: 'Node.js', phone: '+998 95 212 01 12', status: 'Faol' },
  { id: 49,  name: 'Bahodir To\'rayev',   group: 'N49', course: 'Node.js', phone: '+998 97 223 12 23', status: 'Faol' },
  { id: 50,  name: 'Nasiba Umarova',      group: 'N49', course: 'Node.js', phone: '+998 98 234 23 34', status: 'Faol' },
  { id: 51,  name: 'Abdulloh Mirzayev',   group: 'N49', course: 'Node.js', phone: '+998 90 245 34 45', status: 'Faol' },
  { id: 52,  name: 'Zuhra Ergasheva',     group: 'N49', course: 'Node.js', phone: '+998 91 256 45 56', status: 'Faol' },
  { id: 53,  name: 'Islom Sobirov',       group: 'N49', course: 'Node.js', phone: '+998 93 267 56 67', status: 'Faol' },
  // N42 - Grafik dizayn (Tugagan)
  { id: 54,  name: 'Yulduz Nazarova',     group: 'N42', course: 'Grafik dizayn', phone: '+998 94 278 67 78', status: 'Faol' },
  { id: 55,  name: 'Sirojiddin Xasanov',  group: 'N42', course: 'Grafik dizayn', phone: '+998 95 289 78 89', status: 'Faol' },
  { id: 56,  name: 'Manzura Holmatova',   group: 'N42', course: 'Grafik dizayn', phone: '+998 97 290 89 90', status: 'Faol' },
  { id: 57,  name: 'Tohir Hamidov',       group: 'N42', course: 'Grafik dizayn', phone: '+998 98 301 90 01', status: 'Faol' },
  { id: 58,  name: 'Bibigul Raximova',    group: 'N42', course: 'Grafik dizayn', phone: '+998 90 312 01 12', status: 'Faol' },
  { id: 59,  name: 'Saidakbar Tursunov',  group: 'N42', course: 'Grafik dizayn', phone: '+998 91 323 12 23', status: 'Faol' },
  { id: 60,  name: 'Iroda Holiqova',      group: 'N42', course: 'Grafik dizayn', phone: '+998 93 334 23 34', status: 'Faol' },
  // N50 - Data analitika
  { id: 61,  name: 'Shokir Abdullayev',   group: 'N50', course: 'Data analitika', phone: '+998 94 345 34 45', status: 'Faol' },
  { id: 62,  name: 'Gulbahor Tosheva',    group: 'N50', course: 'Data analitika', phone: '+998 95 356 45 56', status: 'Faol' },
  { id: 63,  name: 'Firdavs Ergashev',    group: 'N50', course: 'Data analitika', phone: '+998 97 367 56 67', status: 'Faol' },
  { id: 64,  name: 'Ozoda Salimova',      group: 'N50', course: 'Data analitika', phone: '+998 98 378 67 78', status: 'Faol' },
  { id: 65,  name: 'Kamol Nishonov',      group: 'N50', course: 'Data analitika', phone: '+998 90 389 78 89', status: 'Faol' },
  { id: 66,  name: 'Zulfiya Qosimova',    group: 'N50', course: 'Data analitika', phone: '+998 91 390 89 90', status: 'Faol' },
  { id: 67,  name: 'Laziz Botirov',       group: 'N50', course: 'Data analitika', phone: '+998 93 401 90 01', status: 'Faol' },
  { id: 68,  name: 'Dilorom Umarova',     group: 'N50', course: 'Data analitika', phone: '+998 94 412 01 12', status: 'Faol' },
  // N51 - Kiberxavfsizlik
  { id: 69,  name: 'Ibrohim Salimov',     group: 'N51', course: 'Kiberxavfsizlik', phone: '+998 95 423 12 23', status: 'Faol' },
  { id: 70,  name: 'Lobar Xolmatova',     group: 'N51', course: 'Kiberxavfsizlik', phone: '+998 97 434 23 34', status: 'Faol' },
  { id: 71,  name: 'Nuriddin Hasanov',    group: 'N51', course: 'Kiberxavfsizlik', phone: '+998 98 445 34 45', status: 'Faol' },
  { id: 72,  name: 'Ziyoda Mirzayeva',    group: 'N51', course: 'Kiberxavfsizlik', phone: '+998 90 456 45 56', status: 'Faol' },
  { id: 73,  name: 'Aziz Mamadaliyev',    group: 'N51', course: 'Kiberxavfsizlik', phone: '+998 91 467 56 67', status: 'Faol' },
  { id: 74,  name: 'Nafisa Rashidova',    group: 'N51', course: 'Kiberxavfsizlik', phone: '+998 93 478 67 78', status: 'Faol' },
  { id: 75,  name: 'Hamid Yunusov',       group: 'N51', course: 'Kiberxavfsizlik', phone: '+998 94 489 78 89', status: 'Faol' },
  // N53 - Videografiya
  { id: 76,  name: 'Mansur Rashidov',     group: 'N53', course: 'Videografiya', phone: '+998 95 490 89 90', status: 'Faol' },
  { id: 77,  name: 'Dilrabo Umarova',     group: 'N53', course: 'Videografiya', phone: '+998 97 501 90 01', status: 'Faol' },
  { id: 78,  name: 'Shohruh Valiyev',     group: 'N53', course: 'Videografiya', phone: '+998 98 512 01 12', status: 'Faol' },
  { id: 79,  name: 'Sitorabonu Aliyeva',  group: 'N53', course: 'Videografiya', phone: '+998 90 523 12 23', status: 'Faol' },
  { id: 80,  name: 'Elbek Tursunov',      group: 'N53', course: 'Videografiya', phone: '+998 91 534 23 34', status: 'Faol' },
  { id: 81,  name: 'Hulkar Ergasheva',    group: 'N53', course: 'Videografiya', phone: '+998 93 545 34 45', status: 'Faol' },
  { id: 82,  name: 'Javlon Qodirov',      group: 'N53', course: 'Videografiya', phone: '+998 94 556 45 56', status: 'Faol' },
  // N54 - Mobilografiya
  { id: 83,  name: 'Nodir Xasanov',       group: 'N54', course: 'Mobilografiya', phone: '+998 95 567 56 67', status: 'Faol' },
  { id: 84,  name: 'Sarvinoz Mirzayeva',  group: 'N54', course: 'Mobilografiya', phone: '+998 97 578 67 78', status: 'Faol' },
  { id: 85,  name: 'Bahodir Sobirov',     group: 'N54', course: 'Mobilografiya', phone: '+998 98 589 78 89', status: 'Faol' },
  { id: 86,  name: 'Shahnoza Holiqova',   group: 'N54', course: 'Mobilografiya', phone: '+998 90 590 89 90', status: 'Faol' },
  { id: 87,  name: 'Akbar Ismoilov',      group: 'N54', course: 'Mobilografiya', phone: '+998 91 601 90 01', status: 'Faol' },
  { id: 88,  name: 'Zamira Karimova',     group: 'N54', course: 'Mobilografiya', phone: '+998 93 612 01 12', status: 'Faol' },
  { id: 89,  name: 'Mirzo Abdullayev',    group: 'N54', course: 'Mobilografiya', phone: '+998 94 623 12 23', status: 'Faol' },
  { id: 90,  name: 'Gulsanam Tosheva',    group: 'N54', course: 'Mobilografiya', phone: '+998 95 634 23 34', status: 'Faol' },
  // N55 - Start Junior
  { id: 91,  name: 'Amir Tursunov',       group: 'N55', course: 'Start Junior', phone: '+998 97 645 34 45', status: 'Faol' },
  { id: 92,  name: 'Xurshida Nazarova',   group: 'N55', course: 'Start Junior', phone: '+998 98 656 45 56', status: 'Faol' },
  { id: 93,  name: 'Sirojiddin Aliyev',   group: 'N55', course: 'Start Junior', phone: '+998 90 667 56 67', status: 'Faol' },
  { id: 94,  name: 'Manzura Holmatova',   group: 'N55', course: 'Start Junior', phone: '+998 91 678 67 78', status: 'Faol' },
  { id: 95,  name: 'Tohir Mirzayev',      group: 'N55', course: 'Start Junior', phone: '+998 93 689 78 89', status: 'Faol' },
  { id: 96,  name: 'Bibigul Yusupova',    group: 'N55', course: 'Start Junior', phone: '+998 94 690 89 90', status: 'Faol' },
  { id: 97,  name: 'Vohid Nishonov',      group: 'N55', course: 'Start Junior', phone: '+998 95 701 90 01', status: 'Faol' },
  { id: 98,  name: 'Yulduz Ergasheva',    group: 'N55', course: 'Start Junior', phone: '+998 97 712 01 12', status: 'Faol' },
  // N41 - Grafik Dizayn (Tugagan)
  { id: 99,  name: 'Kamol Hasanov',       group: 'N41', course: 'Grafik Dizayn', phone: '+998 98 723 12 23', status: 'Faol' },
  { id: 100, name: 'Shoira Raximova',     group: 'N41', course: 'Grafik Dizayn', phone: '+998 90 734 23 34', status: 'Faol' },
  { id: 101, name: 'Oybek Salimov',       group: 'N41', course: 'Grafik Dizayn', phone: '+998 91 745 34 45', status: 'Faol' },
  { id: 102, name: 'Nasiba Qosimova',     group: 'N41', course: 'Grafik Dizayn', phone: '+998 93 756 45 56', status: 'Faol' },
  { id: 103, name: 'Laziz Mamadaliyev',   group: 'N41', course: 'Grafik Dizayn', phone: '+998 94 767 56 67', status: 'Faol' },
  { id: 104, name: 'Zuhra Botirova',      group: 'N41', course: 'Grafik Dizayn', phone: '+998 95 778 67 78', status: 'Faol' },
  { id: 105, name: 'Jahongir Sobirov',    group: 'N41', course: 'Grafik Dizayn', phone: '+998 97 789 78 89', status: 'Faol' },
  // N56 - Sun'iy intellekt
  { id: 106, name: 'Eldor Yusupov',       group: 'N56', course: "Sun'iy intellekt", phone: '+998 98 790 89 90', status: 'Faol' },
  { id: 107, name: 'Kamola Raximova',     group: 'N56', course: "Sun'iy intellekt", phone: '+998 90 801 90 01', status: 'Faol' },
  { id: 108, name: 'Farrux Ergashev',     group: 'N56', course: "Sun'iy intellekt", phone: '+998 91 812 01 12', status: 'Faol' },
  { id: 109, name: 'Dilnoza Holiqova',    group: 'N56', course: "Sun'iy intellekt", phone: '+998 93 823 12 23', status: 'Faol' },
  { id: 110, name: 'Alisher Nishonov',    group: 'N56', course: "Sun'iy intellekt", phone: '+998 94 834 23 34', status: 'Faol' },
  { id: 111, name: 'Sevinch Tursunova',   group: 'N56', course: "Sun'iy intellekt", phone: '+998 95 845 34 45', status: 'Faol' },
  { id: 112, name: 'Husan Abdullayev',    group: 'N56', course: "Sun'iy intellekt", phone: '+998 97 856 45 56', status: 'Faol' },
  { id: 113, name: 'Lola Karimova',       group: 'N56', course: "Sun'iy intellekt", phone: '+998 98 867 56 67', status: 'Faol' },
  // N57 - Frontend React.js
  { id: 114, name: 'Behruz Mirzayev',     group: 'N57', course: 'Frontend React.js', phone: '+998 90 878 67 78', status: 'Faol' },
  { id: 115, name: 'Ozoda Xoliqova',      group: 'N57', course: 'Frontend React.js', phone: '+998 91 889 78 89', status: 'Faol' },
  { id: 116, name: 'Nuriddin Aliyev',     group: 'N57', course: 'Frontend React.js', phone: '+998 93 890 89 90', status: 'Faol' },
  { id: 117, name: 'Madina Yusupova',     group: 'N57', course: 'Frontend React.js', phone: '+998 94 901 90 01', status: 'Faol' },
  { id: 118, name: 'Shokir Hasanov',      group: 'N57', course: 'Frontend React.js', phone: '+998 95 912 01 12', status: 'Faol' },
  { id: 119, name: 'Iroda Salimova',      group: 'N57', course: 'Frontend React.js', phone: '+998 97 923 12 23', status: 'Faol' },
  { id: 120, name: 'Abdulloh Sobirov',    group: 'N57', course: 'Frontend React.js', phone: '+998 98 934 23 34', status: 'Faol' },
  { id: 121, name: 'Nafisa Tosheva',      group: 'N57', course: 'Frontend React.js', phone: '+998 90 945 34 45', status: 'Faol' },
  // N58 - Python
  { id: 122, name: 'Ravshan Nazarov',     group: 'N58', course: 'Python', phone: '+998 91 956 45 56', status: 'Faol' },
  { id: 123, name: 'Nargiza Aliyeva',     group: 'N58', course: 'Python', phone: '+998 93 967 56 67', status: 'Faol' },
  { id: 124, name: 'Islom Qodirov',       group: 'N58', course: 'Python', phone: '+998 94 978 67 78', status: 'Faol' },
  { id: 125, name: 'Shahnoza Ergasheva',  group: 'N58', course: 'Python', phone: '+998 95 989 78 89', status: 'Faol' },
  { id: 126, name: 'Jahongir Umarov',     group: 'N58', course: 'Python', phone: '+998 97 990 89 90', status: 'Faol' },
  { id: 127, name: 'Gulnora Xasanova',    group: 'N58', course: 'Python', phone: '+998 98 991 90 01', status: 'Faol' },
  { id: 128, name: 'Temur Holmatov',      group: 'N58', course: 'Python', phone: '+998 90 112 21 32', status: 'Faol' },
  // N59 - Flutter
  { id: 129, name: 'Otabek Salimov',      group: 'N59', course: 'Flutter', phone: '+998 91 113 31 42', status: 'Faol' },
  { id: 130, name: 'Feruza Qodirova',     group: 'N59', course: 'Flutter', phone: '+998 93 114 41 52', status: 'Faol' },
  { id: 131, name: 'Sarvar Mirzayev',     group: 'N59', course: 'Flutter', phone: '+998 94 115 51 62', status: 'Faol' },
  { id: 132, name: 'Dilorom Karimova',    group: 'N59', course: 'Flutter', phone: '+998 95 116 61 72', status: 'Faol' },
  { id: 133, name: 'Elbek Abdullayev',    group: 'N59', course: 'Flutter', phone: '+998 97 117 71 82', status: 'Faol' },
  { id: 134, name: 'Manzura Tosheva',     group: 'N59', course: 'Flutter', phone: '+998 98 118 81 92', status: 'Faol' },
  { id: 135, name: 'Akbar Nishonov',      group: 'N59', course: 'Flutter', phone: '+998 90 119 91 02', status: 'Faol' },
  // N60 - UI/UX
  { id: 136, name: 'Sherzod Holmatov',    group: 'N60', course: 'UI/UX', phone: '+998 91 120 02 13', status: 'Faol' },
  { id: 137, name: 'Malika Ergasheva',    group: 'N60', course: 'UI/UX', phone: '+998 93 121 12 23', status: 'Faol' },
  { id: 138, name: 'Vohid Hasanov',       group: 'N60', course: 'UI/UX', phone: '+998 94 122 22 33', status: 'Faol' },
  { id: 139, name: 'Ziyoda Yusupova',     group: 'N60', course: 'UI/UX', phone: '+998 95 123 32 43', status: 'Faol' },
  { id: 140, name: 'Laziz Sobirov',       group: 'N60', course: 'UI/UX', phone: '+998 97 124 42 53', status: 'Faol' },
  { id: 141, name: 'Hulkar Raximova',     group: 'N60', course: 'UI/UX', phone: '+998 98 125 52 63', status: 'Faol' },
  { id: 142, name: 'Sirojiddin Botirov',  group: 'N60', course: 'UI/UX', phone: '+998 90 126 62 73', status: 'Faol' },
  { id: 143, name: 'Sevinch Holiqova',    group: 'N60', course: 'UI/UX', phone: '+998 91 127 72 83', status: 'Faol' },
  // N61 - Java
  { id: 144, name: 'Bobur Toshmatov',     group: 'N61', course: 'Java', phone: '+998 93 128 82 93', status: 'Faol' },
  { id: 145, name: 'Ziyoda Karimova',     group: 'N61', course: 'Java', phone: '+998 94 129 92 03', status: 'Faol' },
  { id: 146, name: 'Nuriddin Mirzayev',   group: 'N61', course: 'Java', phone: '+998 95 130 03 14', status: 'Faol' },
  { id: 147, name: 'Hulkar Ergasheva',    group: 'N61', course: 'Java', phone: '+998 97 131 13 24', status: 'Faol' },
  { id: 148, name: 'Hamid Aliyev',        group: 'N61', course: 'Java', phone: '+998 98 132 23 34', status: 'Faol' },
  { id: 149, name: 'Nafisa Nazarova',     group: 'N61', course: 'Java', phone: '+998 90 133 33 44', status: 'Faol' },
  { id: 150, name: 'Islom Tursunov',      group: 'N61', course: 'Java', phone: '+998 91 134 43 54', status: 'Faol' },
  // N62 - SMM
  { id: 151, name: 'Jasur Abdullayev',    group: 'N62', course: 'SMM', phone: '+998 93 135 53 64', status: 'Faol' },
  { id: 152, name: 'Mohira Sultonova',    group: 'N62', course: 'SMM', phone: '+998 94 136 63 74', status: 'Faol' },
  { id: 153, name: 'Sardor Qodirov',      group: 'N62', course: 'SMM', phone: '+998 95 137 73 84', status: 'Faol' },
  { id: 154, name: 'Barno Mirzayeva',     group: 'N62', course: 'SMM', phone: '+998 97 138 83 94', status: 'Faol' },
  { id: 155, name: 'Asilbek Hasanov',     group: 'N62', course: 'SMM', phone: '+998 98 139 93 04', status: 'Faol' },
  { id: 156, name: 'Gulbahor Karimova',   group: 'N62', course: 'SMM', phone: '+998 90 140 04 15', status: 'Faol' },
  { id: 157, name: 'Doniyor Umarov',      group: 'N62', course: 'SMM', phone: '+998 91 141 14 25', status: 'Faol' },
  { id: 158, name: 'Dilorom Salimova',    group: 'N62', course: 'SMM', phone: '+998 93 142 24 35', status: 'Faol' },
  // N63 - Node.js
  { id: 159, name: 'Umid Xoliqov',        group: 'N63', course: 'Node.js', phone: '+998 94 143 34 45', status: 'Faol' },
  { id: 160, name: 'Sabohat Raximova',    group: 'N63', course: 'Node.js', phone: '+998 95 144 44 55', status: 'Faol' },
  { id: 161, name: 'Temur Abdullayev',    group: 'N63', course: 'Node.js', phone: '+998 97 145 54 65', status: 'Faol' },
  { id: 162, name: 'Kamola Holmatova',    group: 'N63', course: 'Node.js', phone: '+998 98 146 64 75', status: 'Faol' },
  { id: 163, name: 'Shohruh Ergashev',    group: 'N63', course: 'Node.js', phone: '+998 90 147 74 85', status: 'Faol' },
  { id: 164, name: 'Muazzam Tursunova',   group: 'N63', course: 'Node.js', phone: '+998 91 148 84 95', status: 'Faol' },
  { id: 165, name: 'Bahodir Mirzayev',    group: 'N63', course: 'Node.js', phone: '+998 93 149 94 05', status: 'Faol' },
  // N64 - Data analitika
  { id: 166, name: 'Akbar Mirzayev',      group: 'N64', course: 'Data analitika', phone: '+998 94 150 05 16', status: 'Faol' },
  { id: 167, name: 'Dilnoza Yusupova',    group: 'N64', course: 'Data analitika', phone: '+998 95 151 15 26', status: 'Faol' },
  { id: 168, name: 'Firdavs Sobirov',     group: 'N64', course: 'Data analitika', phone: '+998 97 152 25 36', status: 'Faol' },
  { id: 169, name: 'Zulfiya Hasanova',    group: 'N64', course: 'Data analitika', phone: '+998 98 153 35 46', status: 'Faol' },
  { id: 170, name: 'Mirzo Karimov',       group: 'N64', course: 'Data analitika', phone: '+998 90 154 45 56', status: 'Faol' },
  { id: 171, name: 'Shahnoza Aliyeva',    group: 'N64', course: 'Data analitika', phone: '+998 91 155 55 66', status: 'Faol' },
  { id: 172, name: 'Vohid Ergashev',      group: 'N64', course: 'Data analitika', phone: '+998 93 156 65 76', status: 'Faol' },
  { id: 173, name: 'Iroda Nazarova',      group: 'N64', course: 'Data analitika', phone: '+998 94 157 75 86', status: 'Faol' },
  // N65 - Grafik dizayn
  { id: 174, name: 'Temur Hasanov',       group: 'N65', course: 'Grafik dizayn', phone: '+998 95 158 85 96', status: 'Faol' },
  { id: 175, name: 'Sitorabonu Aliyeva',  group: 'N65', course: 'Grafik dizayn', phone: '+998 97 159 95 06', status: 'Faol' },
  { id: 176, name: 'Jahongir Tursunov',   group: 'N65', course: 'Grafik dizayn', phone: '+998 98 160 06 17', status: 'Faol' },
  { id: 177, name: 'Manzura Qodirova',    group: 'N65', course: 'Grafik dizayn', phone: '+998 90 161 16 27', status: 'Faol' },
  { id: 178, name: 'Oybek Nishonov',      group: 'N65', course: 'Grafik dizayn', phone: '+998 91 162 26 37', status: 'Faol' },
  { id: 179, name: 'Gulnora Umarova',     group: 'N65', course: 'Grafik dizayn', phone: '+998 93 163 36 47', status: 'Faol' },
  { id: 180, name: 'Sirojiddin Holiqov',  group: 'N65', course: 'Grafik dizayn', phone: '+998 94 164 46 57', status: 'Faol' },
  // N66 - Kiberxavfsizlik
  { id: 181, name: 'Lochinbek Ergashev',  group: 'N66', course: 'Kiberxavfsizlik', phone: '+998 95 165 56 67', status: 'Faol' },
  { id: 182, name: 'Nafosa Tursunova',    group: 'N66', course: 'Kiberxavfsizlik', phone: '+998 97 166 66 77', status: 'Faol' },
  { id: 183, name: 'Akbar Sobirov',       group: 'N66', course: 'Kiberxavfsizlik', phone: '+998 98 167 76 87', status: 'Faol' },
  { id: 184, name: 'Zamira Karimova',     group: 'N66', course: 'Kiberxavfsizlik', phone: '+998 90 168 86 97', status: 'Faol' },
  { id: 185, name: 'Husan Mirzayev',      group: 'N66', course: 'Kiberxavfsizlik', phone: '+998 91 169 96 07', status: 'Faol' },
  { id: 186, name: 'Lola Abdullayeva',    group: 'N66', course: 'Kiberxavfsizlik', phone: '+998 93 170 07 18', status: 'Faol' },
  { id: 187, name: 'Nodir Aliyev',        group: 'N66', course: 'Kiberxavfsizlik', phone: '+998 94 171 17 28', status: 'Faol' },
  // N67 - Frontend React.js
  { id: 188, name: 'Sanjar Norqoziyev',   group: 'N67', course: 'Frontend React.js', phone: '+998 95 172 27 38', status: 'Faol' },
  { id: 189, name: 'Gulbahor Xasanova',   group: 'N67', course: 'Frontend React.js', phone: '+998 97 173 37 48', status: 'Faol' },
  { id: 190, name: 'Islom Hasanov',       group: 'N67', course: 'Frontend React.js', phone: '+998 98 174 47 58', status: 'Faol' },
  { id: 191, name: 'Malika Yusupova',     group: 'N67', course: 'Frontend React.js', phone: '+998 90 175 57 68', status: 'Faol' },
  { id: 192, name: 'Ravshan Tursunov',    group: 'N67', course: 'Frontend React.js', phone: '+998 91 176 67 78', status: 'Faol' },
  { id: 193, name: 'Madina Salimova',     group: 'N67', course: 'Frontend React.js', phone: '+998 93 177 77 88', status: 'Faol' },
  { id: 194, name: 'Doniyor Karimov',     group: 'N67', course: 'Frontend React.js', phone: '+998 94 178 87 98', status: 'Faol' },
  // N68 - Sun'iy intellekt
  { id: 195, name: 'Lochinbek Qodirov',   group: 'N68', course: "Sun'iy intellekt", phone: '+998 95 179 97 08', status: 'Faol' },
  { id: 196, name: 'Muazzam Holiqova',    group: 'N68', course: "Sun'iy intellekt", phone: '+998 97 180 08 19', status: 'Faol' },
  { id: 197, name: 'Farrux Abdullayev',   group: 'N68', course: "Sun'iy intellekt", phone: '+998 98 181 18 29', status: 'Faol' },
  { id: 198, name: 'Zulfiya Mirzayeva',   group: 'N68', course: "Sun'iy intellekt", phone: '+998 90 182 28 39', status: 'Faol' },
  { id: 199, name: 'Shohruh Karimov',     group: 'N68', course: "Sun'iy intellekt", phone: '+998 91 183 38 49', status: 'Faol' },
  { id: 200, name: 'Dilorom Tosheva',     group: 'N68', course: "Sun'iy intellekt", phone: '+998 93 184 48 59', status: 'Faol' },
  // N45 qo'shimcha
  { id: 211, name: 'Murod Yusupov',       group: 'N45', course: 'Frontend React.js', phone: '+998 91 211 11 11', status: 'Faol' },
  { id: 212, name: 'Sevinch Normatova',   group: 'N45', course: 'Frontend React.js', phone: '+998 93 212 22 22', status: 'Faol' },
  { id: 213, name: 'Asilbek Hamidov',     group: 'N45', course: 'Frontend React.js', phone: '+998 94 213 33 33', status: 'Faol' },
  { id: 214, name: 'Zulfiya Rashidova',   group: 'N45', course: 'Frontend React.js', phone: '+998 95 214 44 44', status: 'Faol' },
  { id: 215, name: 'Firdavs Toshev',      group: 'N45', course: 'Frontend React.js', phone: '+998 97 215 55 55', status: 'Faol' },
  { id: 216, name: 'Nilufar Zokirova',    group: 'N45', course: 'Frontend React.js', phone: '+998 98 216 66 66', status: 'Faol' },
  // N46 qo'shimcha
  { id: 217, name: 'Hamza Abdullayev',    group: 'N46', course: 'Python', phone: '+998 90 217 77 77', status: 'Faol', ball: 91 },
  { id: 218, name: 'Maftuna Nazarova',    group: 'N46', course: 'Python', phone: '+998 91 218 88 88', status: 'Faol', ball: 74 },
  { id: 219, name: 'Otabek Xoliqov',      group: 'N46', course: 'Python', phone: '+998 93 219 99 99', status: 'Faol', ball: 87 },
  { id: 220, name: 'Dilnoza Mirzayeva',   group: 'N46', course: 'Python', phone: '+998 94 220 10 10', status: 'Faol', ball: 65 },
  { id: 221, name: 'Saidakbar Karimov',   group: 'N46', course: 'Python', phone: '+998 95 221 11 12', status: 'Faol', ball: 94 },
  { id: 222, name: 'Hulkar Tursunova',    group: 'N46', course: 'Python', phone: '+998 97 222 22 23', status: 'Faol', ball: 79 },
  // N44 qo'shimcha
  { id: 223, name: 'Behruz Hasanov',      group: 'N44', course: 'Flutter', phone: '+998 98 223 33 34', status: 'Faol' },
  { id: 224, name: 'Ozoda Qodirova',      group: 'N44', course: 'Flutter', phone: '+998 90 224 44 45', status: 'Faol' },
  { id: 225, name: 'Shamsiddin Sobirov',  group: 'N44', course: 'Flutter', phone: '+998 91 225 55 56', status: 'Faol' },
  { id: 226, name: 'Nafisa Aliyeva',      group: 'N44', course: 'Flutter', phone: '+998 93 226 66 67', status: 'Faol' },
  { id: 227, name: 'Jasur Mamadaliyev',   group: 'N44', course: 'Flutter', phone: '+998 94 227 77 78', status: 'Faol' },
  { id: 228, name: 'Gulbahor Ergasheva',  group: 'N44', course: 'Flutter', phone: '+998 95 228 88 89', status: 'Faol' },
  { id: 229, name: 'Timur Valiyev',       group: 'N44', course: 'Flutter', phone: '+998 97 229 99 90', status: 'Faol' },
  // N43 qo'shimcha
  { id: 230, name: 'Ravshan Karimov',     group: 'N43', course: 'Java', phone: '+998 98 230 00 01', status: 'Faol' },
  { id: 231, name: 'Madina Holmatova',    group: 'N43', course: 'Java', phone: '+998 90 231 11 12', status: 'Faol' },
  { id: 232, name: 'Elbek Nazarov',       group: 'N43', course: 'Java', phone: '+998 91 232 22 23', status: 'Faol' },
  { id: 233, name: 'Feruza Abdullayeva',  group: 'N43', course: 'Java', phone: '+998 93 233 33 34', status: 'Faol' },
  { id: 234, name: 'Davron Tursunov',     group: 'N43', course: 'Java', phone: '+998 94 234 44 45', status: 'Faol' },
  { id: 235, name: 'Sarvinoz Raximova',   group: 'N43', course: 'Java', phone: '+998 95 235 55 56', status: 'Faol' },
  { id: 236, name: 'Nodir Yusupov',       group: 'N43', course: 'Java', phone: '+998 97 236 66 67', status: 'Faol' },
  // N47 qo'shimcha
  { id: 237, name: 'Aziz Ergashev',       group: 'N47', course: 'UI/UX', phone: '+998 98 237 77 78', status: 'Faol', ball: 78 },
  { id: 238, name: 'Sitorabonu Karimova', group: 'N47', course: 'UI/UX', phone: '+998 90 238 88 89', status: 'Faol', ball: 85 },
  { id: 239, name: 'Sherzod Nazarov',     group: 'N47', course: 'UI/UX', phone: '+998 91 239 99 90', status: 'Faol', ball: 73 },
  { id: 240, name: 'Mohira Xoliqova',     group: 'N47', course: 'UI/UX', phone: '+998 93 240 00 01', status: 'Faol', ball: 91 },
  { id: 241, name: 'Ulugbek Sobirov',     group: 'N47', course: 'UI/UX', phone: '+998 94 241 11 12', status: 'Faol', ball: 69 },
  { id: 242, name: 'Dilorom Rashidova',   group: 'N47', course: 'UI/UX', phone: '+998 95 242 22 23', status: 'Faol', ball: 87 },
  // N48 qo'shimcha
  { id: 243, name: 'Bobur Aliyev',        group: 'N48', course: 'SMM', phone: '+998 97 243 33 34', status: 'Faol' },
  { id: 244, name: 'Zulfiya Hasanova',    group: 'N48', course: 'SMM', phone: '+998 98 244 44 45', status: 'Faol' },
  { id: 245, name: 'Mirzo Tursunov',      group: 'N48', course: 'SMM', phone: '+998 90 245 55 56', status: 'Faol' },
  { id: 246, name: 'Lola Xolmatova',      group: 'N48', course: 'SMM', phone: '+998 91 246 66 67', status: 'Faol' },
  { id: 247, name: 'Ibrohim Mirzayev',    group: 'N48', course: 'SMM', phone: '+998 93 247 77 78', status: 'Faol' },
  { id: 248, name: 'Nafosa Ergasheva',    group: 'N48', course: 'SMM', phone: '+998 94 248 88 89', status: 'Faol' },
  // N49 qo'shimcha
  { id: 249, name: 'Kamol Yusupov',       group: 'N49', course: 'Node.js', phone: '+998 95 249 99 90', status: 'Faol' },
  { id: 250, name: 'Shahlo Nazarova',     group: 'N49', course: 'Node.js', phone: '+998 97 250 00 01', status: 'Faol' },
  { id: 251, name: 'Farhod Toshmatov',    group: 'N49', course: 'Node.js', phone: '+998 98 251 11 12', status: 'Faol' },
  { id: 252, name: 'Gulnora Holiqova',    group: 'N49', course: 'Node.js', phone: '+998 90 252 22 23', status: 'Faol' },
  { id: 253, name: 'Doniyor Abdullayev',  group: 'N49', course: 'Node.js', phone: '+998 91 253 33 34', status: 'Faol' },
  { id: 254, name: 'Sevinch Mirzayeva',   group: 'N49', course: 'Node.js', phone: '+998 93 254 44 45', status: 'Faol' },
  { id: 255, name: 'Alisher Sobirov',     group: 'N49', course: 'Node.js', phone: '+998 94 255 55 56', status: 'Faol' },
  // N42 qo'shimcha
  { id: 256, name: 'Mansur Aliyev',       group: 'N42', course: 'Grafik dizayn', phone: '+998 95 256 66 67', status: 'Faol' },
  { id: 257, name: 'Dilrabo Karimova',    group: 'N42', course: 'Grafik dizayn', phone: '+998 97 257 77 78', status: 'Faol' },
  { id: 258, name: 'Vohid Ergashev',      group: 'N42', course: 'Grafik dizayn', phone: '+998 98 258 88 89', status: 'Faol' },
  { id: 259, name: 'Mahfuza Nazarova',    group: 'N42', course: 'Grafik dizayn', phone: '+998 90 259 99 90', status: 'Faol' },
  { id: 260, name: 'Sirojiddin Tursunov', group: 'N42', course: 'Grafik dizayn', phone: '+998 91 260 00 01', status: 'Faol' },
  { id: 261, name: 'Hulkar Holmatova',    group: 'N42', course: 'Grafik dizayn', phone: '+998 93 261 11 12', status: 'Faol' },
  { id: 262, name: 'Sanjar Mirzayev',     group: 'N42', course: 'Grafik dizayn', phone: '+998 94 262 22 23', status: 'Faol' },
  // N50 qo'shimcha
  { id: 263, name: 'Temur Yusupov',       group: 'N50', course: 'Data analitika', phone: '+998 95 263 33 34', status: 'Faol' },
  { id: 264, name: 'Barno Hasanova',      group: 'N50', course: 'Data analitika', phone: '+998 97 264 44 45', status: 'Faol' },
  { id: 265, name: 'Elbek Sobirov',       group: 'N50', course: 'Data analitika', phone: '+998 98 265 55 56', status: 'Faol' },
  { id: 266, name: 'Manzura Karimova',    group: 'N50', course: 'Data analitika', phone: '+998 90 266 66 67', status: 'Faol' },
  { id: 267, name: 'Jahongir Ergashev',   group: 'N50', course: 'Data analitika', phone: '+998 91 267 77 78', status: 'Faol' },
  { id: 268, name: 'Nafisa Abdullayeva',  group: 'N50', course: 'Data analitika', phone: '+998 93 268 88 89', status: 'Faol' },
  // N51 qo'shimcha
  { id: 269, name: 'Ravshan Mirzayev',    group: 'N51', course: 'Kiberxavfsizlik', phone: '+998 94 269 99 90', status: 'Faol' },
  { id: 270, name: 'Dilnoza Tursunova',   group: 'N51', course: 'Kiberxavfsizlik', phone: '+998 95 270 00 01', status: 'Faol' },
  { id: 271, name: 'Bobur Karimov',       group: 'N51', course: 'Kiberxavfsizlik', phone: '+998 97 271 11 12', status: 'Faol' },
  { id: 272, name: 'Sevinch Xoliqova',    group: 'N51', course: 'Kiberxavfsizlik', phone: '+998 98 272 22 23', status: 'Faol' },
  { id: 273, name: 'Umid Toshev',         group: 'N51', course: 'Kiberxavfsizlik', phone: '+998 90 273 33 34', status: 'Faol' },
  { id: 274, name: 'Feruza Sobirov',      group: 'N51', course: 'Kiberxavfsizlik', phone: '+998 91 274 44 45', status: 'Faol' },
  { id: 275, name: 'Doniyor Holmatov',    group: 'N51', course: 'Kiberxavfsizlik', phone: '+998 93 275 55 56', status: 'Faol' },
  // N53 qo'shimcha
  { id: 276, name: 'Aziz Mirzayev',       group: 'N53', course: 'Videografiya', phone: '+998 94 276 66 67', status: 'Faol' },
  { id: 277, name: 'Gulbahor Karimova',   group: 'N53', course: 'Videografiya', phone: '+998 95 277 77 78', status: 'Faol' },
  { id: 278, name: 'Sherzod Yusupov',     group: 'N53', course: 'Videografiya', phone: '+998 97 278 88 89', status: 'Faol' },
  { id: 279, name: 'Madina Sobirov',      group: 'N53', course: 'Videografiya', phone: '+998 98 279 99 90', status: 'Faol' },
  { id: 280, name: 'Ulugbek Holiqov',     group: 'N53', course: 'Videografiya', phone: '+998 90 280 00 01', status: 'Faol' },
  { id: 281, name: 'Dilorom Tursunova',   group: 'N53', course: 'Videografiya', phone: '+998 91 281 11 12', status: 'Faol' },
  { id: 282, name: 'Hamid Ergashev',      group: 'N53', course: 'Videografiya', phone: '+998 93 282 22 23', status: 'Faol' },
  // N54 qo'shimcha
  { id: 283, name: 'Behruz Nazarov',      group: 'N54', course: 'Mobilografiya', phone: '+998 94 283 33 34', status: 'Faol' },
  { id: 284, name: 'Ozoda Karimova',      group: 'N54', course: 'Mobilografiya', phone: '+998 95 284 44 45', status: 'Faol' },
  { id: 285, name: 'Firdavs Mirzayev',    group: 'N54', course: 'Mobilografiya', phone: '+998 97 285 55 56', status: 'Faol' },
  { id: 286, name: 'Nilufar Abdullayeva', group: 'N54', course: 'Mobilografiya', phone: '+998 98 286 66 67', status: 'Faol' },
  { id: 287, name: 'Mansur Tursunov',     group: 'N54', course: 'Mobilografiya', phone: '+998 90 287 77 78', status: 'Faol' },
  { id: 288, name: 'Sevinch Holmatova',   group: 'N54', course: 'Mobilografiya', phone: '+998 91 288 88 89', status: 'Faol' },
  // N55 qo'shimcha
  { id: 289, name: 'Sardor Aliyev',       group: 'N55', course: 'Start Junior', phone: '+998 93 289 99 90', status: 'Faol' },
  { id: 290, name: 'Lola Yusupova',       group: 'N55', course: 'Start Junior', phone: '+998 94 290 00 01', status: 'Faol' },
  { id: 291, name: 'Ibrohim Karimov',     group: 'N55', course: 'Start Junior', phone: '+998 95 291 11 12', status: 'Faol' },
  { id: 292, name: 'Zulfiya Sobirov',     group: 'N55', course: 'Start Junior', phone: '+998 97 292 22 23', status: 'Faol' },
  { id: 293, name: 'Ravshan Ergashev',    group: 'N55', course: 'Start Junior', phone: '+998 98 293 33 34', status: 'Faol' },
  { id: 294, name: 'Madina Tursunova',    group: 'N55', course: 'Start Junior', phone: '+998 90 294 44 45', status: 'Faol' },
  // N41 qo'shimcha
  { id: 295, name: 'Kamol Mirzayev',      group: 'N41', course: 'Grafik Dizayn', phone: '+998 91 295 55 56', status: 'Faol' },
  { id: 296, name: 'Shahlo Holiqova',     group: 'N41', course: 'Grafik Dizayn', phone: '+998 93 296 66 67', status: 'Faol' },
  { id: 297, name: 'Farhod Karimov',      group: 'N41', course: 'Grafik Dizayn', phone: '+998 94 297 77 78', status: 'Faol' },
  { id: 298, name: 'Gulnora Abdullayeva', group: 'N41', course: 'Grafik Dizayn', phone: '+998 95 298 88 89', status: 'Faol' },
  { id: 299, name: 'Doniyor Yusupov',     group: 'N41', course: 'Grafik Dizayn', phone: '+998 97 299 99 90', status: 'Faol' },
  { id: 300, name: 'Sevinch Nazarova',    group: 'N41', course: 'Grafik Dizayn', phone: '+998 98 300 00 01', status: 'Faol' },
  { id: 301, name: 'Alisher Tursunov',    group: 'N41', course: 'Grafik Dizayn', phone: '+998 90 301 11 12', status: 'Faol' },
  // N56 qo'shimcha
  { id: 302, name: 'Bobur Mirzayev',      group: 'N56', course: "Sun'iy intellekt", phone: '+998 91 302 22 23', status: 'Faol' },
  { id: 303, name: 'Dilrabo Yusupova',    group: 'N56', course: "Sun'iy intellekt", phone: '+998 93 303 33 34', status: 'Faol' },
  { id: 304, name: 'Mansur Holmatov',     group: 'N56', course: "Sun'iy intellekt", phone: '+998 94 304 44 45', status: 'Faol' },
  { id: 305, name: 'Mahfuza Sobirov',     group: 'N56', course: "Sun'iy intellekt", phone: '+998 95 305 55 56', status: 'Faol' },
  { id: 306, name: 'Vohid Tursunov',      group: 'N56', course: "Sun'iy intellekt", phone: '+998 97 306 66 67', status: 'Faol' },
  { id: 307, name: 'Nafisa Ergasheva',    group: 'N56', course: "Sun'iy intellekt", phone: '+998 98 307 77 78', status: 'Faol' },
  // N57 qo'shimcha
  { id: 308, name: 'Temur Mirzayev',      group: 'N57', course: 'Frontend React.js', phone: '+998 90 308 88 89', status: 'Faol' },
  { id: 309, name: 'Barno Karimova',      group: 'N57', course: 'Frontend React.js', phone: '+998 91 309 99 90', status: 'Faol' },
  { id: 310, name: 'Elbek Abdullayev',    group: 'N57', course: 'Frontend React.js', phone: '+998 93 310 00 01', status: 'Faol' },
  { id: 311, name: 'Manzura Yusupova',    group: 'N57', course: 'Frontend React.js', phone: '+998 94 311 11 12', status: 'Faol' },
  { id: 312, name: 'Jahongir Holmatov',   group: 'N57', course: 'Frontend React.js', phone: '+998 95 312 22 23', status: 'Faol' },
  { id: 313, name: 'Dilorom Sobirov',     group: 'N57', course: 'Frontend React.js', phone: '+998 97 313 33 34', status: 'Faol' },
  // N58 qo'shimcha
  { id: 314, name: 'Ravshan Aliyev',      group: 'N58', course: 'Python', phone: '+998 98 314 44 45', status: 'Faol' },
  { id: 315, name: 'Dilnoza Nazarova',    group: 'N58', course: 'Python', phone: '+998 90 315 55 56', status: 'Faol' },
  { id: 316, name: 'Bobur Tursunov',      group: 'N58', course: 'Python', phone: '+998 91 316 66 67', status: 'Faol' },
  { id: 317, name: 'Sevinch Karimova',    group: 'N58', course: 'Python', phone: '+998 93 317 77 78', status: 'Faol' },
  { id: 318, name: 'Umid Ergashev',       group: 'N58', course: 'Python', phone: '+998 94 318 88 89', status: 'Faol' },
  { id: 319, name: 'Feruza Holmatova',    group: 'N58', course: 'Python', phone: '+998 95 319 99 90', status: 'Faol' },
  { id: 320, name: 'Doniyor Mirzayev',    group: 'N58', course: 'Python', phone: '+998 97 320 00 01', status: 'Faol' },
  // N59 qo'shimcha
  { id: 321, name: 'Aziz Yusupov',        group: 'N59', course: 'Flutter', phone: '+998 98 321 11 12', status: 'Faol' },
  { id: 322, name: 'Gulbahor Sobirov',    group: 'N59', course: 'Flutter', phone: '+998 90 322 22 23', status: 'Faol' },
  { id: 323, name: 'Sherzod Karimov',     group: 'N59', course: 'Flutter', phone: '+998 91 323 33 34', status: 'Faol' },
  { id: 324, name: 'Madina Abdullayeva',  group: 'N59', course: 'Flutter', phone: '+998 93 324 44 45', status: 'Faol' },
  { id: 325, name: 'Ulugbek Tursunov',    group: 'N59', course: 'Flutter', phone: '+998 94 325 55 56', status: 'Faol' },
  { id: 326, name: 'Mohira Mirzayeva',    group: 'N59', course: 'Flutter', phone: '+998 95 326 66 67', status: 'Faol' },
  { id: 327, name: 'Hamid Holiqov',       group: 'N59', course: 'Flutter', phone: '+998 97 327 77 78', status: 'Faol' },
  // N60 qo'shimcha
  { id: 328, name: 'Behruz Ergashev',     group: 'N60', course: 'UI/UX', phone: '+998 98 328 88 89', status: 'Faol' },
  { id: 329, name: 'Ozoda Nazarova',      group: 'N60', course: 'UI/UX', phone: '+998 90 329 99 90', status: 'Faol' },
  { id: 330, name: 'Firdavs Karimov',     group: 'N60', course: 'UI/UX', phone: '+998 91 330 00 01', status: 'Faol' },
  { id: 331, name: 'Nilufar Yusupova',    group: 'N60', course: 'UI/UX', phone: '+998 93 331 11 12', status: 'Faol' },
  { id: 332, name: 'Mansur Abdullayev',   group: 'N60', course: 'UI/UX', phone: '+998 94 332 22 23', status: 'Faol' },
  { id: 333, name: 'Sevinch Tursunova',   group: 'N60', course: 'UI/UX', phone: '+998 95 333 33 34', status: 'Faol' },
  // N61 qo'shimcha
  { id: 334, name: 'Sardor Mirzayev',     group: 'N61', course: 'Java', phone: '+998 97 334 44 45', status: 'Faol' },
  { id: 335, name: 'Lola Holmatova',      group: 'N61', course: 'Java', phone: '+998 98 335 55 56', status: 'Faol' },
  { id: 336, name: 'Ibrohim Sobirov',     group: 'N61', course: 'Java', phone: '+998 90 336 66 67', status: 'Faol' },
  { id: 337, name: 'Zulfiya Aliyeva',     group: 'N61', course: 'Java', phone: '+998 91 337 77 78', status: 'Faol' },
  { id: 338, name: 'Ravshan Nazarov',     group: 'N61', course: 'Java', phone: '+998 93 338 88 89', status: 'Faol' },
  { id: 339, name: 'Madina Ergasheva',    group: 'N61', course: 'Java', phone: '+998 94 339 99 90', status: 'Faol' },
  { id: 340, name: 'Temur Abdullayev',    group: 'N61', course: 'Java', phone: '+998 95 340 00 01', status: 'Faol' },
  // N62 qo'shimcha
  { id: 341, name: 'Kamol Tursunov',      group: 'N62', course: 'SMM', phone: '+998 97 341 11 12', status: 'Faol' },
  { id: 342, name: 'Shahlo Karimova',     group: 'N62', course: 'SMM', phone: '+998 98 342 22 23', status: 'Faol' },
  { id: 343, name: 'Farhod Yusupov',      group: 'N62', course: 'SMM', phone: '+998 90 343 33 34', status: 'Faol' },
  { id: 344, name: 'Gulnora Holmatova',   group: 'N62', course: 'SMM', phone: '+998 91 344 44 45', status: 'Faol' },
  { id: 345, name: 'Doniyor Sobirov',     group: 'N62', course: 'SMM', phone: '+998 93 345 55 56', status: 'Faol' },
  { id: 346, name: 'Sevinch Abdullayeva', group: 'N62', course: 'SMM', phone: '+998 94 346 66 67', status: 'Faol' },
  // N63 qo'shimcha
  { id: 347, name: 'Alisher Ergashev',    group: 'N63', course: 'Node.js', phone: '+998 95 347 77 78', status: 'Faol' },
  { id: 348, name: 'Bobur Nazarov',       group: 'N63', course: 'Node.js', phone: '+998 97 348 88 89', status: 'Faol' },
  { id: 349, name: 'Dilrabo Tursunova',   group: 'N63', course: 'Node.js', phone: '+998 98 349 99 90', status: 'Faol' },
  { id: 350, name: 'Mansur Karimov',      group: 'N63', course: 'Node.js', phone: '+998 90 350 00 01', status: 'Faol' },
  { id: 351, name: 'Mahfuza Holiqova',    group: 'N63', course: 'Node.js', phone: '+998 91 351 11 12', status: 'Faol' },
  { id: 352, name: 'Vohid Yusupov',       group: 'N63', course: 'Node.js', phone: '+998 93 352 22 23', status: 'Faol' },
  { id: 353, name: 'Nafisa Mirzayeva',    group: 'N63', course: 'Node.js', phone: '+998 94 353 33 34', status: 'Faol' },
  // N64 qo'shimcha
  { id: 354, name: 'Temur Sobirov',       group: 'N64', course: 'Data analitika', phone: '+998 95 354 44 45', status: 'Faol' },
  { id: 355, name: 'Barno Abdullayeva',   group: 'N64', course: 'Data analitika', phone: '+998 97 355 55 56', status: 'Faol' },
  { id: 356, name: 'Elbek Karimov',       group: 'N64', course: 'Data analitika', phone: '+998 98 356 66 67', status: 'Faol' },
  { id: 357, name: 'Manzura Tursunova',   group: 'N64', course: 'Data analitika', phone: '+998 90 357 77 78', status: 'Faol' },
  { id: 358, name: 'Jahongir Mirzayev',   group: 'N64', course: 'Data analitika', phone: '+998 91 358 88 89', status: 'Faol' },
  { id: 359, name: 'Dilorom Holmatova',   group: 'N64', course: 'Data analitika', phone: '+998 93 359 99 90', status: 'Faol' },
  // N65 qo'shimcha
  { id: 360, name: 'Ravshan Yusupov',     group: 'N65', course: 'Grafik dizayn', phone: '+998 94 360 00 01', status: 'Faol' },
  { id: 361, name: 'Dilnoza Sobirov',     group: 'N65', course: 'Grafik dizayn', phone: '+998 95 361 11 12', status: 'Faol' },
  { id: 362, name: 'Bobur Abdullayev',    group: 'N65', course: 'Grafik dizayn', phone: '+998 97 362 22 23', status: 'Faol' },
  { id: 363, name: 'Sevinch Karimova',    group: 'N65', course: 'Grafik dizayn', phone: '+998 98 363 33 34', status: 'Faol' },
  { id: 364, name: 'Umid Tursunov',       group: 'N65', course: 'Grafik dizayn', phone: '+998 90 364 44 45', status: 'Faol' },
  { id: 365, name: 'Feruza Mirzayeva',    group: 'N65', course: 'Grafik dizayn', phone: '+998 91 365 55 56', status: 'Faol' },
  { id: 366, name: 'Doniyor Nazarov',     group: 'N65', course: 'Grafik dizayn', phone: '+998 93 366 66 67', status: 'Faol' },
  // N66 qo'shimcha
  { id: 367, name: 'Aziz Karimov',        group: 'N66', course: 'Kiberxavfsizlik', phone: '+998 94 367 77 78', status: 'Faol' },
  { id: 368, name: 'Gulbahor Tursunova',  group: 'N66', course: 'Kiberxavfsizlik', phone: '+998 95 368 88 89', status: 'Faol' },
  { id: 369, name: 'Sherzod Mirzayev',    group: 'N66', course: 'Kiberxavfsizlik', phone: '+998 97 369 99 90', status: 'Faol' },
  { id: 370, name: 'Madina Holiqova',     group: 'N66', course: 'Kiberxavfsizlik', phone: '+998 98 370 00 01', status: 'Faol' },
  { id: 371, name: 'Ulugbek Abdullayev',  group: 'N66', course: 'Kiberxavfsizlik', phone: '+998 90 371 11 12', status: 'Faol' },
  { id: 372, name: 'Mohira Yusupova',     group: 'N66', course: 'Kiberxavfsizlik', phone: '+998 91 372 22 23', status: 'Faol' },
  { id: 373, name: 'Hamid Sobirov',       group: 'N66', course: 'Kiberxavfsizlik', phone: '+998 93 373 33 34', status: 'Faol' },
  // N67 qo'shimcha
  { id: 374, name: 'Behruz Karimov',      group: 'N67', course: 'Frontend React.js', phone: '+998 94 374 44 45', status: 'Faol' },
  { id: 375, name: 'Ozoda Tursunova',     group: 'N67', course: 'Frontend React.js', phone: '+998 95 375 55 56', status: 'Faol' },
  { id: 376, name: 'Firdavs Mirzayev',    group: 'N67', course: 'Frontend React.js', phone: '+998 97 376 66 67', status: 'Faol' },
  { id: 377, name: 'Nilufar Holmatova',   group: 'N67', course: 'Frontend React.js', phone: '+998 98 377 77 78', status: 'Faol' },
  { id: 378, name: 'Mansur Yusupov',      group: 'N67', course: 'Frontend React.js', phone: '+998 90 378 88 89', status: 'Faol' },
  { id: 379, name: 'Sevinch Ergasheva',   group: 'N67', course: 'Frontend React.js', phone: '+998 91 379 99 90', status: 'Faol' },
  { id: 380, name: 'Sardor Abdullayev',   group: 'N67', course: 'Frontend React.js', phone: '+998 93 380 00 01', status: 'Faol' },
  // N68 qo'shimcha
  { id: 381, name: 'Lola Tursunova',      group: 'N68', course: "Sun'iy intellekt", phone: '+998 94 381 11 12', status: 'Faol' },
  { id: 382, name: 'Ibrohim Karimov',     group: 'N68', course: "Sun'iy intellekt", phone: '+998 95 382 22 23', status: 'Faol' },
  { id: 383, name: 'Zulfiya Nazarova',    group: 'N68', course: "Sun'iy intellekt", phone: '+998 97 383 33 34', status: 'Faol' },
  { id: 384, name: 'Ravshan Sobirov',     group: 'N68', course: "Sun'iy intellekt", phone: '+998 98 384 44 45', status: 'Faol' },
  { id: 385, name: 'Madina Aliyeva',      group: 'N68', course: "Sun'iy intellekt", phone: '+998 90 385 55 56', status: 'Faol' },
  { id: 386, name: 'Temur Ergashev',      group: 'N68', course: "Sun'iy intellekt", phone: '+998 91 386 66 67', status: 'Faol' },
  { id: 387, name: 'Kamol Holmatov',      group: 'N68', course: "Sun'iy intellekt", phone: '+998 93 387 77 78', status: 'Faol' },
  { id: 388, name: 'Shahlo Mirzayeva',    group: 'N68', course: "Sun'iy intellekt", phone: '+998 94 388 88 89', status: 'Faol' },
  // Chetlashtirilgan o'quvchilar
  { id: 201, name: 'Jahon Toshmatov',      group: 'N45', course: 'Frontend React.js', phone: '+998 91 201 11 22', status: 'Nofaol', suspendReason: 'Darsga qatnashmadi' },
  { id: 202, name: 'Kamola Ergasheva',     group: 'N46', course: 'Python',            phone: '+998 93 202 22 33', status: 'Nofaol', suspendReason: 'To\'lovni amalga oshirmadi' },
  { id: 203, name: 'Sardor Holmatov',      group: 'N47', course: 'UI/UX',             phone: '+998 94 203 33 44', status: 'Nofaol', suspendReason: 'O\'z xohishi bilan chiqdi' },
  { id: 204, name: 'Nilufar Qodirov',      group: 'N48', course: 'SMM',               phone: '+998 95 204 44 55', status: 'Nofaol', suspendReason: 'Intizom buzilishi' },
  { id: 205, name: 'Ulmas Mirzayev',       group: 'N49', course: 'Node.js',           phone: '+998 97 205 55 66', status: 'Nofaol', suspendReason: 'Darsga qatnashmadi' },
  { id: 206, name: 'Barno Yusupova',       group: 'N50', course: 'Data analitika',    phone: '+998 98 206 66 77', status: 'Nofaol', suspendReason: 'To\'lovni amalga oshirmadi' },
  { id: 207, name: 'Shamsiddin Aliyev',    group: 'N51', course: 'Kiberxavfsizlik',   phone: '+998 90 207 77 88', status: 'Nofaol', suspendReason: 'O\'z xohishi bilan chiqdi' },
  { id: 208, name: 'Ozoda Tursunova',      group: 'N53', course: 'Videografiya',      phone: '+998 91 208 88 99', status: 'Nofaol', suspendReason: 'Intizom buzilishi' },
  { id: 209, name: 'Eldor Raximov',        group: 'N55', course: 'Start Junior',      phone: '+998 93 209 99 00', status: 'Nofaol', suspendReason: 'Darsga qatnashmadi' },
  { id: 210, name: 'Mohira Salimova',      group: 'N57', course: 'Frontend React.js', phone: '+998 94 210 00 11', status: 'Nofaol', suspendReason: 'To\'lovni amalga oshirmadi' },
];

const _viloyatlar = ['Toshkent shahri', 'Toshkent viloyati', 'Samarqand', "Farg'ona", 'Andijon', 'Namangan', 'Buxoro', 'Xorazm', 'Qashqadaryo', 'Surxondaryo', 'Sirdaryo', 'Jizzax', 'Navoiy', "Qoraqalpog'iston"];
const _talimlar = ["Maktabda o'qiydi", "Universitetda o'qiydi", "O'qimaydi"];
const _PASS_CHARS = 'abcdefghjkmnpqrstuvwxyz23456789';
function _genPass(seed) {
  let s = seed;
  return Array.from({ length: 8 }, () => {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    return _PASS_CHARS[s % _PASS_CHARS.length];
  }).join('');
}

export const usersDataFull = usersData.map(u => {
  const talim = u.talim || _talimlar[(u.id - 1) % 3];
  let age = u.age;
  if (!age) {
    age = talim === "Maktabda o'qiydi" ? String(15 + (u.id % 3)) : String(18 + (u.id % 10));
  }
  return {
    ...u,
    age,
    viloyat: u.viloyat || _viloyatlar[(u.id - 1) % 14],
    talim,
    login: u.login || String(10000 + u.id),
    password: u.password || _genPass(u.id * 31 + 7),
  };
});

export default function Users() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState("O'qiyotgan");
  const [users, setUsers] = useState(() => {
    try {
      const saved = localStorage.getItem('lms_users');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Eski ma'lumotlarda login/password yo'q bo'lsa, to'ldirish
        return parsed.map(u => ({
          ...u,
          login: u.login || String(10000 + u.id),
          password: u.password || _genPass(u.id * 31 + 7),
        }));
      }
      return usersDataFull;
    } catch {
      return usersDataFull;
    }
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('lms_users', JSON.stringify(users));
  }, [users]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [suspendReason, setSuspendReason] = useState('');
  const [form, setForm] = useState({ name: '', group: '', course: '', phone: '', age: '', viloyat: '', talim: '', login: '', password: '' });
  const [formError, setFormError] = useState('');

  const TUGATGAN_GROUPS = ['N41', 'N42', 'N43'];

  const generateCredentials = () => {
    const login = String(Math.floor(10000 + Math.random() * 90000));
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const password = Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    return { login, password };
  };

  const handleRestore = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, status: 'Faol', suspendReason: '' } : u));
    setSelectedUser(prev => ({ ...prev, status: 'Faol', suspendReason: '' }));
  };

  const handleSuspend = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, status: 'Nofaol', suspendReason } : u));
    setSelectedUser(prev => ({ ...prev, status: 'Nofaol', suspendReason }));
    setSuspendReason('');
    setShowDeleteConfirm(false);
  };

  const handleEditSave = () => {
    if (!editForm.name.trim() || !editForm.group.trim()) return;
    setUsers(prev => prev.map(u => u.id === editForm.id ? { ...editForm } : u));
    setSelectedUser({ ...editForm });
    setShowEditModal(false);
  };

  const handleAdd = () => {
    if (!form.name.trim() || !form.group.trim() || !form.course.trim() || !form.age.trim() || !form.viloyat.trim() || !form.talim || !form.login.trim() || !form.password.trim()) {
      setFormError("Barcha maydonlarni to'ldiring!");
      return;
    }
    const newUser = {
      id: users.length + 1,
      name: form.name.trim(),
      group: form.group.trim(),
      course: form.course.trim(),
      phone: form.phone.trim(),
      age: form.age.trim(),
      viloyat: form.viloyat.trim(),
      talim: form.talim,
      login: form.login.trim(),
      password: form.password.trim(),
      status: 'Faol',
    };
    setUsers([...users, newUser]);
    setForm({ name: '', group: '', course: '', phone: '', age: '', viloyat: '', talim: '', login: '', password: '' });
    setFormError('');
    setShowModal(false);
  };

  const filtered = users.filter((u) => {
    let tab;
    if (u.status === 'Nofaol') {
      tab = 'Chetlashtirilgan';
    } else if (TUGATGAN_GROUPS.includes(u.group)) {
      tab = 'Tugatgan';
    } else {
      tab = "O'qiyotgan";
    }
    const matchTab = tab === activeTab;
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.group.toLowerCase().includes(search.toLowerCase()) ||
      u.course.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="users-page">
      <div className="users-header">
        <h2>O'quvchilar</h2>
        <button className="add-btn" onClick={() => {
          const { login, password } = generateCredentials();
          setForm(f => ({ ...f, login, password }));
          setShowModal(true);
        }}>+ Yangi o'quvchi</button>
      </div>

      <div className="users-tabs">
        <button
          className={`users-tab ${activeTab === "O'qiyotgan" ? 'tab-active' : ''}`}
          onClick={() => setActiveTab("O'qiyotgan")}
        >
          O'qiyotgan
        </button>
        <button
          className={`users-tab ${activeTab === 'Tugatgan' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('Tugatgan')}
        >
          Tugatgan
        </button>
        <button
          className={`users-tab ${activeTab === 'Chetlashtirilgan' ? 'tab-active tab-danger' : ''}`}
          onClick={() => setActiveTab('Chetlashtirilgan')}
        >
          Chetlashtirilgan
        </button>
      </div>

      <div className="users-search-row">
        <input
          className="users-search"
          type="text"
          placeholder="Ism, guruh yoki kurs bo'yicha qidirish..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="users-count">Jami: {filtered.length} ta o'quvchi</span>
      </div>

      <div className="users-table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Ism Familiya</th>
              <th>Guruh</th>
              <th>Kurs</th>
              <th>Login</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u, index) => (
              <tr key={u.id} className="clickable-row" onClick={() => setSelectedUser(u)}>
                <td>{index + 1}</td>
                <td>{u.name}</td>
                <td><span className="group-badge">{u.group}</span></td>
                <td>{u.course}</td>
                <td style={{fontFamily:'monospace', letterSpacing:'1px'}}>{u.login || String(10000 + u.id)}</td>
                <td>
                  <span className={`status-tag ${TUGATGAN_GROUPS.includes(u.group) ? 'ended' : u.status === 'Faol' ? 'active' : 'inactive'}`}>
                    {TUGATGAN_GROUPS.includes(u.group) ? 'Tugatgan' : u.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Modal */}
      {selectedUser && (
        <div className="modal-overlay" onClick={() => setSelectedUser(null)}>
          <div className="modal-box detail-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>O'quvchi ma'lumotlari</h3>
              <button className="modal-close" onClick={() => setSelectedUser(null)}>✕</button>
            </div>
            <div className="detail-body">
              <div className="detail-avatar">
                {selectedUser.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
              </div>
              <div className="detail-name">{selectedUser.name}</div>
              <div className="detail-status-row">
                <span className={`status-tag ${TUGATGAN_GROUPS.includes(selectedUser.group) ? 'ended' : selectedUser.status === 'Faol' ? 'active' : 'inactive'}`}>
                  {TUGATGAN_GROUPS.includes(selectedUser.group) ? 'Tugatgan' : selectedUser.status}
                </span>
              </div>
              {/* Davomat va Qarz */}
              {(() => {
                const today = new Date().toISOString().slice(0, 10);
                const att = (() => { try { return JSON.parse(localStorage.getItem('lms_attendance') || '{}'); } catch { return {}; } })();
                const attStatus = (att[`${today}_${selectedUser.id}`] || {}).status || null;
                const qarz = paymentsData.find(p => p.student === selectedUser.name && p.status === 'Kutilmoqda');
                return (
                  <div className="detail-extra-row">
                    <div className={`detail-extra-card ${attStatus === 'keldi' ? 'dex-keldi' : attStatus === 'kelmadi' ? 'dex-kelmad' : 'dex-none'}`}>
                      <span className="dex-icon">{attStatus === 'keldi' ? '✅' : attStatus === 'kelmadi' ? '❌' : '⏳'}</span>
                      <div>
                        <div className="dex-label">Bugungi davomat</div>
                        <div className="dex-val">{attStatus === 'keldi' ? 'Keldi' : attStatus === 'kelmadi' ? 'Kelmadi' : 'Belgilanmagan'}</div>
                      </div>
                    </div>
                    <div className={`detail-extra-card ${qarz ? 'dex-qarz' : 'dex-tolangan'}`}>
                      <span className="dex-icon">{qarz ? '💸' : '✔️'}</span>
                      <div>
                        <div className="dex-label">To'lov holati</div>
                        <div className="dex-val">{qarz ? `Qarzi bor — ${qarz.amount.toLocaleString()} so'm` : "To'langan"}</div>
                      </div>
                    </div>
                  </div>
                );
              })()}
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">📚 Kurs</span>
                  <span className="detail-val">{selectedUser.course}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">👥 Guruh</span>
                  <span className="detail-val"><span className="group-badge">{selectedUser.group}</span></span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">📞 Telefon</span>
                  <span className="detail-val">{selectedUser.phone}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">📍 Viloyat</span>
                  <span className="detail-val">{selectedUser.viloyat || <span style={{color:'#bbb'}}>Noma'lum</span>}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">🔑 Login</span>
                  <span className="detail-val mono">{selectedUser.login || String(10000 + selectedUser.id)}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">🔒 Parol</span>
                  <span className="detail-val mono">{selectedUser.password || _genPass(selectedUser.id * 31 + 7)}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">🎂 Yoshi</span>
                  <span className="detail-val">{selectedUser.age ? selectedUser.age + ' yosh' : <span style={{color:'#bbb'}}>Noma'lum</span>}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">🎓 Ta'lim</span>
                  <span className="detail-val">{selectedUser.talim || <span style={{color:'#bbb'}}>Noma'lum</span>}</span>
                </div>
                {selectedUser.suspendReason && (
                  <div className="detail-item detail-item-full">
                    <span className="detail-label">📝 Chetlashtirish sababi</span>
                    <span className="detail-val" style={{color:'#e74c3c'}}>{selectedUser.suspendReason}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              {selectedUser.status === 'Nofaol' ? (
                <button className="restore-btn" onClick={() => handleRestore(selectedUser.id)}>✅ Kursga qaytarish</button>
              ) : (
                <button className="detail-delete-btn" onClick={() => setShowDeleteConfirm(true)}>🚫 Chetlashtirish</button>
              )}
              <button className="modal-cancel" onClick={() => setSelectedUser(null)}>Yopish</button>
              <button className="modal-save" onClick={() => {
                setEditForm({ ...selectedUser });
                setShowEditModal(true);
              }}>✏️ Tahrirlash</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {showDeleteConfirm && selectedUser && (
        <div className="modal-overlay" onClick={() => { setShowDeleteConfirm(false); setSuspendReason(''); }}>
          <div className="modal-box" style={{width:400}} onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{color:'#e74c3c'}}>Kursdan chetlashtirish</h3>
              <button className="modal-close" onClick={() => { setShowDeleteConfirm(false); setSuspendReason(''); }}>✕</button>
            </div>
            <div className="modal-body" style={{padding:'16px 24px'}}>
              <p style={{color:'#444', margin:'0 0 12px'}}><b>{selectedUser.name}</b> o'quvchisini kursdan chetlashtirasizmi?</p>
              <textarea
                rows={3}
                placeholder="Chetlashtirish sababini yozing..."
                value={suspendReason}
                onChange={e => setSuspendReason(e.target.value)}
                style={{width:'100%', padding:'9px 12px', border:'1.5px solid #e0d6ff', borderRadius:'9px', fontSize:'0.95rem', outline:'none', resize:'vertical', fontFamily:'inherit', boxSizing:'border-box', marginTop:4}}
              />
            </div>
            <div className="modal-footer">
              <button className="modal-cancel" onClick={() => { setShowDeleteConfirm(false); setSuspendReason(''); }}>Bekor qilish</button>
              <button className="modal-save" style={{background:'#e74c3c'}} onClick={() => handleSuspend(selectedUser.id)}>Ha, chetlashtirish</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && editForm && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>O'quvchini tahrirlash</h3>
              <button className="modal-close" onClick={() => setShowEditModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <label>Ism Familiya</label>
              <input type="text" value={editForm.name} onChange={e => setEditForm({...editForm, name: e.target.value})} />
              <label>Guruh</label>
              <input type="text" value={editForm.group} onChange={e => setEditForm({...editForm, group: e.target.value})} />
              <label>Kurs</label>
              <input type="text" value={editForm.course} onChange={e => setEditForm({...editForm, course: e.target.value})} />
              <label>Telefon</label>
              <input type="text" value={editForm.phone} onChange={e => setEditForm({...editForm, phone: e.target.value})} />
              <label>Yoshi</label>
              <input type="number" value={editForm.age} onChange={e => setEditForm({...editForm, age: e.target.value})} />
              <label>Viloyat</label>
              <select value={editForm.viloyat} onChange={e => setEditForm({...editForm, viloyat: e.target.value})}>
                <option value="">Tanlang...</option>
                <option>Toshkent shahri</option><option>Toshkent viloyati</option><option>Samarqand</option>
                <option>Farg'ona</option><option>Andijon</option><option>Namangan</option>
                <option>Buxoro</option><option>Xorazm</option><option>Qashqadaryo</option>
                <option>Surxondaryo</option><option>Sirdaryo</option><option>Jizzax</option>
                <option>Navoiy</option><option>Qoraqalpog'iston</option>
              </select>
              <label>Ta'lim holati</label>
              <select value={editForm.talim} onChange={e => setEditForm({...editForm, talim: e.target.value})}>
                <option value="">Tanlang...</option>
                <option>Maktabda o'qiydi</option>
                <option>Universitetda o'qiydi</option>
                <option>O'qimaydi</option>
              </select>
            </div>
            <div className="modal-footer">
              <button className="modal-cancel" onClick={() => setShowEditModal(false)}>Bekor qilish</button>
              <button className="modal-save" onClick={handleEditSave}>Saqlash</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Yangi o'quvchi qo'shish</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <label>Ism Familiya</label>
              <input
                type="text"
                placeholder="Masalan: Jasur Karimov"
                value={form.name}
                onChange={e => {
                  const name = e.target.value;
                  if (!form.login) {
                    const { login, password } = generateCredentials();
                    setForm({ ...form, name, login, password });
                  } else {
                    setForm({ ...form, name });
                  }
                }}
              />
              <label>Guruh</label>
              <input
                type="text"
                placeholder="Masalan: N45"
                value={form.group}
                onChange={e => setForm({ ...form, group: e.target.value })}
              />
              <label>Kurs</label>
              <input
                type="text"
                placeholder="Masalan: Frontend React.js"
                value={form.course}
                onChange={e => setForm({ ...form, course: e.target.value })}
              />
              <label>Telefon</label>
              <input
                type="text"
                placeholder="+998 90 123 45 67"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
              />
              <label>Yoshi</label>
              <input
                type="number"
                placeholder="Masalan: 18"
                min="14" max="60"
                value={form.age}
                onChange={e => setForm({ ...form, age: e.target.value })}
              />
              <label>Viloyat</label>
              <select
                value={form.viloyat}
                onChange={e => setForm({ ...form, viloyat: e.target.value })}
              >
                <option value="">Tanlang...</option>
                <option>Toshkent shahri</option>
                <option>Toshkent viloyati</option>
                <option>Samarqand</option>
                <option>Farg'ona</option>
                <option>Andijon</option>
                <option>Namangan</option>
                <option>Buxoro</option>
                <option>Xorazm</option>
                <option>Qashqadaryo</option>
                <option>Surxondaryo</option>
                <option>Sirdaryo</option>
                <option>Jizzax</option>
                <option>Navoiy</option>
                <option>Qoraqalpog'iston</option>
              </select>
              <label>Ta'lim holati</label>
              <select
                value={form.talim}
                onChange={e => setForm({ ...form, talim: e.target.value })}
              >
                <option value="">Tanlang...</option>
                <option>Maktabda o'qiydi</option>
                <option>Universitetda o'qiydi</option>
                <option>O'qimaydi</option>
              </select>
              <div className="modal-divider"></div>
              <label>Login <span className="auto-badge">avtomatik</span></label>
              <input
                type="text"
                value={form.login}
                readOnly
                className="auto-input"
              />
              <label>Parol <span className="auto-badge">avtomatik</span></label>
              <div className="auto-pass-row">
                <input
                  type="text"
                  value={form.password}
                  readOnly
                  className="auto-input"
                />
                <button type="button" className="regen-btn" onClick={() => {
                  const { login, password } = generateCredentials();
                  setForm({ ...form, login, password });
                }}>🔄</button>
              </div>
              {formError && <p className="modal-error">{formError}</p>}
            </div>
            <div className="modal-footer">
              <button className="modal-cancel" onClick={() => setShowModal(false)}>Bekor qilish</button>
              <button className="modal-save" onClick={handleAdd}>Saqlash</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
