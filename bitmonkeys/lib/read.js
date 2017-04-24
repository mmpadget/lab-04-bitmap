'use strict';

const fs = require('fs');
const Bitmap = require('../model/constructor.js');

module.exports = exports = {};

exports.readBit = function(filepath, newFile, callback){
  fs.readFile(`${__dirname}/../../assets/${filepath}`, function(err, data){
    if (err) throw err;
    let bitmap = new Bitmap(data);
    callback(newFile, bitmap);
  });
};
