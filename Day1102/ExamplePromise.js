/*__________________________________________Example Promise__________________________________________*/
//Promise sẽ lưu trữ kết quả trả về của một hàm hay một đoạn mã bất đồng bộ.
//Thay vì truyền vào một callback function như trong ES5,
//Kết quả trả về của hàm hoặc chức năng sẽ là một Promise.

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

/*________________________________________Example Async Await________________________________________*/

//Example Async Await
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

/*___________________________________________Example Axios___________________________________________*/
//Example
//Thực Hiện với phương thức GET
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    console.log("Data : ", response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
/*__________________________________*/
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
/*__________________________________*/
//Thực hiện nhiều truy cập đồng thời

function getUserAccount() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}
function getUserPermissions() {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
}
axios.all([getUserAccount(), getUserPermissions()]).then(
  axios.spread(function (res2, res3) {
    console.log("Data1", res2);
    console.log("Data2", res3);
  })
);
/*__________________________________*/
//Spinner
function startAnimation() {
  console.log("Running Spinner ..... ");
}
function stopAnimation() {
  console.log("Stopping Spinner ..... ");
}

function Spinner() {
  startAnimation();
  return axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((resp) => {
      console.log("dddddd", resp.data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(stopAnimation);
}
Spinner();

function fh() {
  console.log(Math.random());
}
fh();
