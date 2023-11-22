import BookShow from "./BookShow";

function BookList({ books, editTitle, deleteBook }) {
  const renderBooksOnScreen = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        editTitle={editTitle}
        deleteBook={deleteBook}
      />
    );
  });

  return <div>{renderBooksOnScreen}</div>;
}

export default BookList;
