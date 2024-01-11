let a = [1, 2, 3];

let b;

// b = a.slice();
b = [...a];

b.push("newElement");

console.log(a);

console.log(b);
