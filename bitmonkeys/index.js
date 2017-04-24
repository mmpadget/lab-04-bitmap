'use strict';

const read = require('./lib/read.js');
const xform = require('./lib/transform.js');

read.readBit('bitmap.bmp', 'newBMPgray.bmp', xform.grayscale);
read.readBit('bitmap.bmp', 'newBMPinvert.bmp', xform.invert);
read.readBit('bitmap.bmp', 'newBMPRed.bmp', xform.scaleRed);
read.readBit('bitmap.bmp', 'newBMPGreen.bmp', xform.scaleGreen);
read.readBit('bitmap.bmp', 'newBMPBlue.bmp', xform.scaleBlue);
