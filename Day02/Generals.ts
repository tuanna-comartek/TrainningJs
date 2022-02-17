//Type in Typescript
//Về cơ bản typescript có 3 loại types chính đó là :
// + Any type
// + Built in type
// + User defined type
// * Interface và Type thuộc loại thứ 3 - User defined type

// * Khai báo:

//TypeScript Basic
/*__________________________________________ Types__________________________________________________ */
//_____Primitives_____//
//Gồm có : string , number, boolean
//Example: 
const myString1:string = "Hello";
const myNumber:number = 10;
const myBool:boolean = true;

//______Array_______//
//Example : 
const myArray3:number[] = [1,2,3,4]
const myArray1:string[] = ['1','2','3','4']
const myArray2:object[] = [{name:'tuan'},{name:'tuan1'},{name:'tuan2'},{name:'tuan3'}]

//_______Any______//
//Concept: là kiểu đặc biệt
const anyFn = (a : any)=>{
console.log(a)
};
anyFn(7);
anyFn("tuan");
anyFn([1,3,4]);
anyFn({name:'tuan'});

//_______Functions_______//
//Example 
function exFn(age:number) {
    console.log("Now ! I am ", age, "year old !")
}
exFn(18)

//_______Object________//
//Example : 
function exObj(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  exObj({ x: 3, y: 7 });

function exObj1(obj : {x: number; y: number; z?:number}){//z? : Có thể nhập z hoặc  không, có cũng dc mà không có cũng dc, optional
    console.log(obj)
}
exObj1({x: 4, y: 6})
exObj1({x: 9, y:10, z: 67})
function exObj2(x: number, y: number, z?:number){//z? : Có thể nhập z hoặc  không, có cũng dc mà không có cũng dc, optional
    console.log(x + y + z!)//Ở đây nhập dấu ! sau biến biểu thị mọt lời hứa sẽ nhập giá trị cho biến
}
exObj2( 4,  6)//NaN
exObj2( 9, 10, 67)//86

//_________Union Types_________//
//Example : 
function myAge(age: number | string){
    console.log("Now ! Tao" ,age ,  "Tuổi")
}
myAge(18);
myAge("18");

//_______Type Aliases________//
//Example : 
type student = {
    name: string,
    age: number,
}

function infoStd(std: student){
    console.log("Học sinh : ", std.name, "có số tuổi là : ", std.age)
}
infoStd({name:"tuan", age: 18})

//________Type Interface______//
//Example : 

interface Class {
    name: string,
    number: number,
}

function myClass(cls: Class){
    console.log("Lớp : ", cls.name, "có : ", cls.number, "học sinh")
}
myClass({name: '10A', number: 38})


//Example Type:
type Books = {
    name: string,
    price: number,
    author: string,
}
// type Books = {
//     since:number
// }//Không thể khai báo hai type cùng tên

//Example Interface:
interface Book{
    name: string,
    price: number,
    author: string,
}
interface Book{
    since: number
}

//Interface có thể merge còn Type thì không.
// + Example Interface:
const Twilight:Book = {
    name: "Chạng vạng",
    price: 300000,
    author: "Stephenie Meyer",
    since: 2008
}
console.log("interface",Twilight)

// + Example type:
const Twilight1:Books = {
    name: "Chạng vạng",
    price: 300000,
    author: "Stephenie Meyer",
    // since: 2008
}
console.log("types: ",Twilight1)

/*_________________________________________Generics_________________________________________________ */
//Concept: Generics về cơ bản là một loại công cụ cho phép bạn tạo các thành phần mã có thể sử dụng 
//lại hoạt động với nhiều type khác nhau thay vì chỉ một type duy nhất
// - Working with Generic Type Variables
//Example : 

function fnGeneric<T>(arg: T):T{
    return arg
}
fnGeneric<string>("Nguyen")
fnGeneric<number>(8)
fnGeneric<boolean>(true)

function fnGenericArr<T>(arg: T[]): T[]{
    console.log(arg.length)
    return arg
}
fnGenericArr<string>(["Nguyen ANh Tuan", "Dep Trai"])

function fnGenericArr1<T>(arg: Array<T>): Array<T>{
    console.log(arg.length)
    return arg
}
fnGenericArr<string>(["Nguyen ANh Tuan", "Dep Trai"])

//Generic Types
//Example: 
const myArray5 = <T>(arg:T) => [arg]
const arg1 = myArray5(6)
const arg2 = myArray5<string>("tuan")
const arg3 = myArray5<number>(6)
const arg4 = myArray5<boolean>(true)
const arg5 = myArray5<object>({name:"tuan"})

interface GenericIdentityFn {
    <Type>(arg: Type): Type;
}
function identity<Type>(arg: Type): Type {
    return arg;
}
let myIdentity: GenericIdentityFn = identity
console.log(myIdentity<string>("tuan"))

//Generic class
//Example
class Product<GnId, GnName, GnPr> {
    id: GnId;
    name: GnName;
    price: GnPr;
    constructor(id:GnId, name:GnName, price:GnPr){
        this.id= id;
        this.name = name;
        this.price = price;
    }
    showInfo(){
        console.log(`Chao ban : ${this.id} - ${this.name} - ${this.price}`)
    }
}
const newProduct = new Product<string, string, number>("b1", "thit cho", 22222)
const newProduct1 = new Product<number, string, number>(23, "thit cho", 22222)
console.log(newProduct);
console.log(newProduct1.showInfo());

//Tuple với giá trị default
//Example
const makeTupleDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m5 = makeTupleDefault<string | null>(null, 2);
const m6 = makeTupleDefault<string | undefined>(undefined, 1);
console.log(m5)
console.log(m6)

//Key động
interface HocSinh{
    class: string;
    school:string;
}
function Students(std:HocSinh){
    return {
        [std.class]:"10A",
        [std.school]:"HL4",
    }
}
console.log(Students({class:"Lop", school:"Truong"}))


