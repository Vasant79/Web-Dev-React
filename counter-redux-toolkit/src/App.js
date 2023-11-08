/**
 *
 * why redux -- state mangement -- avoid prop drilling and provieds syn between compo
 * single source of truth
 *
 * steps -- make store -- make slice -- make store available to comp -- useSelector & useDispatcher
 */
import logo from "./logo.svg";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./slice/counterSlice";

function App() {
  //reason for writing counter -- name of slice
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter Aplication using Redux Toolkit</h1>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Counter : {count}</h3>

        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </header>
    </div>
  );
}

export default App;
