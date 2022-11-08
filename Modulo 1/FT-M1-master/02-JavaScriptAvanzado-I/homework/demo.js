x = 1;

function foo(y) {
    let x = 2;
    return y + x;
}

console.log(2 + x);
console.log(foo(2));

function printing() {
    console.log(1);
    setTimeout(function () { console.log(2); }, 1000);
    setTimeout(function () { console.log(3); }, 0);
    console.log(4);
}

printing();