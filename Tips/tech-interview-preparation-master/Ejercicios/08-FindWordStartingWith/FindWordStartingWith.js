const book = {
  id: 1,
  text:
    'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
}

function FindWordStartingWith (book, query) {
  // Your code here:

  const separators = {
    " ": true,
    ".": true,
    ",": true
  }

  const text = book.text.toLowerCase();
  const str =  query.toLowerCase();

  const result = []

  for (let i = 0; i < text.length; i++) {
    if(separators[text[i]]) continue
    else{
      if(text[i] === str[0] && separators[text[i-1]]){
        if(text.slice(i, i + str.length) === str){
          result.push(i)
        }
      }
    }
  }
  return result;
}

console.log("Hola");
console.log(FindWordStartingWith(book, "un"));

module.exports = FindWordStartingWith


/*

hashDictionary
{
  a: data
  b: masdata
}

{
  1: data
  2: masdata
}

stack []
queue []

recursividad

*/
