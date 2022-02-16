/*______________________________________ Start Javacipt_Basic ______________________________________*/

/*_______Scope_______ */
//Concept:
//Scope : Phạm vi truy cập
//Scopes được tạo ra bởi code blocks, functions, modules
//Các loại scope :  Global Scope, Local scope,  Lexical Scope, Scope Chain
// + Global scope
// + Example:
const name = "Duy Buffet";

// + Local scope
// + Example:
const function1 = function () {
  //Local scope in here
  const name = "Duy";
  console.log(name); // Duy
};

// + Lexical Scope
// + Example :
//Scope thứ nhất
const function2 = function () {
  // Scope thứ hai
  const name = "Duy"; // định nghĩa trong scope thứ hai
  const ortherfunction2 = function () {
    // Scope thứ ba : `name`vẫn có thể được truy cập đến từ đây!!
    console.log("My name is " + name);
  };
  console.log(name);
  ortherfunction2();
};

// + Scope Chain
// + Example :
let text4;
function b() {
  console.log(text4);
}
function a() {
  const text5 = "in a";
  b();
}
a();
text4 = "in gloal";

// + Khái niệm Closures : làm cho scope của ta không thể tiếp cận được public scope.
// + Chỉ gọi function sẽ không thực hiện gì bởi nó trả về kết quả là tham chiếu tới function.
// + Không nhất thiết phải trả về function mới được gọi là closure.
// + Đơn giản chỉ cần truy cập tới biến nằm ngoài Lexical scope cũng là closure
// + Example:
const sayHello = function (name) {
  const text = "Hello, " + name;
  return function () {
    console.log(text);
  };
};
sayHello("Tuấn"); // Không có gì xảy ra
//Để phương thức hoạt động ta cần gán nó vào biến rồi mới thực thi
const helloMethod = sayHello("Tuấn");
helloMethod(); // Hello Tuấn

/*_______Scope_______ */

/*_______Floating point_______ */
//Example
// Tại sao cần Floating point?
// - Do bộ nhớ máy tính là có hạn, ta không thể lưu con số với độ chính xác tuyệt đối.
// - Tùy từng trường hợp, chip sẽ được thiết kế để tính toán với độ chính xác khác nhau
// - Có thể sử dụng các thư viện bigjs, decimaljs, numeraljs, ... để có được kết quả
// chính xác, tuy nhiên sẽ làm giảm hiệu suất của ứng dụng
console.log(1.2 + 2.2); //3.4000000000000004 (Kết quả mong đợi: 3.4)
console.log(3.6 * 1.3); //4.680000000000001 (Kết quả mong đợi: 4.68)
console.log(6.6 / 3); //2.1999999999999997 (Kết quả mong đợi: 2.2)
/**
 * Trường hợp phép giao hoán cho kết quả khác nhau do lỗi Floating point
 */
const ak47 = 43.57;
const bk47 = 5.33;
const ck47 = 3.05;
console.log(ak47 + bk47 + ck47); //51.949999999999996 (Kết quả mong đợi: 51.95)
console.log(ck47 + bk47 + ak47); //51.95 (Kết quả mong đợi: 51.95)
/**
 * Hàm xử lý ngoại lệ Floating point
 * @param number - Số bị lỗi do ngoại lệ Floating point
 * @return - Số đã được sửa ngoại lệ Floating point
 */
function strip(number) {
  return parseFloat(number).toPrecision(12);
}
console.log(strip(1.2 + 2.2));
/**
 * So sánh các phương thức làm tròn số
 * - ceil: luôn làm tròn lên
 * - floor: luôn làm tròn xuống
 * - round: làm tròn dựa trên 0.5
 * - trunc: bỏ phần thập phân
 */
console.log(Math.ceil(0.1)); //1
console.log(Math.ceil(0.8)); //1
console.log(Math.ceil(-0.1)); //-0
console.log(Math.ceil(-0.8)); //-0

console.log(Math.floor(0.1)); //0
console.log(Math.floor(0.8)); //0
console.log(Math.floor(-0.1)); //-1
console.log(Math.floor(-0.8)); //-1

console.log(Math.round(0.1)); //0
console.log(Math.round(0.8)); //1
console.log(Math.round(-0.1)); //-0
console.log(Math.round(-0.8)); //-1

