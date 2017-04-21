'use strict';


const fs = require('fs');
const bitmap = fs.readFileSync(`${__dirname}/data/bitmap.bmp`);
const bmp = {};

bmp.spec = bitmap.toString('utf-8', 0, 2);
bmp.size = bitmap.readUInt32LE(2);
bmp.width = bitmap.readUInt32LE(18);
bmp.height = bitmap.readUInt32LE(22);
bmp.offset = bitmap.readUInt32LE(10);
bmp.colorArray = bitmap.slice(54, bmp.offset).toString();

console.log(bmp);

// Referenced from our Google Spreadsheet
/*
Type	Begin Byte	End Byte	Read	Output	Note
spec	0	2	readUInt16LE(0)  ??	BM
file-size	2	6	readUInt32LE(2)	11078
width	18	22	readUInt32LE(18)	100	Pixels
height	22	26	readUInt32LE(22)	100	Pixels
image-size	34	38	readUInt32LE(34)		Pixels
offset	10	14	readInt32LE(10)
colorArray	54	70??	slice(54, bmp.offset)
(Red Bitmask)	54	58
(Green Bitmask)	58	62
(Blue Bitmask)	62	66
(Alpha Bitmask)	66	70
*/
