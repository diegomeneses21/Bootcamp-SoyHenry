// function sumar(num) {
//     var tot = 0;
//     for (var i = 1; i <= num; i++) {
//         tot += i;
//     }
//     return tot;
// }
// sumar(5); // 15

// function sumar (num, tot = 0) {
//     if(num <= 0) return tot;
//     tot+=num;
//     num--;
//     return sumar(num, tot); 
// }
// console.log(sumar(5));

// function esNatural(num) {
//     if (num === 0) return true
//     if(num < 0) return false
//     return esNatural(num - 1)
// }
// console.log(esNatural(1));

// var arreglo = [1, 2, 3, 4, 4, 5, 5, 1, 2]
// var set1 = new Set(arreglo)
// console.log(arreglo)
// console.log(set1)

// var stack = [];
// stack.push(1);       // la pila es [1]
// stack.push(10);      // la pila es ahora [1, 10]
// var i = stack.pop(); // la pila [1]
// console.log(i);

// var queue = [];
// queue.push(1);         // la cola es [1]
// queue.push(2);         // la cola es [1, 2]
// var i = queue.shift(); // la cola es [2]
// console.log(i);

