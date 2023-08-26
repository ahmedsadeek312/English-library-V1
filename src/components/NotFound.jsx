import React from "react";
import Loader from "./Loader";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../component style/notFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Loader />
      <h1 className="head">No Page Here</h1>
      <Button
        className="btn"
        onClick={() => navigate("/")}
        as="a"
        variant="success"
      >
        Go To HomePage
      </Button>
    </div>
  );
};

export default NotFound;
