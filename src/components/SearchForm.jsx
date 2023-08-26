import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../component style/searchForm.css";
import { useGlobalContext } from "../APIFetch";
import Swal from "sweetalert2";

const SearchForm = () => {
  const { setSearchTearm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();
  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      Swal.fire({
        icon: "error",
        title: "Type A Book Title!",
        text: "Only by English!",
      });
    } else {
      setSearchTearm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Novel Name"
                ref={searchText}
              />
              <button
                type="submit"
                className="flex flex-c"
                onClick={handleSubmit}
              >
                <FaSearch className="text-purple" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