console.log(Math.trunc(0.1)); //0
console.log(Math.trunc(0.8)); //0
console.log(Math.trunc(-0.1)); //-0
console.log(Math.trunc(-0.8)); //-0
/*_______Floating point_______ */

/*_______Variables_______ */
/**
 * Variables:  var, let và const
 * - var là localscope, nghĩa là biến có thể được truy cập từ nơi khai báo nó
 * và từ các blockscope con (xem ví dụ để hiểu)
 * - var có tính chất hoisting, có nghĩa là ta có thể sử dụng biến trước khi khai báo
 * - var có thể được khai báo lại trong cùng scope
 * - let là blockscope
 * - let có thể được cập nhật nhưng không thể khai báo lại trong cùng scope
 * - const giống let nhưng không thể cập nhật
 */

/**
 * - Sử dụng var sẽ khiến code khó đọc do nó có thể được khai báo lại.
 * var khiến chương trình dễ xảy ra lỗi hơn do nó là localscope
 * - Sử dụng let mặc dù tốt hơn var nhưng đôi khi cũng khiến chương trình xảy ra lỗi
 * do nó là blockscope, nó vẫn có thể được sửa đổi trong functionscope
 * - Sử dụng const mặc dù tránh được việc bị sửa đổi, nhưng
 */
/*_______Variables_______ */

/*_______Loops_______ */
//Example for
const myArray = [4234, "abc", 123, "asdas", 99];
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}
//Example Foreach
myArray.forEach((element) => {
  console.log("Element : ", element);
});
//Example For of
for (let i of myArray) {
  console.log("For of", i);
}
//Example For in
for (let i in myArray) {
  console.log("For in", myArray[i]);
}
//Example while
let text1 = "";
let i = 0;
while (i < 10) {
  console.log((text1 += "The number is " + i));
  i++;
} //Check trước khi chạy

//Example do while
let text2 = "";
let y = 0;
do {
  console.log((text2 += "The number is " + y));
  y++;
} while (y < 10); //Chạy một lần rồi check
/*_______Loops_______ */

/*_______Value Types And Reference Types_______ */
//Example Tham chiếu
//Kiểu này dùng cho các kiểu dữ liệu nguyên thuỷ: String, Number, Boolean, BigInt, Symbol, undefined, null.
//Khi gán cho nó một giá trị thì nó sẽ lưu lại giá trị đó và tại một thời điểm thì chỉ lưu một giá trị.
const object12 = {};
const object21 = object12;
object21data = "data";
console.log(object12); //{ data: 'data' }
console.log(object21); //{ data: 'data' }
//Example  Tham trị
const num113 = 1;
let num212 = num113;
num212++;
console.log(num113);
console.log(num212);
/*_______Value Types And Reference Types_______ */

/*_______Conditionals_______ */
//If else
//Example
let a111 = 10,
  b111 = 20;
if (a111 > b111) {
  console.log("a lớn hơn b");
} else if (a111 < b111) {
  console.log("a nhỏ hơn b");
} else {
  console.log("a bằng b");
}
//Example
const soSanh = a > b ? "a lớn hơn b" : a < b ? "a nhỏ hơn b" : "a bằng b";
console.log(soSanh);
/*_______Conditionals_______ */
/*_______Functions_______ */
//Example:
function sayHello12() {
  console.log("Hello World");
}
sayHello12();
//Example hàm có tham số :
function getSum1(a, b) {
  console.log("Tổng: " + (a + b));
}
getSum1(8, 8);
//Example hàm có tham số mặc định :
function getSum2(a = 5, b = 10) {
  console.log("Tổng: " + (a + b));
}
getSum2();
//Example hàm không có giá trị trả về
function getSum3(a, b) {
  return a + b;
}
//Example phạm vi hàm
// Các biến sau được định nghĩa trong phạm vi global scope
const num1 = 20,
  num2 = 3,
  nameuser = "Tuan";

