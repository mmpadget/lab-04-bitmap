'use strict';

module.exports = function(data) {
  this.offset = data.readUInt32LE(10);
  this.colorArr = data.slice(54, this.offset);
  this.buffer = data;
};
