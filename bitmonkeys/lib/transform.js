'use strict';

const write = require('./write.js');

// 2. convert buffer headers data into a Javascript Object (using constructors)

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

exports.scaleGreen = function(newFile, readData) {
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

exports.scaleRed = function(newFile, readData) {
  let offset = readData.readUInt32LE(10);
  let colorArr = readData.slice(54, offset);
  for (let i = 0; i < colorArr.length; i+=4){
    if (colorArr[i + 2] * 3 >= 255) {
      colorArr[i + 2] = 255;
    } else {
      colorArr[i + 2] = colorArr[i + 2] * 3;
    }
  }
  write(newFile, readData);
};

exports.scaleBlue = function(newFile, readData) {
  let offset = readData.readUInt32LE(10);
  let colorArr = readData.slice(54, offset);
  for (let i = 0; i < colorArr.length; i+=4){
    if (colorArr[i] * 3 >= 255) {
      colorArr[i] = 255;
    } else {
      colorArr[i] = colorArr[i] * 3;
    }
  }
  write(newFile, readData);
};
