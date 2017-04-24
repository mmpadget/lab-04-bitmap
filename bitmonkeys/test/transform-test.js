'use strict';

const expect = require('chai').expect;
const file = require('chai-files').file;
const xform = require('../lib/transform.js');
const read = require('../lib/read.js');

// test that we arre creating a new bitmap
describe('write new grayscale file', function(){
  it('should write a new gray scale copy of the bitmap', done =>{
    read.readBit('bitmap.bmp', 'newBMPgray.bmp', xform.grayscale);
    expect(file('newBMPgray.bmp')).to.exist;
    done();
  });
});

describe('write new inverted file', function(){
  it('should write a new inverted copy of the bitmap', done =>{
    read.readBit('bitmap.bmp', 'newBMPinvert.bmp', xform.invert);
    expect(file('newBMPinvert.bmp')).to.exist;
    done();
  });
});

describe('write new scaled color file', function(){
  it('should write a new scaled color copy of the bitmap', done =>{
    read.readBit('bitmap.bmp', 'newBMPscale.bmp', xform.scaleRed);
    expect(file('newBMPscale.bmp')).to.exist;
    done();
  });
});
