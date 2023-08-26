import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../component style/bookDetails.css";
import "../index.css";
import Loader from "./Loader";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import coverImg from "../images/cover_not_found.jpg";

const URL = "https://openlibrary.org/works/";

// img link :     "large": "https://covers.openlibrary.org/b/id/1-L.jpg"
// id : https://openlibrary.org/works/OL45804W.json
const BookDetails = () => {
  const id = useParams();
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState([]);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getBookDetails() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://openlibrary.org/works/${id.id}.json` // https://openlibrary.org/works/OL262460W.json
        ); // https://openlibrary.org/works/OL262460W
        const data = await response.json();
        console.log(data);

        const {
          description,
          title,
          covers,
          subjects,
          first_publish_date,
          edition_count,
          revision,
        } = data;
        setData(data);
        const newBook = {
          title: title,
          cover_img: covers
            ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
            : coverImg,
          edition_count: edition_count
            ? edition_count
            : revision || "No edition Count Found",
          first_publish_date: first_publish_date
            ? first_publish_date
            : "No Date Found",
          subjects: subjects ? subjects.join(" ,") : "No Subjects Found",
          description: description ? description.value : "No Description Found",
        };
        setBook(newBook);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id.id]);

  console.log(book);
  if (loading) return <Loader />;

  return (
    <section className="book-details">
      <div className="container">
        <button
          type="button"
          className="flex flex-c back-btn"
          onClick={() => navigate("/book")}
        >
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">GO Back</span>
        </button>
        <div className="book-details-content grid">
          <div className="book-details-img">
            <img src={book?.cover_img} alt="cover img" />
          </div>
          <div className="book-details-info">
            <div className="book-details-item title">
              <span className="fw-6 fs-24">{book?.title}</span>
            </div>
            <div className="book-details-item description">
              <span className="fw-6 fs-20">{book?.description}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Edition Count : </span>
              <span className="text-italic">{book?.edition_count}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">first publish Date : </span>
              <span className="text-italic">{book?.first_publish_date}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">subjects : </span>
              <span>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;

// try {
//   const response = await fetch(
//     `https://openlibrary.org/works/${id}.json` // https://openlibrary.org/works/OL262460W.json
//   ); // https://openlibrary.org/works/OL262460W
//   const data = await response.json();
//   if (data) {
//     const {
//       description,
//       title,
//       covers,
//       subjects,
//       subject_times,
//       location,
//     } = data;
//     var newBook = {
//       description: description
//         ? description.value
//         : "No Description Found",
//       title: title,
//       cover_img: covers
//         ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
//         : coverImg,
//       subject_places: location
//         ? location.join(", ")
//         : "No Location Found",
//       subject_times: subject_times
//         ? subject_times.join(", ")
//         : "No Subject Times Found",
//       subjects: subjects ? subjects.join(" ,") : "No Subjects Found",
//     };
//     setBook(newBook);
//   }
//   else {
//     setBook(null);
//   }
// } catch (error) {
//   console.log(error);
// }

// fetch(`https://openlibrary.org/works/${id.id}.json`)
// const id = useParams();
