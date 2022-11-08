var persona = {
    nombre: 'Franco',
    apellido: 'Chequer',

    getNombre: function () {
        var nombreCompleto = this.nombre + ' ' + this.apellido;
        return nombreCompleto;
    }
}

// var logNombre = function () {
//     console.log(this.getNombre());
// }

// // persona.getNombre();
// // console.log(logNombre());

// var logNombrePersona = logNombre.bind(persona);
// logNombrePersona();

// logNombre.call(persona);

// var logNombre = function (arg1, arg2) {
//     console.log(arg1 + ' ' + this.getNombre() + ' ' + arg2);
// }

//              this,    arg1,     arg2
// logNombre.call(persona, 'Hola', ', Cómo estas?');

//              this,    [ arg1,     arg2         ]
// logNombre.apply(persona, ['Hola', ', Cómo estas?']); 

var persona2 = {
    nombre: 'Manu',
    apellido: 'Barna'
};

persona.getNombre.call(persona2); // Manu Barna

function multiplica(a, b) {
    return a * b;
}

var multiplicaPorDos = multiplica.bind(this, 2);
console.log(multiplicaPorDos(3)); // 6
