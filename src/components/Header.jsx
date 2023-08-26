import React from "react";
import NavBar from "./NavBar";
import SearchForm from "./SearchForm";
import "../component style/Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <NavBar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">find your book</h2>
          <br />
          <p className="header-text fs-18 fw-3">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
