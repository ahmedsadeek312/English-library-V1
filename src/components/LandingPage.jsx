import React from "react";
import LibraryPng from "../images/pngwing.com (3).png";
import { useNavigate } from "react-router-dom";
import "../component style/landPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <section className="home" id="home">
      <div className="home-text">
        <span>welcome To</span>
        <h1>starbucks Coffee</h1>
        <h2>
          Free coffee is a <br /> tap away{" "}
        </h2>
        <button onClick={() => navigate("/")} className="btn">
          Join Now
        </button>
      </div>
      <div className="home-img">
        <img src={LibraryPng} alt="welcome_image" />
      </div>
    </section>
  );
};

export default LandingPage;
