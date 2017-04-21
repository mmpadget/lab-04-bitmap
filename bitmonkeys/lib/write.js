'use strict';

const fs = require('fs');
const read = require('./read.js');
let newData = read.newData;
// read.newData = newData;

module.exports.writeStuff = function() {
  fs.writeFile(`${__dirname}/text.txt`, newData, function(err) {
    // Creates text file if it doesn't exist or uses existing file.
    console.log('Wrote to file');
    console.log('This is new write data: >>>> ', newData);
    if(err) throw err;
  });
};
