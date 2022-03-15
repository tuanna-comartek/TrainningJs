import { useEffect, useRef, useState } from "react";

const ExUseref = () => {
  const countRef = useRef(0);
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  const obj = {
    current: 0,
  };

  const handleClick = () => {
    countRef.current = countRef.current + 1;
    obj.current = obj.current + 1;
    setCount(count + 1);
  };

  useEffect(() => {
    ref.current.focus(); //Truy vấn đến phần tử DOM
  }, []);

  //Sử dụng trong Stale Closure

  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(count + 1);
  //     console.log(count);
  //   }, 1000);
  // }, []); // Count không đổi

  // useEffect(() => {
  //   setInterval(() => {
  //     countRef.current = countRef.current + 1;
  //     console.log(countRef);
  //   }, 5000);
  // }, []); // CountRef tăng thêm 5 theo từng giây
  console.log({ countRef, count, obj }); //Giá trị của current trong Obj không đổi.
  return (
    <>
      <input ref={ref} />
      <div>UseRef</div>
      <button onClick={handleClick}>Click</button>
    </>
  );
};
export default ExUseref;

//Note :
// + Cũng đều giữ lại giá trị của 1 biến như useState mỗi khi re-render
// + UseRef không làm re-render khi thay đổi giá trị vì nó không tạo mới 1 obj
// + UseRef có thể truy vấn đến 1 phần tử DOM
// + Useref Cũng là 1 obj có fil current nhưng khác hoàn toàn với 1 obj thuần cũng có 1 fil current
