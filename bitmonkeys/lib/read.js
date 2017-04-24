'use strict';

const fs = require('fs');
// const write = require('./write.js');
// const xform = require('./transform.js');
// const Buffer = require('buffer').Buffer;

module.exports = exports = {};

exports.bmp = {};

exports.readBit = function(filepath, newFile, callback){
  fs.readFile(`${__dirname}/../../assets/${filepath}`, function(err, data){
    if (err) throw err;
    // transform(parameters) do we do this and move write to the end of the transforms???
    // write(newFile, data);
    callback(newFile, data);
  });
};



// Example
// fs.rename('/tmp/hello', '/tmp/world', (err) => {
//   if (err) throw err;
//   fs.stat('/tmp/world', (err, stats) => {
//     if (err) throw err;
//     console.log(`stats: ${JSON.stringify(stats)}`);
//   });
// });



// fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
//   console.log('Read file');
//   if(err) throw err;
//   console.log(data.toString());
//   let newData = data.toString();
//   newData += '\n\nMore new text...';
//   // Replaces existing newData text in text.txt.
//
//   fs.writeFile(`${__dirname}/../data/text.txt`, newData, function(err) {
//     // Creates text file if it doesn't exist or uses existing file.
//     console.log('Wrote to file');
//     if(err) throw err;
//   });
// });

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
