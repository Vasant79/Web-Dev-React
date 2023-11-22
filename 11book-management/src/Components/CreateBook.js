// this components creats books
import { useState } from "react";

function CreateBook({ createBook }) {
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); //here made error
    createBook(title);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="title is-2">Add Book Title </label>
        <input
          className="input is-rounded is-medium"
          onChange={handleChange}
        ></input>
        {/* <input type="submit" value="Create"></input> */}
      </form>
    </div>
  );
}

export default CreateBook;
