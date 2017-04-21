'use strict';

const read = require('./lib/read.js');
const write = require('./lib/write.js');
const fs = require('fs');

// read.readBit('bitmap.bmp');
read.readBit('bitmap.bmp', 'newBMP.bmp');
