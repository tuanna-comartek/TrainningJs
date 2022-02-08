//Operators

let a = 3;
let b = 4;
let c = a + b;
console.log(c);
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
console.log("Compare ==", ab == ac); // check datatype of variable.
console.log("Compare ===", ab === ac); //checks datatype and compares two values
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

//_________loops________

//for
const myArray = [4234, "abc", 123, "asdas", 99];
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}

//while
let text = "";
let i = 0;
while (i < 10) {
  console.log((text += "The number is " + i));
  i++;
}

//do while
let text2 = "";
let y = 0;
do {
  console.log((text2 += "The number is " + y));
  y++;
} while (y < 10);

// //Compare Object cach 1
// const user1 = {
//   name: "Joo",
//   age: 28,
//   obj1: { lastName: "Tuan", tall: undefined },
// };
// const user2 = { name: "Joo", age: 28, obj1: { lastName: "Tuan", tall: null } };
// console.log("So sanh Object", JSON.stringify(user1) === JSON.stringify(user2));
// console.log("user", JSON.stringify(user1));

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

//switch
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    break;
}
console.log(day);

//compare array

const array1 = [2, 4, 6, 8];
const array2 = [2, 4, 6, 10];

console.log(array1.toString() === array2.toString());
console.log(array1.toString());

//if else
let days;
if (new Date().getDay / 2 === 0) {
  alert("Hnay la ngay chan ! ");
} else {
  alert("Hnay la ngay le !");
}

//function

function fcn(a, b) {
  return a * b;
}
console.log(fcn(6, 7));
