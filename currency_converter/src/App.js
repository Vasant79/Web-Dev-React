import { useState } from "react";

import Inputs from "./Components/Inputs";
import useFetchData from "./hooks";

import "./App.css";

function App() {
  const [selectedCurr, setSelectedCurr] = useState("usd");

  let res = useFetchData(selectedCurr);

  let allCurrency = Object.keys(res);
  //console.log(allCurrency);

  //mistake here -- onChnage is given to select not option`
  function handleChange(event) {
    setSelectedCurr(event.target.value);
    console.log(selectedCurr);
  }

  let render = allCurrency.map((eachCurrency) => {
    return <option key={eachCurrency}>{eachCurrency}</option>;
  });

  return (
    <div>
      <select value={selectedCurr} onChange={handleChange}>
        {render}
      </select>
      {/* now update currency ele when user select any other currency */} --
      done
      <Inputs from={selectedCurr} to={res.inr} />{" "}
    </div>
  );
}

export default App;
