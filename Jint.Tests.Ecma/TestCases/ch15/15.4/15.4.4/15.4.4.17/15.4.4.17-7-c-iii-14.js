/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.17/15.4.4.17-7-c-iii-14.js
 * @description Array.prototype.some - return value of callbackfn is a non-empty string
 */


function testcase() {

        function callbackfn(val, idx, obj) {
            return "non-empty string";
        }

        return [11].some(callbackfn);
    }
runTestCase(testcase);
