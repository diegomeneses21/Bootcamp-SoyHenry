'use strict'

// 1010
function BinarioADecimal(num) {
  // tu codigo aca

  var decimal = 0;
  num = num.toString();
  var count = num.length - 1;
  // for (i = 0; i < 4; i++)
  for (let i = 0; i < num.length; i++) {
    // decimal = 1 * ( 2 ** 4 - 1 - 0) = 16
    //         = 0 
    //         = 1 * ( 2 ** 4 - 1 - 2) = 2
    //         = 0 
    console.log(num[i]);
    // decimal += num[i] * Math.pow(2, count);
    // count--;
    decimal += num[i] * 2 ** (num.length - 1 - i);
  }
  return decimal;
}
console.log(BinarioADecimal(1010));

//                        7
function DecimalABinario(num) {
  // tu codigo aca

  var result = "";
  while (num > 0) {
    result = num % 2 + result;
    num = Math.floor(num / 2)
  }
  return result;
}
console.log(DecimalABinario(10))


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}