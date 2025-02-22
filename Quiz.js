const arr = [1, 2, 3];
const [x, y] = arr;
console.log(y);
// Respuesta 2

let q = 5;
let p = q++;
console.log(p);
// Respuesta 5

console.log(typeof null);
// Respuesta object

let a = {};
let b = a;
console.log(a === b);
// Respuesta true

console.log(typeof NaN);
// Respuesta number

console.log(0 == '0');
// Respuesta true

console.log(1 + '1' - 1);
// Respuesta 10

let m = [1, 2, 3];
let n = m;
n.push(4);
console.log(m);
// Respuesta [1, 2, 3, 4]

console.log([] == false);
// Respuesta true
let z = 10;
(function() {
  console.log(z);
  let z = 20;
})();
// Respuesta ReferenceError


// Hola