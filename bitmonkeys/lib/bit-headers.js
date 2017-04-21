'use strict';

const fs = require('fs');
const Buffer = require('buffer').Buffer;
const bitmap = fs.readFileSync(`${__dirname}/../../assets/bitmap.bmp`);



module.exports = exports = {};

exports.bmp = {};


// exports.bmp.spec = bitmap.toString('utf-8', 0, 2);
// exports.bmp.fileSize = bitmap.readUInt32LE(2);
// exports.bmp.width = bitmap.readUInt32LE(18);
// exports.bmp.height =

exports.readHeader = function(filepath){
  fs.readFile(`${__dirname}/../../assets/${filepath}`, function(err, data){
    if (err) throw err;
    console.log(data.readUIntLE('utf-8', 0, 14));
  });
};
console.log('bitmap', bitmap.toString('utf-8', 0, 2));
console.log('bmp', exports.bmp);
// exports.readHeader('bitmap.bmp');
