import { useRef } from "react";

import Timer from "./UseReff & UseState/Timer";
import Example2 from "./UseReff & UseState/Example2";
import ReactFormHook from "./ReactHookForms/ReactFormHook";
import Form from "./ForwardRef/Form";
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
      {/* <button onClick={handleClick}>Click Me</button>
      <Timer />
      <Example2 /> */}

      {/* <ReactFormHook /> */}

      <Form />
    </div>
  );
}

export default App;
