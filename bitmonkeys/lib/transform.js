'use strict';

const write = require('./write.js');

module.exports = exports = {};

exports.grayscale = function (newFile, readData) {
  let offset = readData.readUInt32LE(10);
  let colorArr = readData.slice(54, offset);
  for (let i = 0; i < colorArr.length; i+=4){
    let avgVal = ((colorArr[i] + colorArr[i + 1] + colorArr[i + 2]) / 3);
    colorArr[i] = colorArr[i + 1] = colorArr[i + 2] = avgVal;
  }
  write(newFile, readData);
};

exports.invert = function(newFile, readData) {
  let offset = readData.readUInt32LE(10);
  let colorArr = readData.slice(54, offset);
  for (let i = 0; i < colorArr.length; i+=4){
    colorArr[i] = 255 - colorArr[i];
    colorArr[i + 1] = 255 - colorArr[i + 1];
    colorArr[i + 2] = 255 - colorArr[i + 2];
  }
  write(newFile, readData);
};

exports.scaleColor = function(newFile, readData) {
  let offset = readData.readUInt32LE(10);
  let colorArr = readData.slice(54, offset);
  for (let i = 0; i < colorArr.length; i+=4){
    if (colorArr[i + 1] * 3 >= 255) {
      colorArr[i + 1] = 255;
    } else {
      colorArr[i + 1] = colorArr[i +1] * 3;
    }
  }
  write(newFile, readData);
};
//
// const bitmap = fs.readFileSync(`${__dirname}/../../assets/bitmap.bmp`);
// const bmp = {};
//
// bmp.spec = bitmap.toString('utf-8', 0, 2);
// bmp.size = bitmap.readUInt32LE(2);
// bmp.width = bitmap.readUInt32LE(18);
// bmp.height = bitmap.readUInt32LE(22);
// bmp.offset = bitmap.readUInt32LE(10);
// bmp.color = bitmap.slice(54, bmp.offset);
// bmp.colorArray = bitmap.slice(54, bmp.offset);
// // Need pixel data
// bmp.wholeFile = bitmap;
//
// console.log('Buffer array before ', bmp.colorArray);
//
// // for (var i = 0; i < bmp.colorArray.length; i += 4) {
// //   // console.log('In loop before ', bmp.colorArray[i]);
//   bmp.colorArray[i] = 255 - bmp.colorArray[i];
//   bmp.colorArray[i + 1] = 255 - bmp.colorArray[i + 1];
//   bmp.colorArray[i + 2] = 255 - bmp.colorArray[i + 2];
//   //console.log('In loop after ', bmp.colorArray[i]);
// //
// //   // console.log();
// // }
// // console.log('Buffer array after ', bmp.colorArray);
//
// //console.log('Array ', bmp.colorArray);
// for (let i = 0; i < bmp.colorArray.length; i += 4) {
//   console.log(bmp.colorArray[i], bmp.colorArray[i + 1], bmp.colorArray[i + 2], 'b4');
//   let avgVal = ((bmp.colorArray[i] + bmp.colorArray[i + 1] + bmp.colorArray[i + 2]) / 3);
//   bmp.colorArray[i] = bmp.colorArray[i + 1] = bmp.colorArray[i + 2] = avgVal;
//   console.log(bmp.colorArray[i], bmp.colorArray[i + 1], bmp.colorArray[i + 2], 'after');
//   // bmp.colorArray[i + 1] = avgVal;
//   // bmp.colorArray[i + 2] = avgVal;
// }
// console.log('Buffer array after ', bmp.colorArray);
//
// function resultOfTransform(newFile, newData) {
//   fs.writeFile(`${__dirname}/../data/${newFile}`, newData, function(err){
//     if (err) throw err;
//   });
// }
// resultOfTransform('newtest.bmp', bmp.wholeFile);

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

//steven-teddy work
