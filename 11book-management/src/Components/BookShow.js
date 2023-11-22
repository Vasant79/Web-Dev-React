import { useState } from "react";
import ShowEdit from "./ShowEdit";

function BookShow({ book, editTitle, deleteBook }) {
  const [showEdit, setShowEdit] = useState(false);

  function handleShowEdit() {
    setShowEdit(!showEdit);
  }

  function handleDelete() {
    deleteBook(book.id);
  }

  let content = <div className="title is-3">{book.title}</div>;

  if (showEdit) {
    content = (
      <ShowEdit book={book} editTitle={editTitle} setShowEdit={setShowEdit} />
    );
  }

  return (
    <div className="card spacing">
      <div className="card-content">
        {content}{" "}
        <button className="button is-link" onClick={handleShowEdit}>
          Edit
        </button>
        <button className="button is-link" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