// Hàm này được định nghĩa trong phạm vi global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// Một ví dụ hàm lồng nhau
function getScore() {
  const num1 = 50,
    num2 = 50;

  function add() {
    return nameuser + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // Returns "Tuan scored 100"
/*_______Functions_______ */
/*_______Operators_______ */
let a1 = 3;
let b1 = 4;
let c = a1 + b1;
console.log(c);
console.log(b);
console.log("Addition", (a1 += b1));
console.log("SubTracTion", (a1 -= b1));
console.log("Multiplication", (a1 *= b1));
console.log("Division", (a1 /= b1));
console.log("Modulus", (a1 %= b1));
let k = 8;
console.log("Giá trị ban đầu : ", k);
console.log("++ Trước :", k++);
console.log("-- Trước :", k--);
console.log("++ Sau :", ++k);
console.log("-- Sau :", --k);
console.log(a1 === b1);
console.log(a1 == b1);
console.log((a1 = b1));
let ab1 = 8;
let ac = "8";
console.log("Compare ==", ab1 == ac); // check datatype of variable.
console.log("Compare ===", ab1 === ac); //checks datatype and compares two values
console.log("Compare !=", ab1 != ac);
console.log("Compare !==", ab1 !== ac);
//DeepEqual
//Example
function isObject(obj) {
  return obj != null && typeof obj === "object";
}
function isDeepEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  console.log("keys1", keys1); // trả về mảng các thuộc tính của obj1
  const keys2 = Object.keys(obj2); // trả về mảng các thuộc tính của obj2
  // nếu số lượng keys khác nhau thì chắc chắn khác nhau
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    // kiểm tra xem hai giá trị có cùng là object hay không
    const areObjects = isObject(val1) && isObject(val2);

    // nếu cùng là object thì phải gọi đệ quy để so sánh 2 object
    if (areObjects && !isDeepEqual(val1, val2)) {
      return false;
    }

    // nếu không cùng là object thì so sánh giá trị
    if (!areObjects && val1 !== val2) {
      return false;
    }
  }
  return true;
}
let point1 = { x: 1, y: 2, metadata: { type: "point", age: 12 } };
let point2 = { x: 1, y: 2, meta: { type: "point" } };
console.log("so sánh 2 object ", isDeepEqual(point1, point2));

//Bitwise
//Đây là một phép toán đơn giản và nhanh, được hỗ trợ trực tiếp bởi bộ xử lý (processor).
//Thông thường các phép tính bitwise nhanh hơn rất nhiều so với phép nhân, phép chia, đôi khi nhanh hơn đáng kể so với phép cộng.
//Các phép tính bitwise sử dụng ít năng lượng hơn bởi nó ít sử dụng tài nguyên

//&	"AND"	Nếu cả 2 bit là 1, giá trị trả về là 1, ngược lại trả về 0.
//Example:
const bit1 = 0;
const bit2 = 1;
const bit3 = 0;
const bit4 = 1;
const bit5 = 1010;
console.log("AND &", bit1 & bit2);
console.log("AND &", bit1 & bit3);
console.log("AND &", bit2 & bit1);
console.log("AND &", bit2 & bit4);

//|	"OR"	Nếu một trong hai bit là 1, giá trị trả về là 1, ngược lại trả về 0.
//Example
console.log("OR |", bit1 | bit2);
console.log("OR |", bit1 | bit3);
console.log("OR |", bit2 | bit1);
console.log("OR |", bit2 | bit4);

//^	XOR	Nếu hai bit khác nhau, giá trị trả về là 1, ngược lại trả về 0
//Example:
console.log("XOR ^", bit1 ^ bit2);
console.log("XOR ^", bit1 ^ bit3);
console.log("XOR ^", bit2 ^ bit1);
console.log("XOR ^", bit2 ^ bit4);

//~	NOT	Đảo ngược tất cả các bit, 0 thành 1 và 1 thành 0.
//Example:
console.log("NOT ~", ~bit5);

/*_______Operators_______ */
/*_______Data types_______ */
//undefined là một kiểu trong JS, biến undefined có thể hiểu là nó không tồn tại
//undefined là giá trị mặc định được trả về khi truy cập một biến không tồn tại
let x;
console.log(x); //Undefined
//Null là đối tượng, biến null có thể hiểu là nó đã tồn tại nhưng không có giá trị nào cả
let x1 = null;
console.log(x1); //Null

let x2 = 8;
console.log(x2); // Number

let x3 = "tam";
console.log(x3); //String

