'use strict';

const fs = require('fs');
const write = require('./write.js');
// let newData = [];
// module.exports.newData = newData;]

module.exports = exports = {};
let newData = [];
exports.newData = newData;

function readStuff() {
  fs.readFile(`${__dirname}/text-example.txt`, function(err, data) {
    console.log('Read file');
    if(err) throw err;
    // console.log(data.toString());
    // newData = data.toString();
    newData.push(data.toString());
    newData += '\n\nMore new text...';
    // console.log('This is new read data: ', newData);
    // Replaces existing newData text in text.txt.
    write.writeStuff();
  });
}
readStuff();

// This text represents a bit map image.



// Example
// fs.rename('/tmp/hello', '/tmp/world', (err) => {
//   if (err) throw err;
//   fs.stat('/tmp/world', (err, stats) => {
//     if (err) throw err;
//     console.log(`stats: ${JSON.stringify(stats)}`);
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
