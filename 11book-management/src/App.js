import { useState, useEffect } from "react";
import axios from "axios";

import "bulma/css/bulma.css";

import CreateBook from "./Components/CreateBook";
import BookList from "./Components/BookList";

import "./App.css";

/*
Skeleton for the code -- 
*/
function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/book");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []); //[] meaning will rendr only one time

  const createBook = async (newTitle) => {
    //making books locally
    //   let updatedBooks = [
    //     ...books,
    //     {
    //       id: Math.random(),
    //       title: newTitle,
    //     },
    //   ];

    //   setBooks(updatedBooks);

    //makking books on server
    const response = await axios.post("http://localhost:3001/book", {
      title: newTitle,
    });

    let updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  //mistake here
  const editTitle = async (id, EditedTitle) => {
    //updating on server
    const response = await axios.put(`http://localhost:3001/book/${id}`, {
      title: EditedTitle,
    });

    //updating locally
    let updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBook = async (id) => {
    //deleting on server
    await axios.delete(`http://localhost:3001/book/${id}`);

    //deleting locally
    let updatedBook = books.filter((book) => {
      return book.id !== id; // was unable to figure out return
    });

    setBooks(updatedBook);
  };

  //console.log(books);
  return (
    <div className="container">
      <section className="notification is-primary">
        <CreateBook createBook={createBook} />
      </section>
      <BookList books={books} editTitle={editTitle} deleteBook={deleteBook} />
    </div>
  );
}

export default App;
