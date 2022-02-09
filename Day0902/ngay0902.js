function YourClass(name, number) {
  this.name = name;
  this.number = number;
}
YourClass.prototype.vangMat = 10;
const class1 = new YourClass("Class 1", 20);
YourClass();
console.log(class1);
console.log(YourClass.prototype.vangMat);
//

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
//______
function User(UserN, UserA, UserP) {
  this.userName = UserN;
  this.userAddress = UserA;
  this.userPhone = UserP;
  console.log("ffffffffffffff", this);
  this.userInfo = function () {
    console.log(this.userAddress, this.userName, this.userPhone); // this ở đây đại diện cho User
  };
}
// const user1 = new User("Name user 1", "Ha Noi", 099999999);
// user1.userAge = 50;
// user1.userInfo();
// console.log(user1);
User("Name user 1", "Ha Noi", 099999999);

///Ke thua
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
const KhVip = new KhachhangVIP("Hanna1", "Ha Noi2", "22/22/2222", 11234567);
console.log(KhVip);

//KeyWork This
//This  trong javascript đề cập tới đối tượng mà nó thuộc về
//Trong một phương thức THIS tham chiếu tới đối tượng truy cập phương thức(Đứng trước dấu . )
//Bên ngoài phương thúc THIS tham chiếu tới đối tượng global.
//Note :
//THIS trong hàm tạo là đại diện cho đối tượng sẽ được tạo
//THIS trong một hàm là undefined khi ở strick mode
//Các phương thức bind(), call(), apply() có thể tham chiếu THIS tới một đối tượng khác

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

//this owr global
console.log(this); // this o day chỏ ve window
//This trong handel Event
const button = document.querySelector("button");
button.onclick = function () {
  console.log(this); //This ở đây chỏ Element Button
};
