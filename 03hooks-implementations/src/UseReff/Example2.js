import { useRef, useState } from "react";

function Example2() {
  //using state
  const [userInput, setUserInput] = useState(0);

  //using ref -- has .current -- only used for provinding & using the reference -- no render
  const providingRefernece = useRef();

  function handleChange(event) {
    setUserInput(event.target.value);
    console.log(providingRefernece.current);
  }

  return (
    <div>
      <input
        ref={providingRefernece}
        type="text"
        value={userInput}
        onChange={handleChange}
      />
      <label>Number</label>
      {userInput}
    </div>
  );
}

export default Example2;
