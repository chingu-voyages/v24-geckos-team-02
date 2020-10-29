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
  // const [modal, setModal] = useState(false);
  const { books, error, isLastPage } = useBookSearch(query, pageNumber); // 'books' has search results
  const handleSubmit = (e, searchTerm) => {
    e.preventDefault();
    setQuery(searchTerm);
    setPageNumber(1);
    // setModal(false)
  };

  // const closeModal = () => {
  //   setModal(false)
  // }

  // const toggleModal = () => {
  //   setModal(prev=>!prev)
  // }

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Search handleSubmit={handleSubmit} error={error} />
      <CardList books={books.map(googleBookToAppBook)} query={query} />
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

function googleBookToAppBook({ volumeInfo, id, accessInfo, saleInfo }) {
  const { title = "", 
    subtitle = "", 
    authors = [], 
    publisher = "", 
    imageLinks = "", 
    categories = [] ,
    infoLink = "",
    description = "",
    publishedDate = "",
    averageRating = "none",
    ratingsCount = "none",
    pageCount = "",
    language = ""
  } = volumeInfo;
  const { webReaderLink = ""} = accessInfo;
  const { buyLink = "", retailPrice = "" } = saleInfo;

  return {
    title,
    subtitle,
    authors,
    description,
    categories,
    publishedDate,
    publisher,
    id,
    thumbnailImageLink:
      imageLinks.smallThumbnail,
    averageRating,
    ratingsCount,
    pageCount,
    language,
    infoLink,
    webReaderLink,
    buyLink,
    retailPrice
  };
}
// function googleBookToAppBook({ volumeInfo, id }) {
//   const { title, subtitle, authors, publisher, imageLinks, categories } = volumeInfo;
//   return {
//     title: title === undefined ? "" : title,
//     subtitle: subtitle === undefined ? "" : subtitle,
//     authors: authors === undefined ? [] : authors,
//     categories: categories === undefined ? [] : categories,
//     publisher: publisher === undefined ? "" : publisher,
//     id: id,
//     thumbnailImageLink:
//       imageLinks === undefined ? "" : imageLinks.smallThumbnail,
//   };
// }
