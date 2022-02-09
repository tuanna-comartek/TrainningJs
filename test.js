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
//vd1

// Đối với Obj hoặc Array thì được lưu dưới dạng tham chiếu,
// có nghĩa là nó sẽ lưu địa chỉ nơi giữ giá trị của mảng hoặc obj đó.
// Và khi mình gán một biến bất kì với biến obj hoặc array mà mình đã khai báo trước đó,
// thì biến được ghép sẽ được coppy đỉa chỉ ô nhớ

//vi du

//Tham tri

let a1 = 5;
let b1 = a1; // b1 = 5
a1 = 10;
console.log(b1); // b1 = 5 . Dù cho a1 đã thay đổi thành 10.

//tham chiếu obj

const obj11 = { name: "Sala" };
const obj12 = obj11;
obj11.name = "Hanna";
console.log(obj12.name); // Hanna

//Truyền tham số dạng tham trị :  pass by value
function fn1(number) {
  number = 10;
}
const a12 = 5;
// const aa = a
fn1(a12);
console.log(a12); // a = 5

//Truyền tham số dạng tham chiếu :  pass by reference
function fn2(obj) {
  obj.name = "Hanna";
}
const aa = { name: "Joo" };
fn2(aa);
console.log(aa.name); // Hanna

//Ngắn gọn thì tham trị chưa giá trị(Mấy kiểu dữ liệu đơn giản )
//Tham chiếu chứa địa chỉ (Kiểu dữ liệu phức tạp như obj or array)

//Sử dung ES6 spread operator để tránh bị tham chiếu

const xx = { name: "Kaka" };
const XX1 = { ...xx };
xx.name = "He he";
console.log(XX1.name);

const zz = [1, 2, 3];
const zz1 = [...zz];
zz.push(4);
console.log(zz1);
console.log(zz);

//Example student reference
const hs1 = { point: 7, name: "hs1" };
const hs2 = { point: 5, name: "hs2" };
const hs3 = { point: 9, name: "hs3" };
const hs4 = { point: 8, name: "hs4" };

const yourClass = [hs1, hs2, hs3, hs4];

// const classes = yourClass;
const HsTB = [];
const HsK = [];
const HsG = [];
function xepHangHs() {
  return yourClass.forEach((std) => {
    if (std.point >= 5 && std.point < 7) {
      HsTB.push(std);
      console.log("HS trung binh la : ", std.name);
    }
    if (std.point >= 7 && std.point < 9) {
      HsK.push(std);
      console.log("HS  Kha la :", std.name);
    }
    if (std.point >= 9) {
      HsG.push(std);
      console.log("HS  Gioi la :", std.name);
    }
  });
}
xepHangHs();
console.log("Danh sach HsTb : ", HsTB);
console.log("Danh sach HsK : ", HsK);
console.log("Danh sach HsG : ", HsG);

hs4.point = 6;
hs3.point = 6;
hs2.point = 6; // Điểm số của hs2 , hs3, hs4 đã được thay đổi
console.log("Danh sach HsTb : ", HsTB);
console.log("Danh sach HsK : ", HsK);
console.log("Danh sach HsG : ", HsG);
console.log(yourClass);