const x4 = {};
console.log(x4); // Object
/*_______Data types_______ */

/*______________________________________ End Javacipt_Basic ______________________________________*/

/*______________________________________ Start This and Functions _________________________________*/
//Example
function YourClass(name, number) {
  this.name = name;
  this.number = number;
}
YourClass.prototype.vangMat = 10;
const class1 = new YourClass("Class 1", 20);
YourClass();
console.log(class1);
console.log(YourClass.prototype.vangMat);
//Example
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const member = {
  firstName: "Henry",
  lastName: "Nicola",
};
console.log("Full Name :", person.fullName(member));
//Example
function User(UserN, UserA, UserP) {
  this.userName = UserN;
  this.userAddress = UserA;
  this.userPhone = UserP;
  console.log("ffffffffffffff", this);
  this.userInfo = function () {
    console.log(this.userAddress, this.userName, this.userPhone);
  };
}
// const user1 = new User("Name user 1", "Ha Noi", 099999999);
// user1.userAge = 50;
// user1.userInfo();
// console.log(user1);
User("Name user 1", "Ha Noi", 099999999);

//Kế thừa
//Example :
function Khachhang(ht, dc, dt) {
  this.hoten = ht;
  this.diachi = dc;
  this.dienthoai = dt;
  this.thongtin = function () {
    console.log("Khách Hàng :", this.hoten, this.diachi, this.dienthoai);
  };
}

const Kh = new Khachhang("Hanna", "Ha Noi", 01234567);
console.log(Kh);
function KhachhangVIP(ht, dc, dt, ns) {
  Khachhang.call(this, ht, dc, dt); // Sử dụng hàm call để kế thừa
  this.ngaysinh = ns;
}
KhachhangVIP.prototype = Object.create(Khachhang.prototype);
KhachhangVIP.prototype.constructor = KhachhangVIP;
const KhVip = new KhachhangVIP("Hanna1", "Ha Noi2", "22/22/2222", 11234567);
console.log("saddddddddddddddddddd", KhVip);

//KeyWork This
//This  trong javascript đề cập tới đối tượng mà nó thuộc về
//Trong một phương thức THIS tham chiếu tới đối tượng truy cập phương thức(Đứng trước dấu . )
//Bên ngoài phương thúc THIS tham chiếu tới đối tượng global.
//Note :
//THIS trong hàm tạo là đại diện cho đối tượng sẽ được tạo
//THIS trong một hàm là undefined khi ở stric mode
//Các phương thức bind(), call(), apply() có thể tham chiếu THIS tới một đối tượng khác

//Example :
const Iphone = {
  //Thuộc Tính : Property
  model: "7 plus",
  color: "Black",
  //Phương Thức: Method
  takePhoto() {
    console.log(this); //This ở đây là Iphone
  },
  objChild: {
    name: "Obj Child",
    methodChild() {
      console.log(this); // This ở đây là ObjChild
    },
  },
};
//This ỏ trong constructor
function Motor(type, color) {
  (this.type = type), (this.color = color); //This ở đây chỏ đến đối tượng được tạo ra, Cụ thể là ABlade
}
const ABlade = new Motor("ABlade", "Black");
console.log("ABlade", ABlade);
//this ở global
console.log(this); // this o day chỏ ve window
//This trong handel Event
const button = document.querySelector("button");
button.onclick = function () {
  console.log(this); //This ở đây chỏ Element Button
};

/*______________________________________ End This and Functions ___________________________________*/

/*______________________________________ Start ES6_Features ____________________________________*/

//Concept Destructuring

//-Destructuring là một cú pháp cho phép bạn gán các thuộc tính của một Object hoặc một Array.
//-Tác dụng : Có thể làm giảm đáng kể các dòng mã cần thiết để thao tác dữ liệu trong các cấu trúc này.
//-Có hai loại Destructuring: Destructuring Objects và Destructuring Arrays.

//Example Destructuring Objects
const { a8, b8 } = { a8: 1, b8: 2 };
console.log(a8, b8); // 1, 2
// add c
const { a9, b9, c9 } = { a9: 1, b9: 2, c9: () => 3 };
console.log(a9, b9, c9); // 1, 2, () => 3
// add ...c
const { a20, b20, ...c20 } = { a20: 1, b20: 2, c20: () => 3, d: 4 }; //c chính là Rest params
console.log(a20, b20, c20); // 1, 2, {d: 4, c: f}

