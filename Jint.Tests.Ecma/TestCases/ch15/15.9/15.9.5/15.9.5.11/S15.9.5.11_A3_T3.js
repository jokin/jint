// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype.getUTCFullYear property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.11/S15.9.5.11_A3_T3.js
 * @description Checking DontEnum attribute
 */

if (Date.prototype.getUTCFullYear.propertyIsEnumerable('length')) {
  $ERROR('#1: The Date.prototype.getUTCFullYear.length property has the attribute DontEnum');
}

for(x in Date.prototype.getUTCFullYear) {
  if(x === "length") {
    $ERROR('#2: The Date.prototype.getUTCFullYear.length has the attribute DontEnum');
  }
}


