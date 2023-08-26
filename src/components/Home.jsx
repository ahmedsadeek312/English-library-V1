import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Home;
