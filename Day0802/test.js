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

// ?????i v???i Obj ho???c Array th?? ???????c l??u d?????i d???ng tham chi???u,
// c?? ngh??a l?? n?? s??? l??u ?????a ch??? n??i gi??? gi?? tr??? c???a m???ng ho???c obj ????.
// V?? khi m??nh g??n m???t bi???n b???t k?? v???i bi???n obj ho???c array m?? m??nh ???? khai b??o tr?????c ????,
// th?? bi???n ???????c gh??p s??? ???????c coppy ?????a ch??? ?? nh???

//vi du

//Tham tri

let a1 = 5;
let b1 = a1; // b1 = 5
a1 = 10;
console.log(b1); // b1 = 5 . D?? cho a1 ???? thay ?????i th??nh 10.

//tham chi???u obj

const obj11 = { name: "Sala" };
const obj12 = obj11;
obj11.name = "Hanna";
console.log(obj12.name); // Hanna

//Truy???n tham s??? d???ng tham tr??? :  pass by value
// Khi truy???n tham s??? d???ng tham tr??? v??o trong m???t h??m th?? th???c ch???t trong h??m s??? t???o ra m???t bi???n
// r???i g??n b???ng tham s??? truy???n v??o v?? c??ng do t??nh ch???t c???a tham tr??? n??n trong h??m c?? thay ?????i th??? n??o
// th?? gi?? tr??? truy???n v??o b??n ngo??i c??ng kh??ng ???nh h?????ng
function fn1(number) {
  number = 10;
}
const a12 = 5;
// const aa = a
fn1(a12);
console.log(a12); // a = 5

//Truy???n tham s??? d???ng tham chi???u :  pass by reference
// Vi???c g??n trong h??m l?? g??n ?????a ch??? ?? nh???, khi th???c hi???n thay ?????i th?? gi?? tr??? c???a ?? nh??? c??ng
// thay ?????i v?? aa c??ng ch??? ?????n ?? nh??? ???? n??n khi h??m ???????c ch???y th?? gi?? tr??? c???a aa b??n ngo??i
// c??ng ???????c thay ?????i theo
function fn2(obj) {
  obj.name = "Hanna";
}
const aa = { name: "Joo" };
fn2(aa);
console.log(aa.name); // Hanna

//Ng???n g???n th?? tham tr??? ch??a gi?? tr???(M???y ki???u d??? li???u ????n gi???n )
//Tham chi???u ch???a ?????a ch??? (Ki???u d??? li???u ph???c t???p nh?? obj or array)

//S??? dung ES6 spread operator ????? tr??nh b??? tham chi???u

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
hs2.point = 6; // ??i???m s??? c???a hs2 , hs3, hs4 ???? ???????c thay ?????i
console.log("Danh sach HsTb : ", HsTB);
console.log("Danh sach HsK : ", HsK);
console.log("Danh sach HsG : ", HsG);
console.log(yourClass);
