import { useState } from "react";

function ImageSearch({ data }) {
  //this state can go up -- in app as we need to pass search term to fetchData -- pass setSearch as props to imageSearch
  const [search, setSearch] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    data(search);
  }

  return (
    <div className="center">
      <form className="center" onSubmit={handleSubmit}>
        <label className="title is-1"> Search</label>
        <input
          type="text"
          className="input is-rounded"
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
}

export default ImageSearch;
