import { useCallback, useState } from "react";
import ChildComponents from "./ChildrentComponents";

// export interface Geo {
//   lat: string;
//   lng: string;
// }

// export interface Address {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: Geo;
// }

// export interface Company {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// }

// export interface RootObject {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: Address;
//   phone: string;
//   website: string;
//   company: Company;
// }
const ExUseCallback = () => {
  const [users, setUsers] = useState([]);

  const getData = useCallback((type) => {
    return fetch(`https://jsonplaceholder.typicode.com/${type}`);
  }, []); // Sử dụng UseCallback
  console.log(typeof getData);
  const handleClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  };
  console.log(users);
  return (
    <>
      <h3>Data</h3>
      <div>{JSON.stringify(users)}</div>
      <button
        onClick={handleClick}
        style={{
          width: 150,
          height: 30,
          backgroundColor: "blue",
          borderRadius: 8,
          color: "#fff",
        }}
      >
        Get Data
      </button>
      <ChildComponents getData={getData} />
    </>
  );
};

export default ExUseCallback;
//Note : useCallback giữ cho một hàm không được tạo lại lần nữa, dựa trên mảng các phần phụ thuộc.
// Nó sẽ trả về chính function đó. Sử dụng nó khi truyền fuction vào component con và
//chặn không cho một hàm nào đó tiêu thời gian, tài nguyên phải tạo lại.
