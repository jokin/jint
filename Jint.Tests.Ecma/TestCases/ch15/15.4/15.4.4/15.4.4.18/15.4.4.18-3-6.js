/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.18/15.4.4.18-3-6.js
 * @description Array.prototype.forEach - value of 'length' is a number (value is positive)
 */


function testcase() {

        var testResult1 = false;

        function callbackfn(val, idx, obj) {
            testResult1 = (val > 10);
        }

        var obj = { 1: 11, 2: 9, length: 2 };

        Array.prototype.forEach.call(obj, callbackfn);

        return testResult1;
    }
runTestCase(testcase);
