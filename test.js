let a = 3;
let b = 4;
const c = a + b;
console.log(c);
// var b = null;
console.log(b);
console.log("Addition", (a += b));
console.log("SubTracTion", (a -= b));
console.log("Multiplication", (a *= b));
console.log("Division", (a /= b));
console.log("Modulus", (a %= b));
let k = 8;
console.log("Increment", k++);
console.log("Decrement", k--);
console.log(b);
console.log("aaaa", a);
console.log(a === b);
console.log(a == b);
console.log((a = b));

//Tim hieu compare
let ab = 8;
let ac = "8";
console.log("Compare ==", ab == ac);
console.log("Compare ===", ab === ac);
console.log("Compare !=", ab != ac);
console.log("Compare !==", ab !== ac);

//tim hieu typeof
console.log("typeof number ab : ", typeof ab);
console.log("typeof string ac  : ", typeof ac);
console.log("typeof null  : ", typeof null);
console.log("typeof undefined  : ", typeof undefined);
console.log("asasds");

//Tim hieu instanceof
function Car(color, year, type) {
  (this.color = color), (this.year = year), (this.type = type);
}
const auto = new Car("Black", 2022, "BMW");

console.log(auto);
console.log(auto instanceof Car);

//su dung for
const myArray = [4234, "abc", 123, "asdas", 99];
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}

//su sung while
let text = "";
var i = 0;
while (i < 10) {
  console.log((text += "The number is " + i));
  i++;
}

//Su dung do while
let text2 = "";
var i = 0;
do {
  console.log((text2 += "The number is " + i));
  i++;
} while (i < 10);

//So sanh 2 Object
var user1 = { name: "Tuan", age: 28 };
var user2 = { name: "Tuan", age: 28 };
console.log(JSON.stringify(user1) === JSON.stringify(user2));

//Tinh tong gia tri trong mang
const listNumber = [100, 200, 300];
const total = listNumber.reduce((total, cur) => total + cur);
console.log(total);

//data Type

let x;
console.log(x); //Undefined

let x1 = null;
console.log(x1); //Null

let x2 = 8;
console.log(x2); // Number

let x3 = "tam";
console.log(x3); //String

const x4 = {};
console.log(x4); // Object
