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

// 1. open file using fs and read it into a buffer.
// 2. convert buffer headers data into a Javascript Object (using constructors)
// 3. Run a transform on the buffer directly
// 4. Write the buffer to a new file.

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




