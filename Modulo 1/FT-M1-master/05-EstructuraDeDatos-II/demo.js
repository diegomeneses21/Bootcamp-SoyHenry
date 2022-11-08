
function Node(data) {
    this.data = data;
    this.next = null;
}

function LinkedList() {
    this._length = 0;
    this.head = null;
}

LinkedList.prototype.add = function(data) {
    var node = new Node(data),
    current = this.head;
    // Si está vacia
    if (!current) {
        this.head = node;
        this._length++;
        return node;
    }
    // Si no esta vacia, recorro hasta encontrar el último
    while (current.next) {
        current = current.next;
    }
    current.next = node;
    this._length++;
    return node;
};

let lista1 = new LinkedList();
console.log(lista1);
console.log(lista1.add('Hola1'));
console.log(lista1.add('Hola2'));
// console.log(lista1.add('Hola3'));
console.log(lista1);

// LinkedList.prototype.getAll = function(){
//     current = this.head //empezamos en la cabeza
//     if(!current){
//         console.log('La lista esta vacia!')
//         return
//     }
//     while(current){
//         console.log(current.data);
//         current = current.next;
//     }
//     return
// };

// lista1.getAll()

