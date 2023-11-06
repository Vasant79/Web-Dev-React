import Todo from "./Components/Todo";
import AddTodo from "./Components/AddTodo";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Redux Tool Kit </h1>
      <h2>Project in use - TODO</h2>
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
