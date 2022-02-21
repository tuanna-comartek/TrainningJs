import axios from 'axios'

interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface RootObject {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

axios
  .get<RootObject>("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    console.log("Data : ", response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

//Example Promise
class Person{
    name: string
    greet?:Promise<string>
    children?: Promise<Person[]>
    constructor(name:string){
      this.name = name
    }
}
const personParent = new Person("Person 1")
const children1 = new Person("Children 1")
const children2 = new Person("Children 2")
personParent.greet = new Promise((res)=>{
  (res("Hello World"))
})

personParent.children = new Promise((res)=>{
  (res([children1, children2]))
})
async function InfoPerson(prs: Person) {
  try {
    const Info =  await Promise.all([prs.greet, prs.children, prs.name])
    .then((value)=>{
    return value
  })
  console.log(Info)
  } catch (error) {
    console.log(error)
  }
  
     
}
InfoPerson(personParent)