//Example Destructuring Arrays
// const a3, b3;
[a30, b30] = [1, 2];
console.log("a30, b30", a30, b30); //1 2
const [a47, b47, c47] = [1, 2, 3, 4, 5];
console.log(a47, b47, c47); // 1, 2, 3
const [a51, b51, ...c51] = [1, 2, 3, 4, 5]; // c chính là rest params
console.log(a51, b51, c51); //1, 2, [3, 4, 5]

//__________________________________________________________________________________________________//

//Concept Enhanced object literals
//Là một cú pháp tạo ra object sử dụng cặp ngoặc nhọn {}
//Example
const ObjExample = {};

//__________________________________________________________________________________________________//

//Concept Template strings (Template Literals)

//Là một cú pháp mới để khai báo String trong Javascript được giới thiệu trong ES2015/ES6.
//Nó cho phép chúng ta sử dụng multi-line string, sử dụng biến, biểu thức, hàm bên trong string mà không phải thông qua phép cộng string
//Example
const multiLine = `Tôi dang tay ôm nước vào lòng,
    Sông mở nước ôm tôi vào dạ`;
const cat = `Con mèo`;
const title = `${cat} đang bay?`; // Con mèo đang bay?
const price = 500;
const title2 = `1 cái kem giá ${price}Vnd => ${cat} mua 2 cái kem phải trả ${
  2 * price
} Vnd`;
console.log(multiLine);
console.log(title);
console.log(title2);

//Thông thường chúng ta sử dụng dấu nháy đơn hoặc nháy kép để khai báo string,
// Đối với template literals thì chúng được thay thế bới dấu back-tick `,
// biến và biểu thức được đặt trong ${expression}.
//Example
const cat2 = "Con mèo";
function catWork() {
  return "trèo cây cau!?";
}
console.log(`${cat2} đang ${catWork()}`);
// other case
const cat3 = {
  name: "Móm",
  work: function () {
    return "trèo cây cau!?";
  },
};
console.log(`${cat3.name.toUpperCase()} đang ${cat3.work()}`);

//Một tính năng nữa của Template Literals đó là Tagged Template.
//Tính năng này cho phép chúng ta truyền một template literals vào 1 hàm tag bằng cách
//viết tên hàm này trước dấu back-tick bắt đầu 1 template literal.
//Hàm tag này được dùng để xử lý chuỗi trước khi chúng được in ra hay gán vào 1 biến khác
//Example
const cat4 = "Mèo meo";
const action = "Biết Nói";
helperFunc`${cat4} ${action}`;
function helperFunc() {}

//__________________________________________________________________________________________________//

// Concept Let And Const

//- Concept Let

// + let là block scope. block scope được đánh dấu trong phạm vi cặp ngoặc nhọn {}.
//Và khi thoát khỏi block scope thì nó cũng bị mất đi
// + Nên sử dụng thay cho const khi phải thay đổi giá trị biến

//Example

let x51 = 10;
if (true) {
  let x = 5; // x này khác với x ở ngoài
  console.log(x); //5
}
console.log(x51); // 10

// + Let cho phép chúng ta thay đổi giá trị của biến tuy nhiên không cho phép
//người dùng khai báo hai lần trong cùng 1 scope

//Example

//TH1:
// let x2 = "hello";
// let x2 = "xin chào";
// console.log(x2);
// Identifier 'x' has already been declared

// TH2:
let x21 = "hello";
x21 = "xin chào";
console.log(x21); // xin chào

// + Khai báo let được nâng lên hàng đầu khi thực thi.
// Nhưng biến let không được khởi tạo.
// Vì vậy, nếu cố gắng sử dụng một biến let trước khai báo, ta sẽ nhận được một Reference Error.

// console.log(x4);
let x41 = 10; // "Cannot access 'x' before initialization"

//- Concept Const

// + Khai báo một lần, không thể thay đổi giá trị
// + Là block scope
// + Nên sử dụng như khai báo mặc định
// + Không bị hoisting

// example

const msg = "konichiwa";
// const msg = "hello"; // Identifier 'msg' has already been declared

