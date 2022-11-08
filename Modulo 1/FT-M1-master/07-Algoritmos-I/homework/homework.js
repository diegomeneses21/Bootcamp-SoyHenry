'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  var array = [1];
  var primo = 2;
  while (num !== 1) {
    if (num % primo === 0) {
      array.push(primo);
      num /= primo;
    } else {
      primo++;
    }
  }
  return array;


}
console.log(factorear(120))

// let array = [6, 2];
// array.forEach(function (elem) {
//   array.forEach(function (elemdos) {
//     console.log(elem * elemdos);
//   })
// })

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  }
  return array;
}
// const paresDesorden = [6, 2, 4, 8, 10, 2, 18, 6, 22, 20];
// const paresOrden = bubbleSort(paresDesorden);
// console.log(paresOrden);


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (var i = 1; i < array.length; i++) {
    var j = i - 1;
    var aux = array[i] // 1
    while (j >= 0 && array[j] > aux) {
      // 5
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = aux
  }
  return array

}

// const paresDesorden = [6, 2, 4, 8, 10, 2, 18, 6, 22, 20];
// const paresOrden = insertionSort(paresDesorden);
// console.log(paresOrden);

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (var i = 0; i < array.length - 1; i++) {
    let min = i
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        //cambio la posicion
        min = j
      }
    }
    //cambio los valores
    var aux = array[i]
    array[i] = array[min]
    array[min] = aux

  }
  return array

}
const paresDesorden = [6, 2, 4, 8, 10, 2, 18, 6, 22, 20];
const paresOrden = selectionSort(paresDesorden);
console.log(paresOrden);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
