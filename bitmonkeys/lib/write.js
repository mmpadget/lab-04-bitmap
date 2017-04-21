'use strict';

const fs = require('fs');

module.exports = function(newFile, newData){
  fs.writeFile(`${__dirname}/../data/${newFile}`, newData, function(err){
    if (err) throw err;
  });
};
