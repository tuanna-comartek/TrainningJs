 import * as _ from 'lodash';
 import BigNumber from 'bignumber.js';
 import moment from 'moment';
 import timeZone from 'moment-timezone';
 import  memoize  from "memoizee";
//  import  memProfile  from "memoizee/profile";


/*_________________________________________Tìm hiểu về lodash______________________________________*/
 /*_______Một số function làm việc với mảng_________*/

const array = [4, 8, 2, 9]
const arrayString = ['One', 'two', 'five', 'nine']

// _.join: Chèn thêm ký tự vào giữa các phần tử
//Example :
const newArray = _.join(array, '$' )
console.log("Use _.join : ",newArray)

//_.last : Lấy phần tử của mảng
//Example :
const lastElement = _.last(array)
console.log("Use _.last : ",lastElement)

//_.chunk : Tạo một mảng mới từ mảng đã có, gồm các mảng con có số phần tử tùy chọn truyền vào.
//Example :
const newArray1 = _.chunk(array, 2)
console.log("Use _.chunk : ",newArray1)

//_.fill : Ghi đè phần tử vào mảng từ vị trí bắt đầu đến trước vị trí kết thúc.
//Example :
_.fill(array, "a", 2 ,array.length)
console.log(array)

var users = [
    { 'user': 'barney',  'active': false, age: 18 },
    { 'user': 'fred',    'active': false, age: 28 },
    { 'user': 'pebbles', 'active': true, age: 61 },
    { 'user': 'Jon', 'active': true, age: 21 }
  ];

//_.findIndex : Hàm này cho phép chúng ta tìm phần tử trong mảng với điều kiện xác định. Và trả về vị trí của phần tử đó trong mảng.
//Example :
const locationItem = _.findIndex(users, (item)=>{
    return item.user == "fred"
})
console.log(locationItem)// Vị trí của phần tử trong mảng 1

//_.drop : Tạo một mảng mới cắt đi các phần tử từ mảng đầu vào, tính từ vị trí bắt đầu.
//Example : 
const newArray3 = _.drop(array, 2)
console.log(newArray3)

 /*____Một số function làm việc với Colection_____*/


//_.filter : Lặp qua tất cả các phần tử trong mảng, tìm phần tử với điều kiện xác định.
//Example : 
 const newArray4 = _.filter(users, (item)=>{
     return item.age > 12
 })
 console.log(newArray4)

 //_.find : tương tự filter
 //Example: 
 const newArray5 = _.filter(users, (item)=>{
    return item.active // Mặc định active lấy là true
 })
 console.log(newArray5)

 //_.size : Xác định phần từ có trong mảng
 const sizeArr = _.size(array)
 console.log(sizeArr)

 //_.sortBy: Sắp xếp mảng theo điều kiện xác định
 //Example :
_.sortBy(users, (item)=>{
    return item.user
 }) 
 console.log(users)

//Includes : Kiểm tra xem các giá trị ta truyền vào có nằm trong collection hay không. Nếu có trả về true và ngược lại.
//Example: 
 console.log(_.includes(arrayString, 'One'))// true

 /*______Một số function làm việc với object_____*/

//  :  Tìm và trả về key của một phần tử trong oject, có thể tìm bằng key name, hoặc tìm value và sau đó trả về key
//Example:
var users1 = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };
const newUser1 = _.findKey(users1, {'age': 1})
console.log(newUser1)
var array1 = [1];
var other = _.concat(array, 2, [3], [[4],4]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array1);
// => [1]

//Còn rất nhiều menthod nữa .............................

/*_________________________________________Tìm hiểu về Memoizee______________________________________*/
//Concept : 
// Đối với các gọi hàm expensive function, tức là các hàm thực hiện các tính toán nặng.
// Đối với các hàm có phạm vi đầu vào hạn chế và định kỳ cao (highly recurring input range), sao cho các giá trị được lưu trong bộ nhớ cache không chỉ ở im đó mà còn không thay đổi gì cả.
// Đối với các hàm đệ quy với các giá trị đầu vào định kỳ (recurring input).
// Đối với các hàm thuần (pure functions), tức là các hàm trả về cùng một đầu ra mỗi lần chúng được gọi với một đầu vào cụ thể.
//Example : 
const fn = function(one:string, two:number, three:string) {
	console.log(one , two, three)
};
const memoized = memoize(fn);
memoized("foo", 3, "aloha");
memoized("foo", 3, "aloha"); // Cache hit
// memoized("foo", 3, "aloha");
// memoized("foo", 3, "aloha");
// console.log(memProfile.log());


const memoized1 = memoize(fn, { length: 2});// length : Gioi han ham so truyen vao
 
// memoized1("12", true); // Cache hit
// memoized1(
//     {
//         toString: function() {
//             return "12";
//         }
//     },
//     {}
// ); // Cache hit
/*_________________________________________Tìm hiểu về Bignumber______________________________________*/
//Concept : 
//Cung cấp một mức độ chính xác cực cao để thực hiện các hoạt động toán học. 
//Đối với số nguyên không có giới hạn và đối với số điểm nổi, lớp cho phép thiết lập độ chính xác tối đa    
//Example :
const newNum1 = new BigNumber(-10000.78)
console.log(newNum1)
//BigNumber { s: -1, e: 3, c: [ 1000, 78000000000000 ] }
// + s là biểu thị cho dấu (1 hoặc -1)
// + e là số mũ
// + c là hệ cơ số

