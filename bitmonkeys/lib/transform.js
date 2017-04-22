'use strict';

const fs = require('fs');
const Buffer = require('buffer').Buffer;
const write = require('./write.js');

module.exports = exports = {};

exports.grayscale = function (newFile, readData) {
  let offset = readData.readUInt32LE(10);
  let colorArr = readData.slice(54, offset);
  for (let i = 0; i < colorArr.length; i+=4){
    let avgVal = ((colorArr[i] + colorArr[i + 1] + colorArr[i + 2]) / 3);
    readData.writeUInt32LE(colorArr[i], avgVal);
    readData.writeUInt32LE(colorArr[i + 1], avgVal);
    readData.writeUInt32LE(colorArr[i + 2], avgVal);
  }
  write(newFile, readData);
};

// exports.invert = function(newFile, readData) {
//
// }
//
// exports.scaleColor = function(newFile, readData) {
//
// }