const x5 = 10;
// x5 = 15; // Assignment to constant variable

// + const mang ý nghĩa là "constant" , không phải "immutablity"

//Example
const person123 = { name: "Tuan" };
person123.name = "Anh Tuan";
person123.age = 18;
console.log(person123); // { name: 'Anh Tuan', age: 18};

//__________________________________________________________________________________________________//

//Default, Rest, Spread

// Concept Default
// + Trong JavaScript, nếu không có giá trị được truyền vào một hàm,
//các tham số sẽ mặc định là không xác định. Hành vi mặc định của việc thiết lập các tham
//số hàm không xác định có thể gây ra lỗi trong các chức năng của bạn và đây là nơi các tham
//số mặc định phát ra

//Example
function increment(number, increment) {
  return (total = number + increment);
}

increment(1, 2); // 3
console.log("2 Tham số : ", total);
increment(1); // Lỗi NaN
console.log("1 Tham số : ", total);

//Concept Rest
//Rest được biểu thị bằng ba dấu chấm ( … ) và nó sẽ nhóm tất cả các đối số được truyền vào dưới dạng một mảng

//Example
function sum(...args) {
  // args is the name for the array
  let sum = 0;

  args.forEach((arg) => (sum += arg));

  return sum;
}

console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6

//Concept Spread
//Thay vì nhóm danh sách các phần tử thành một mảng, toán tử spread sẽ tạo danh sách các phần tử từ một danh sách

//Example

let arr = [3, 5, 1];
let arr1 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr1];

console.log(merged); // [0,3,5,1,2,8,9,15]

//other case

let arr3 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(1, ...arr3, 2, ...arr2, 25)); // 25

//__________________________________________________________________________________________________//

//Concept Arrow Funtion
// - Là Function rút gọn
// - Arrow functions không ràng buộc this

//Example
const multiTestEs6 = (a, b) => {
  return a * b;
};
const ab = multiTestEs6(7, 8);
console.log(ab);

//__________________________________________________________________________________________________//
// Concept Class in ES6

// - Class là một template giúp định nghĩa cách hoạt động của các object thuộc class đó
// - Tên các class thường được viết hoa chữ cái đầu tiên để giúp phân biệt chúng với các object và các type khác
class Animal {
  constructor(name = "anonymous", legs = 4, noise = "nothing") {
    this.type = "animal";
    this.name = name;
    this.legs = legs;
    this.noise = noise;
  }
  speak() {
    console.log(`${this.name} says "${this.noise}"`);
  }
  walk() {
    console.log(`${this.name} walks on ${this.legs} legs`);
  }
}
const rex = new Animal("Rex", 4, "woof");
rex.speak(); // Rex says "woof"
rex.noise = "growl";
rex.speak();

// + Các  Setter  là các phương thức đặc biệt chỉ được dùng để định nghĩa các giá trị cho object.
// + Tương tự,  Getter  là các phương thức đặc biệt chỉ được dùng để trả về các giá trị

//Example

class Animal2 {
  constructor(name = "anonymous", legs = 4, noise = "nothing") {
    this.type = "animal";
    this.name = name;
    this.legs = legs;
    this.noise = noise;
  }
  speak() {
    console.log(`${this.name} says "${this.noise}"`);
  }
  walk() {
    console.log(`${this.name} walks on ${this.legs} legs`);
  }
  // setter
  set eats(food) {
    this.food = food;
  }
  // getter
  get dinner() {
    return `${this.name} eats ${this.food || "nothing"} for dinner.`;
  }
}
const rex2 = new Animal2("Rex", 4, "woof");
rex2.eats = "anything";
console.log(rex2.dinner); // Rex eats anything for dinner.

//Child/Sub-class
//Kế thừa từ thằng class cha

//Example

class Dog extends Animal2 {
  constructor(name) {
    // call the Animal constructor
    super(name, 4, "woof");
    this.type = "dog";
  }
  // override Animal.speak
  speak(to) {
    super.speak(); //Super ở đây đại diện cho thằng cha, là Animal2
    if (to) console.log(`to ${to}`);
  }
}

const rex3 = new Dog("Dog");
rex3.speak("everyone"); // Rex says "woof" to everyone
rex3.eats = "anything";
console.log(rex3.dinner);