console.log(new BigNumber(43210).toString())                       // '43210'
console.log(new BigNumber('4.321e+4').toString())                  // '43210'
console.log(new BigNumber('-735.0918e-430').toString())            // '-7.350918e-428'
console.log(new BigNumber('123412421.234324', 5).toString())       // '607236.557696'
                  
/*_________________________________________Tìm hiểu về Moment______________________________________1*/
//Concept : Moment phân tích thời gian và hiển thị theo giờ của local
//moment().format('MMMM Do YYYY, h:mm:ss a'); // May 22nd 2020, 6:00:23 pm
//moment().format('dddd');                    // Friday
//moment().format("MMM Do YY");               // May 22nd 20
//moment().format('YYYY [escaped] YYYY');     // 2020 escaped 2020
//moment().format();                          // 2020-05-22T18:00:23+05:30

//Example:
const day = new Date(2020, 2, 23);
console.log(day);
moment.locale('en');// đổi đơn vị ngôn ngữ 
console.log(moment(day).fromNow());
console.log(moment().add(7, 'hour'));//moment().add:thêm 
console.log(moment().subtract(7, 'days'));//lùi thời gian   
moment("2012-02", "YYYY-MM").daysInMonth() // 29  Get số ngày trong tháng hiện tại
console.log("date", moment().format('DD/MMM/YYYY/HH:mm'));
console.log("date01", moment().add(2, 'month').quarters());//
console.log("unix", moment.unix(2));
console.log("time", moment('2013-09-01T00:00:00.000').quarters(4));
console.log(moment.utc().format());
console.log('format', (moment().format()));
console.log('moment', moment());
console.log('moment quarters', moment().quarters(), moment().quarter());
console.log(moment("1995-12-25"));
console.log(moment("12-25-1995", "DD-DD-YYYY"));
//lấy phút
console.log(moment().minute());//moment().get('minute');set:moment().set('minute', 20);
//lấy giờ
console.log(moment().hour());//moment().get('hour');set:moment().set('hour', 13);
//lấy ngày tháng
console.log(moment().date());//moment().get('date');set:moment().set('date', 1);
//lấy tháng trả từ 0-11 tương đương 1-12
console.log(moment().month());//moment().get('month');set:moment().set('month', 3); 
// lấy năm
console.log(moment().year());//moment().get('year');set:moment().set('year', 2013);
//bắt đầu tiên của x('x')
console.log(moment().startOf('isoWeek'), moment().startOf('year'));; 

/*_________________________________________Tìm hiểu về Moment-Tz______________________________________*/
//Concept : Thêm hoặc chuyển đổi timezone.
//Example : 
const jun = timeZone("2014-06-01T12:00:00Z");
const dec = timeZone("2014-12-01T12:00:00Z");

console.log(jun.tz('America/Los_Angeles').format('ha z'))
console.log(dec.tz('America/Los_Angeles').format('ha z'))  // 4am PST
console.log(jun.tz('America/New_York').format('ha z'))   // 8am EDT
console.log(dec.tz('America/New_York').format('ha z'))  // 7am EST
console.log(jun.tz('Asia/Tokyo').format('ha z')) // 9pm JST
console.log(dec.tz('Asia/Tokyo').format('ha z')) // 9pm JST
console.log(jun.tz('Australia/Sydney').format('ha z')) // 10pm EST
console.log(dec.tz('Australia/Sydney').format('ha z')) // 11pm EST

const newYork    = moment.tz("2014-06-01 12:00", "America/New_York");
const losAngeles = newYork.clone().tz("America/Los_Angeles");
const london     = newYork.clone().tz("Europe/London");

console.log(newYork.format());    // 2014-06-01T12:00:00-04:00
console.log(losAngeles.format()); // 2014-06-01T09:00:00-07:00
console.log(london.format());     // 2014-06-01T17:00:00+01:00


/*_________________________________________Tìm hiểu về Timestamp______________________________________*/
//Concept :
//Trong javascript, Timestamp là số mili giây tính từng ngày 1 tháng 1 năm 1970 (1/1/1970 hay còn được gọi là Unix epoch time)
//Example : 
//No arguments :
const date = new Date()
console.log(date)

//Method to format Date:
//Có thể truyền tối đa 7 đối số vào hàm để tạo ra ngày/giờ :
// + Year: 4 ký tự năm
// + Month: (0-11). Month là zero-indexed
// + Day
// + Hour
// + Minutes
// + Seconds
// + Milliseconds

//toString :
//Example :
const date1 = new Date(2019, 0, 23, 17, 23, 42)// Khai bao ngày tháng sử dụng đối số
console.log("toString :",date1.toString())

//toDateString :
//Example :
console.log("toDateString :",date1.toDateString())

//toLocaleString :
//Example :
console.log("toLocaleString :",date1.toLocaleString())

//toLocaleDateString :
//Example :
console.log("toLocaleDateString :",date1.toLocaleDateString())

//toUTCString :
//Example :
console.log("toUTCString :",date1.toUTCString())

//toISOString :
//Example :
console.log("toISOString :",date1.toISOString())

//Comparing dates
//Example : 
const earlier = new Date(2019-3-26)// Khai báo ngày tháng sử dụng datestring
const later = new Date(2019-3-26)
console.log(earlier < later)//So sanh lon hon // true

const isSameTime = (earlier:any, later:any) => earlier.getTime() === later.getTime()
console.log(isSameTime(earlier, later))//So sanh bang //false

const failDay = new Date(2021, 3, 33)
console.log(failDay.toLocaleDateString())

const dayStamp = new Date(1645000000000)// Sử dụng timestamp để khởi tạo ngày tháng.
console.log(dayStamp.toDateString())//16/02/2022

