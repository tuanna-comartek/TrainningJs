import { useMemo, useState } from "react";

const ExUseMemo = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(10);
  function expensiveFunction(a: number) {
    console.log("Bat dau");
    return a * a;
  }
  // Su dung useMemo de lưu giá trị trả về của function và nó sẽ kiểm tra xem phụ thuộc thay đổi thì nó mới chạy hàm phía trong, còn không thì sẽ trả về value đã cached trước đó
  //Khong nen lam dung useMemo
  const number = useMemo(() => {
    return expensiveFunction(num);
  }, [num]);
  return (
    <>
      <p>{number}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </>
  );
};
export default ExUseMemo;