//__________________________________________________________________________________________________//

//Concept Promise

// - Promise sinh ra để xử lý kết quả của một hành động cụ thể.
// - Kết quả của mỗi hành động sẽ là thành công hoặc thất bại và Promise sẽ giúp chúng ta
//giải quyết câu hỏi "Nếu thành công thì làm gì? Nếu thất bại thì làm gì?".
//Cả hai câu hỏi này ta gọi là một hành động gọi lại (callback action)

// - Các trạng thái của Promise
// + Fulfilled: hành động xử lý xong và thành công
// + Rejected: hành động xử lý xong và thất bại
// + Pending: hành động đang chờ xử lý hoặc bị từ chối
// + Reject và Fulfilled ta gọi là Settled (Đã xử lý xong)

//Example
//Promise
//follow example
function getUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
getUser();
/*_________________________________*/
//Use Promise.all
//follow example
//Tất cả trả về resolve sẽ trả về resolve, nhưng chỉ cẩn 1 reject thì sẽ trả về reject
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
/*_________________________________*/
//Use Promise.allSettled()
//follow example
//Luôn luôn trả về resolve
Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => console.log("AllSettled", values));
/*_________________________________*/
//Use Promise.any()
//Trả về resolve nhanh nhất, nếu tất cả promise đều trả về reject thì mới trả về reject
//follow example
const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});
const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});
const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});
Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value); // "Done quick"
});
/*_________________________________*/
//Use Promise.race
//Lấy trả về kết quả nhanh nhất
//follow example
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 600, "one");
});
const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "two");
});
Promise.race([promise4, promise5]).then((value) => {
  console.log(value); // "two"
});
/*_________________________________*/
//Use Promise.prototype.catch()
//follow example
const promise11 = new Promise((resolve, reject) => {
  throw "Fail";
});
promise11.catch((error) => {
  console.error("ERROR : ", error);
});
/*_________________________________*/
//Use Promise.prototype.then()
//follow example
const promise12 = new Promise((resolve, reject) => {
  resolve("Success !");
});
promise12.then((value) => {
  console.log("Success", value);
});
/*_________________________________*/
//Use Promise.prototype.finally()
//follow example
function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Mail has arrived");
    } else {
      reject(new Error("Failed to arrive"));
    }
  });
}
checkMail()
  .then((mail) => {
    console.log(mail);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Experiment completed"); //Ý nghĩa là không cần biết tác vụ trước trả về resolve hay reject, thì nó vẫn thực hiện tác vụ có finally.
  });
//__________________________________________________________________________________________________//

//Concept Axios

// - Axios là một thư viện HTTP Client dựa trên Promise.
// - Cơ bản thì nó cung cấp một API cho việc xử lý XHR (XMLHttpRequests).

// `url` là đích đến của request
//url: '/user',

// `method` là phương thức được sử dụng để thực hiện request
//method: 'get', // mặc định là GET

// `baseURL` sẽ được gán vào trước url khi url là đường dẫn tương đối.
//baseURL: 'https://some-domain.com/api/',

// `transformRequest` cho phép thay đổi dữ liệu trước khi gửi lên server
// Option này chỉ khả dụng cho các request có phương thức là 'PUT', 'POST', và 'PATCH'
// Hàm cuối cùng phải trả về một thể hiện của Buffer hoặc ArrayBuffer hoặc FormData hoặc Stream
// Bạn cũng có thể thay đổi header của request ở đây.
//transformRequest: [function (data, headers) {
// Thực hiện thay đổi dữ liệu

// return data;
//}],

// `transformResponse` cho phép thay đổi dữ liệu trả về trước khi vào hàm xử lý trong then/catch
//transformResponse: [function (data) {
// Thực hiện việc thay đổi dữ liệu

//  return data;
//}],

// `headers` là các header được đặt lại trước khi gửi lên server
//headers: {'X-Requested-With': 'XMLHttpRequest'},

// `params` là các tham số URL sẽ được gửi lên cùng request
// Giá trị của nó phải là một object thuần hoặc là một đối tượng URLSearchParams
//params: {
//  ID: 12345
//},

// `paramsSerializer` là một hàm tùy chọn, có nhiệm vụ là serialize `params`
//paramsSerializer: function(params) {
//  return Qs.stringify(params, {arrayFormat: 'brackets'})
//},

