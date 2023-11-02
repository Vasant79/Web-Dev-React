import { useState } from "react";

function Inputs({ from = "usd", to }) {
  const [userInput, setUserInput] = useState("");
  const [convert, setConvert] = useState();

  function handleChange(event) {
    setUserInput(Number(event.target.value));
  }

  function handleClick() {
    console.log(to.inr);
    let result = userInput * to;
    setConvert(result);
  }
  return (
    <div>
      <label>From {from}</label>
      <input type="text" onChange={handleChange} required />

      <label>To inr</label>
      <input type="text" value={convert} />

      <button onClick={handleClick}>Convert</button>
    </div>
  );
}

export default Inputs;
