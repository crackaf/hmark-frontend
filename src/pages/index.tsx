import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "./Home";

// markup
const IndexPage = () => {
  return (
    <div style={{ backgroundColor: "#ecf3fc" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default IndexPage;