// `data` là dữ liệu sẽ được gửi theo body của request
// Chỉ khả dụng cho các request có phương thức là 'PUT', 'POST', và 'PATCH'
// Khi không cài đặt `transformRequest`, data phải thuộc một trong các kiểu sau:
// - Chuỗi, object thuần, ArrayBuffer, ArrayBufferView, URLSearchParams, FormData, File, Blob, Stream, Buffer
//data: {
//  firstName: 'Fred'
//},

// `timeout` chỉ định số mili giây khi request vượt quá thời gian truy cập và bị hủy bỏ
//timeout: 1000,

// `withCredentials` chỉ định có thực hiện các request cross-site Access-Control sử dụng credential hay không
//withCredentials: false, // mặc định là false

// `responseType` chỉ định kiểu dữ liệu mà server sẽ trả về
// có thể là 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
//responseType: 'json', // default

// `xsrfCookieName` là tên của cookie được sử dụng như giá trị của xsrf token
//xsrfCookieName: 'XSRF-TOKEN', // mặc định là 'XSRF-TOKEN'

// `xsrfHeaderName` là tên của header mang giá trị của xsrf token
//xsrfHeaderName: 'X-XSRF-TOKEN', // mặc định là 'X-XSRF-TOKEN'

// `onUploadProgress` cho phép xử lý quá trình upload
//onUploadProgress: function (progressEvent) {
// Thực hiện việc thao tác với sự kiện progress
//},

// `onDownloadProgress` cho phép xử lý quá trình download
//onDownloadProgress: function (progressEvent) {
// Thực hiện việc thao tác với sự kiện progress
//},

// `maxContentLength` chỉ định độ dài tối đa mà response được trả về
//maxContentLength: 2000,

// `validateStatus` chỉ định việc xử lý hay từ chối promise với HTTP response status được đưa ra
//validateStatus: function (status) {
//  return status >= 200 && status < 300; // trả về true hay null hay undefined thì sẽ xử lý, không thì sẽ từ chối
//},

// `cancelToken` chỉ định một cancel token được dùng để hủy request
//cancelToken: new CancelToken(function (cancel) {
//})

// Example

//Thực Hiện với phương thức GET
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    console.log("Data : ", response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

//Thực hiện với phương thức POST

axios
  .post("/users", {
    firstName: "First name",
    lastName: "Last name",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

//Thực hiện nhiều truy cập đồng thời

function getUserAccount() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}

function getUserPermissions() {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
}

axios.all([getUserAccount(), getUserPermissions()]).then(
  axios.spread(function (res1, res2) {
    console.log(res1);
    console.log(res2);
  })
);

//Các alias cho việc tạo ra các request với phương thức tương ứng:
// + axios.request(config)
// + axios.get(url[, config])
// + axios.delete(url[, config])
// + axios.head(url[, config])
// + axios.options(url[, config])
// + axios.post(url[, data[, config]])
// + axios.put(url[, data[, config]])
// + axios.patch(url[, data[, config]])

//__________________________________________________________________________________________________//

//Concept Async + Await

// - Là một tính năng của JavaScript giúp chúng ta làm việc với các hàm bất đồng bộ
// - Làm cho code ngắn và sạch hơn

// + Async - khai báo một hàm bất đồng bộ (async function someName(){...}).
// + Tự động biến đổi một hàm thông thường thành một Promise.
// + Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.
// + Async cho phép sử dụng Await

// + Await - tạm dừng việc thực hiện các hàm async. (Var result = await someAsyncCall ().
// + Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
// + Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
// + Await chỉ có thể được sử dụng bên trong các function async

async function getJSONAsync() {
  console.log("start");
  try {
    return await axios.get("https://jsonplaceholder.typicode.com/users");
  } catch (error) {
    console.log(error);
  }
}
function getJSONAsync1() {
  console.log("start");
  try {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  } catch (error) {
    console.log(error);
  }
}
axios.all([getJSONAsync(), getJSONAsync1()]).then(
  axios.spread(function (res1, res2) {
    console.log("data3", res1);
    console.log("data4", res2);
  })
);

/*_______________________________________ End ES6_Features _____________________________________*/
