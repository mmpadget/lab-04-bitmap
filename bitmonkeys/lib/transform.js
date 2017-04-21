'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync(`${__dirname}/data/bitmap.bmp`);
const bmp = {};

bmp.spec = bitmap.toString('utf-8', 0, 2);
bmp.size = bitmap.readUInt32LE(2);
bmp.width = bitmap.readUInt32LE(18);
bmp.height = bitmap.readUInt32LE(22);
bmp.offset = bitmap.readUInt32LE(10);
bmp.color = bitmap.slice(54, bmp.offset);
bmp.colorArray = bitmap.slice(54, bmp.offset);

console.log(bmp);
console.log(bmp.colorArray);
//console.dir(bmp.colorArray.toString('utf-8'));
// console.log(bmp.colorArray.toString('hex'));
bmp.Bitmask = bitmap.readUInt32LE(10);

// // 3. The readfile.js runs.
// const readMainFile = require('./lib/readfile.js');
// // Runs the code in readfile.js
// console.log(readMainFile, 'here');
// // 1. readMainFile outputs an object.
//
// // 2. write and read to buffer.
// const Buffer = require('buffer').Buffer;
// let myBuffer = Buffer.from('Hello world');
// console.log(myBuffer.toString('utf-8', 0, 5));
// // (encoding, start, end)

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

// NOTES:
// Each is a hex value for one color in a byte. 0000 is black. BGRa.
// Loop through each px. i+4, iterate through each byte. j+ where j<3 for nested.
// array[i+j]
// 255 - that value. 255, 255, 255 is white, 0,0,0 is black.
// Invert each (transform). 255-225 is the inverted value.
// sum of 3 values, avg of those values (greyscale) 255, 0
// console.log(colorArray);
