/**
*
* node.js - setup file for our server side testing
*					sets up globals and babilification
*
**/

global.chai = require('chai');
global.sinon = require('sinon');
global.chai.use(require('sinon-chai'));
global.expect = global.chai.expect;

require('babel/register');
