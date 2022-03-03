function MyInfo(props) {
  return (
    <>
      <h1>Hello con chim non : </h1>
      <h3>My name is {props.name}.</h3>
      <h3>I'am {props.age} year old.</h3>
      <h3>I from to {props.country}</h3>
      <h3>I living in {props.address}</h3>
    </>
  );
}
export default MyInfo;
