// import axios from 'axios'

// interface Geo {
//     lat: string;
//     lng: string;
// }

// interface Address {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: Geo;
// }

// interface Company {
//     name: string;
//     catchPhrase: string;
//     bs: string;
// }

// interface RootObject {
//     id: number;
//     name: string;
//     username: string;
//     email: string;
//     address: Address;
//     phone: string;
//     website: string;
//     company: Company;
// }

// axios
//   .get<RootObject>("https://jsonplaceholder.typicode.com/users")
//   .then(function (response) {
//     console.log("Data : ", response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//Example Promise
// class Person{
//     name: string
//     greet?:Promise<string>
//     childrents?: Promise<Person[]>
//     constructor(name:string){
//       this.name = name
//     }
// }
// const personParent = new Person("Person 1")
// const children1 = new Person("Children 1")
// const children2 = new Person("Children 2")
// personParent.greet = new Promise((res)=>{
//   (res("Hello World"))
// })

// personParent.childrents = new Promise((res)=>{
//   (res([children1, children2]))
// })
// async function InfoPerson(prs: Person) {
//   try {
//     const Info =  await Promise.all([prs.greet, prs.childrents, prs.name])
//     .then((value)=>{
//     return value
//   })
//   console.log(Info)
//   } catch (error) {
//     console.log(error)
//   }
  
     
// }
// InfoPerson(personParent)

class Person1 {
  name: string;
  greeting: Promise<string>;

  constructor(_name: string) {
    this.name = _name;
    this.greeting = new Promise((rs) => {
      setTimeout(() => {
        rs(`My name is ${_name}`);
      }, 1000);
    });
  }
  children: Person1[] = [];
}

const per1 = new Person1("p1");
const per1_1 = new Person1("p1_1");
const per1_2 = new Person1("p1_2");

per1.children.push(per1_1);
per1.children.push(per1_2);

async function todoFunction(person: Person1){
  return person
}

todoFunction(per1).then(result => {
    // result must be
    /**
     * {
     *      name: 'p1',
     *      greeting: 'My name is p1',
     *      children: [
     *          {
     *              name: 'p1_1',
     *              greeting: 'My name is p1_1',
     *              children: []
     *          },
     *          {
     *              name: 'p1_2',
     *              greeting: 'My name is p1_2',
     *              children: []
     *          }
     *      ]
     * }
     */
    console.log(result);
});