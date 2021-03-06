/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-10-3.js
 * @description Array.prototype.reduceRight - subclassed array with length 1
 */


function testcase() {
  foo.prototype = [1];
  function foo() {}
  var f = new foo();
  
  function cb(){}
  if(f.reduceRight(cb) === 1)
    return true;
 }
runTestCase(testcase);
