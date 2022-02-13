//Concept Destructuring

//-Destructuring là một cú pháp cho phép bạn gán các thuộc tính của một Object hoặc một Array.
//-Tác dụng : Có thể làm giảm đáng kể các dòng mã cần thiết để thao tác dữ liệu trong các cấu trúc này.
//-Có hai loại Destructuring: Destructuring Objects và Destructuring Arrays.

//Example Destructuring Objects

const { a, b } = { a: 1, b: 2 };
console.log(a, b); // 1, 2

// add c

const { a1, b1, c1 } = { a1: 1, b1: 2, c1: () => 3 };
console.log(a1, b1, c1); // 1, 2, () => 3

// add ...c

const { a2, b2, ...c2 } = { a2: 1, b2: 2, c2: () => 3, d: 4 }; //c chính là Rest params
console.log(a2, b2, c2); // 1, 2, {d: 4, c: f}

//Example Destructuring Arrays

// const a3, b3;
[a3, b3] = [1, 2];
console.log("a3, b3", a3, b3); //1 2

const [a4, b4, c4] = [1, 2, 3, 4, 5];
console.log(a4, b4, c4); // 1, 2, 3

const [a5, b5, ...c5] = [1, 2, 3, 4, 5]; // c chính là rest params
console.log(a5, b5, c5); //1, 2, [3, 4, 5]

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

let x = 10;
if (true) {
  let x = 5; // x này khác với x ở ngoài
  console.log(x); //5
}
console.log(x); // 10

// + Let cho phép chúng ta thay đổi giá trị của biến tuy nhiên không cho phép
//người dùng khai báo hai lần trong cùng 1 scope

//Example

//TH1:
// let x2 = "hello";
// let x2 = "xin chào";
// console.log(x2);
// Identifier 'x' has already been declared

// TH2:
let x2 = "hello";
x2 = "xin chào";
console.log(x2); // xin chào

// + Khai báo let được nâng lên hàng đầu khi thực thi.
// Nhưng biến let không được khởi tạo.
// Vì vậy, nếu cố gắng sử dụng một biến let trước khai báo, ta sẽ nhận được một Reference Error.

// console.log(x4);
let x4 = 10; // "Cannot access 'x' before initialization"

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
const person = { name: "Tuan" };
person.name = "Anh Tuan";
person.age = 18;
console.log(person); // { name: 'Anh Tuan', age: 18};

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
const promise = new Promise(function (resolve, reject) {
  resolve("Success");
});

promise.then(
  function (success) {
    console.log("success", success);
  },
  function (error) {
    console.log("error", error);
  }
);

// + Hoặc có thể dùng catch để bắt lỗi

const promise2 = new Promise(function (resolve, reject) {
  reject("Error!");
});

promise2
  .then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log(message);
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
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

getJSONAsync();

//__________________________________________________________________________________________________//
