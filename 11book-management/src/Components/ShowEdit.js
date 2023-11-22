import { useState } from "react";

//-- work from  hundlesubmit -- update title of the obj of specified id
function ShowEdit({ book, editTitle, setShowEdit }) {
  const [editedTitle, setEditedTitle] = useState(book.title);

  function handleChange(event) {
    let new_title = event.target.value; //making mistake here -- writing prevent
    setEditedTitle(new_title);
  }
  function handleSubmit(event) {
    event.preventDefault();
    editTitle(book.id, editedTitle);
    setShowEdit(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input is-rounded subtitle is-5"
        value={editedTitle}
        onChange={handleChange}
      ></input>
    </form>
  );
}

export default ShowEdit;
