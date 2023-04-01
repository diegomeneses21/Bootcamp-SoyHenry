function DecimalToBynary (num) {
  // Your code here:
  
  // "1" * 2 = 1
  // "" + 2 = "2"

  let str = "";

  while(num){
    str = str + num % 2;
  }
  if(num === 0) console.log("woo");

  return str;

}

/*
pokemon {name: }

let pokeArr = Object.keys(pokemon) -> ["id"]
{pokeArr?.length > 0 ? <p> <p> : null}

{pokemon?.name ? <p> <p> : null}
*/

console.log(DecimalToBynary(4)); // 100
console.log(DecimalToBynary(7)); // 111

module.exports = DecimalToBynary
