import React from "react";
import { useGlobalContext } from "../APIFetch.js";
import Book from "./Book";
import Loader from "./Loader.jsx";
import coverImg from "../images/cover_not_found.jpg";
import "../component style/bookList.css";
import "../index.css";

// https://covers.openlibrary.org/b/id/240727-S.jpg => API

const BookList = () => {
  const { books, Loading, resultTitle } = useGlobalContext();
  const booksWithCovers = books.map((singlebook) => {
    return {
      ...singlebook,
      id: singlebook.id.replace("/works/", ""),
      coverImg: singlebook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singlebook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  console.log(booksWithCovers);
  if (Loading) return <Loader />;
  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid">
          {booksWithCovers.slice(0, 20).map((item, index) => {
            return <Book key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;
