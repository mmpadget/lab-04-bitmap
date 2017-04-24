'use strict';

const fs = require('fs');

// 1. open file using fs and read it into a buffer.
// 2. convert buffer headers data into a Javascript Object (using constructors)
// 3. Run a transform on the buffer directly
// 4. Write the buffer to a new file.

const bitmap = fs.readFileSync(`${__dirname}/../../assets/bitmap.bmp`);
const bmp = {};

bmp.spec = bitmap.toString('utf-8', 0, 2);
bmp.size = bitmap.readUInt32LE(2);
bmp.width = bitmap.readUInt32LE(18);
bmp.height = bitmap.readUInt32LE(22);
bmp.offset = bitmap.readUInt32LE(10);
bmp.color = bitmap.slice(54, bmp.offset);
bmp.colorArray = bitmap.slice(54, bmp.offset);
bmp.wholeFile = bitmap;

// console.log('Buffer before. ', bmp.colorArray);

// "Subtract every color value from the max color value 255."
function invertColors() {
  // for (var i = 0; i < bmp.colorArray.length; i += 4) {
  //   bmp.colorArray[i] = 255 - bmp.colorArray[i];
  //   bmp.colorArray[i + 1] = 255 - bmp.colorArray[i + 1];
  //   bmp.colorArray[i + 2] = 255 - bmp.colorArray[i + 2];
  // }
}
invertColors();
// console.log('Buffer after! ', bmp.colorArray);

// console.log('Buffer before ', bmp.colorArray);

// "Multiply each color value by a constant, don't go over 255."
function greyScale() {
  for (let i = 0; i < bmp.colorArray.length; i += 4) {
    let avgVal = ((bmp.colorArray[i] + bmp.colorArray[i + 1] + bmp.colorArray[i + 2]) / 3);
    bmp.colorArray[i] = bmp.colorArray[i + 1] = bmp.colorArray[i + 2] = avgVal;
  }
}
greyScale();
// console.log('Buffer after! ', bmp.colorArray);

// console.log('Buffer before ', bmp.colorArray);

function redChannel() {
  for (let i = 0; i < bmp.colorArray.length; i += 4) {
    bmp.colorArray[i + 2] = 255; // Red
  }
}
redChannel();
// console.log('Buffer after! ', bmp.colorArray);

// console.log('Buffer before ', bmp.colorArray);
function greenChannel() {
  // for (let i = 0; i < bmp.colorArray.length; i += 4) {
  //   if (i <= 255) {
  //     bmp.colorArray[i + 1] = 255; // Green
  //   }
  // }
}
greenChannel();
// console.log('Buffer after! ', bmp.colorArray);

// console.log('Buffer before ', bmp.colorArray);
function blueChannel() {
  // for (let i = 0; i < bmp.colorArray.length; i += 4) {
  //   if (i <= 255) {
  //     bmp.colorArray[i] = 255; // Blue
  //   }
  // }
}
blueChannel();
// console.log('Buffer after! ', bmp.colorArray);

// Save new test file as bitmap to data folder.
function transformResult(file, data) {
  fs.writeFile(`${__dirname}/../data/${file}`, data, function(err){
    if (err) throw err;
  });
}
transformResult('newtest.bmp', bmp.wholeFile);


//steven-teddy work
// const Buffer = require('buffer').Buffer;
// const write = require('./write.js');

// module.exports = exports = {};

// exports.grayscale = function (newFile, readData) {
//   let offset = readData.readUInt32LE(10);
//   let colorArr = readData.slice(54, offset);
//   for (let i = 0; i < colorArr.length; i+=4){
//     let avgVal = ((colorArr[i] + colorArr[i + 1] + colorArr[i + 2]) / 3);
//     readData.writeUInt32LE(colorArr[i], avgVal);
//     readData.writeUInt32LE(colorArr[i + 1], avgVal);
//     readData.writeUInt32LE(colorArr[i + 2], avgVal);
//   }
//   write(newFile, readData);
// };

// exports.invert = function(newFile, readData) {
//
// }
//
// exports.scaleColor = function(newFile, readData) {
//
// }
