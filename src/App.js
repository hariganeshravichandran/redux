import React from "react";
// import Button from "./component/button/button";
// import Helloworld from "./component/Helloworld/Helloworld";
import "./App.css";
import Counter from "./component/redux/counter";
// import Posts from "./component/posts/posts";
// import Addpost from "./component/addpost/Addpost";
// import Functionsinglepost from "./component/functinsinglepost/functionsinglepost";
// import Functionsinglepost from "./component/functinsinglepost/functionsinglepost";
// import Post from "./component/post/post";
// import Counter from "./component/counter/counter";

export default function App() {
  // const [showCounter, setShowCounter] = useState(true)
  return (
    <div>
      {/* <button onClick={()=> setShowCounter(!showCounter)}>Toggle component</button> */}
      {/* <Button name='First Button'></Button>
      <Button name='Second Button'></Button>
      <Helloworld text='Hello world good morning'/> */}
      {/* {showCounter && <Counter/>} */}
      {/* <Functionsinglepost></Functionsinglepost> */}
      {/* <Posts></Posts> */}
      {/* <Addpost></Addpost>  */}
      <Counter></Counter>
    </div>
  );
}
