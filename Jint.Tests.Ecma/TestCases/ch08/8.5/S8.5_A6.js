// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * -Infinity expression has a type Number
 *
 * @path ch08/8.5/S8.5_A6.js
 * @description Check type of -Infinity
 */

var x=-Infinity;

///////////////////////////////////////////////////////
// CHECK#1
if (typeof(x) !== "number"){
  $ERROR('#1: var x=-Infinity; typeof(x) === "number". Actual: ' + (typeof(x)));
}
//
//////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// CHECK#2
if (typeof(-Infinity) !== "number"){
  $ERROR('#2: typeof(-Infinity) === "number". Actual: ' + (typeof(-Infinity)));
}
//
//////////////////////////////////////////////////////////

