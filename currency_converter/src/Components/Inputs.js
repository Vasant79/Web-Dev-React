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
      <div>
        <label>From {from}</label>
        <input type="text" onChange={handleChange} required />
      </div>

      <div>
        <label>To inr</label>
        <input type="text" value={convert} />
      </div>

      <div>
        <button onClick={handleClick}>Convert</button>
      </div>
    </div>
  );
}

export default Inputs;
