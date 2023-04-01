function FindNeedle(haystack, needle) {
  // Your code here:
  for (let i = 0; i < haystack.length; i++) {
 
    if (needle[0] === haystack[i] && needle.length <= haystack.length - i ) {
      for (let j = 1; j < needle.length; j++) {
        if(needle.length - 1 === j){
          return i;
        }
        if(needle[j] !== haystack[i + j]) {
          break;
        }
      }
    }
  }
  return -1;
}
console.log(FindNeedle("react-redux", "redux"));

// function FindNeedle(haystack, needle) {
//   let sizeNeedle = needle.length;
//   for (let i = 0; i < haystack.length; i++) {
//     if(needle[0] === haystack[i]){
//       if(haystack.slice(i, i + sizeNeedle) === needle){
//         return i;
//       }
//     }
//   }
//   return -1;
// }
// console.log(FindNeedle("react-redux", "redux"));

/*

*/

module.exports = FindNeedle
