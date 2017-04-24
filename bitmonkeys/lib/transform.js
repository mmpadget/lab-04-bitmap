'use strict';

const write = require('./write.js');

module.exports = exports = {};

exports.grayscale = function (newFile, bitmap) {
  for (let i = 0; i < bitmap.colorArr.length; i+=4){
    let avgVal = ((bitmap.colorArr[i] + bitmap.colorArr[i + 1] + bitmap.colorArr[i + 2]) / 3);
    bitmap.colorArr[i] = bitmap.colorArr[i + 1] = bitmap.colorArr[i + 2] = avgVal;
  }
  write(newFile, bitmap.buffer);
};

exports.invert = function(newFile, bitmap) {
  for (let i = 0; i < bitmap.colorArr.length; i+=4){
    bitmap.colorArr[i] = 255 - bitmap.colorArr[i];
    bitmap.colorArr[i + 1] = 255 - bitmap.colorArr[i + 1];
    bitmap.colorArr[i + 2] = 255 - bitmap.colorArr[i + 2];
  }
  write(newFile, bitmap.buffer);
};

exports.scaleGreen = function(newFile, bitmap) {
  for (let i = 0; i < bitmap.colorArr.length; i+=4){
    if (bitmap.colorArr[i + 1] * 3 >= 255) {
      bitmap.colorArr[i + 1] = 255;
    } else {
      bitmap.colorArr[i + 1] = bitmap.colorArr[i +1] * 3;
    }
  }
  write(newFile, bitmap.buffer);
};

exports.scaleRed = function(newFile, bitmap) {
  for (let i = 0; i < bitmap.colorArr.length; i+=4){
    if (bitmap.colorArr[i + 2] * 3 >= 255) {
      bitmap.colorArr[i + 2] = 255;
    } else {
      bitmap.colorArr[i + 2] = bitmap.colorArr[i + 2] * 3;
    }
  }
  write(newFile, bitmap.buffer);
};

exports.scaleBlue = function(newFile, bitmap) {
  for (let i = 0; i < bitmap.colorArr.length; i+=4){
    if (bitmap.colorArr[i] * 3 >= 255) {
      bitmap.colorArr[i] = 255;
    } else {
      bitmap.colorArr[i] = bitmap.colorArr[i] * 3;
    }
  }
  write(newFile, bitmap.buffer);
};
