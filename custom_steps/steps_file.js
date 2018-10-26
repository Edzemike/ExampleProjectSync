
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    clickSomeElement(elementSelector){
        this.click(elementSelector);
    }
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
