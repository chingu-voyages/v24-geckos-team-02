import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import useBookSearch from "./hooks/useBookSearch";
import Modal from "./components/Modal";

export default function App() {
  const [query, setQuery] = useState(undefined);
  const [pageNumber, setPageNumber] = useState(1);
  const [book, setBook] = useState("");
  const [modal, setModal] = useState(false);
  const { books, error, isLastPage } = useBookSearch(query, pageNumber); // 'books' has search results
  const handleSubmit = (e, searchTerm) => {
    e.preventDefault();
    setQuery(searchTerm);
    setPageNumber(1);
  };

  const handleBooksDetails = (id) => {
    const bookClicked = books.find(book => book.id === id);
    console.log(bookClicked);
    setBook(bookClicked)
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className="App">
      <Navbar />
      <Header />
      {modal ? <Modal book={book} closeModal={closeModal} /> : null}
      <Search handleSubmit={handleSubmit} error={error} />
      <CardList books={books.map(googleBookToAppBook)} handleBooksDetails={handleBooksDetails} />
      <button
        onClick={() => {
          /*
          More data is requested only if the current page isn't the last page.
          */
          if (!isLastPage) {
            setPageNumber((prevPageNo) => prevPageNo + 1);
          }
        }}
      >
        More
      </button>
      <Footer />
    </div>
  );
}

function googleBookToAppBook({ volumeInfo, id }) {
  const { title, subtitle, authors, publisher, imageLinks } = volumeInfo;
  return {
    title: title === undefined ? "" : title,
    subtitle: subtitle === undefined ? "" : subtitle,
    authors: authors === undefined ? [] : authors,
    publisher: publisher === undefined ? "" : publisher,
    id: id,
    thumbnailImageLink:
      imageLinks === undefined ? "" : imageLinks.smallThumbnail,
  };
}
