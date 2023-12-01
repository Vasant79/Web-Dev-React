import PasswordGenerator from "./Components/PassowordGenerator";

import "./App.css";

function App() {
  return (
    <>
      <div className="container mx-auto p-10">
        <div>
          <div className="text-center text-2xl">Password Generator</div>
          <PasswordGenerator />
        </div>
      </div>
    </>
  );
}

export default App;
