// acciones: [4, 3, 2, 5, 11]
// mayor ganancia: 9

// function MaxValue(shares) {
//   // Your code here:
//   console.log('---------> ',shares);
//   const arr = shares.sort((a,b) => a-b);

//   return arr[arr.length-1] - arr[0];
// }

// function MaxValue(shares) {
//   // Your code here:
//   let min = shares[0];
//   let max = 0
//   for (let i = 0; i < shares.length - 1; i++) {
//     for (let j = i + 1; j < shares.length; j++) {
//       if (shares[j] < shares[i]) {
//         min = shares[j];
//       }
//       if (shares[j] > shares[i]) {
//         max = shares[j];
//       }
//     }
//   }
//   return max - min;
// }

// en un momento y vender en otro posterior <- el sort

// function MaxValue(shares) {
//   // Your code here:
//   let max = 0;                              //  i    j
//   for (let i = 0; i < shares.length; i++) {// [23,7,3,4,8,6]
//     for (let j = i + 1; j < shares.length; j++) {
//       if (shares[i] < shares[j]) {
//         const max2 = shares[j] - shares[i];
//         max = max2 > max ? max2 : max;
//       }
//     }
//   }
//   return max;
// }
// O n^2

// function MaxValue(shares) {
//   // Your code here:
//   // Your code here:
//   let abs = 0;
//   for (let i = 0; i < shares.length-1; i++) {
//     let max = 0;
//     for (let j = i+1; j < shares.length; j++) {
//       shares[j] > shares[i] && shares[j] > max ? (max = shares[j]) : null;
//     }
//     const diff = max - shares[i];
//     diff > abs ? (abs = diff) : null;
//   }

//   return abs;
// }

// O n
function MaxValue(shares) {
  // Your code here:
  let minPrecio = shares[0];                // 3
  let diffMax = 0;                          //                i
  for (let i = 1; i < shares.length; i++) { // [23, 7, 200, 3, 4, 8, 6]
    if (shares[i] - minPrecio > diffMax) {
      diffMax = shares[i] - minPrecio;
    }
    if (minPrecio > shares[i]) {
      minPrecio = shares[i];
    }
  }
  return diffMax;
}

// function MaxValue(arr) {
// let minPrecio = arr[0];
//   let maxDif = -Infinity;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] - minPrecio > maxDif) {
//       maxDif = arr[i] - minPrecio;
//     }
//     if (arr[i] < minPrecio) {
//       minPrecio = arr[i];
//     }
//   }
//   return maxDif;
// }

// console.log(MaxValue([4, 3, 2, 5, 11])); // 9
// console.log(MaxValue([23, 7, 200, 3, 4, 8, 6])); // 5 NO  -> 193

// module.exports = MaxValue;

/*
function maxValue(arr) {
  let minPrecio = arr[0];
  let maxDif = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minPrecio) {
      minPrecio = arr[i];
    }
    maxDif = Math.max(maxDif, arr[i] - minPrecio);
  }
  return maxDif;
​
*/

console.log(MaxValue([4, 3, 2, 5, 11])); // 9
console.log(MaxValue([4, 3, 5, 11, 20])); // 17


module.exports = MaxValue
