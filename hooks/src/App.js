import { useRef } from "react";

import Timer from "./UseReff/Timer";
import Example2 from "./UseReff/Example2";
import "./App.css";

function App() {
  //testing useRef hook -- for referencing but not rendering

  const ref = useRef(0);

  function handleClick() {
    console.log(typeof ref);
    console.log("curent refernce value " + ref.current);
    ref.current = ref.current + 1;
    console.log("changed value " + ref.current);
  }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <Timer />
      <Example2 />
    </div>
  );
}

export default App;
