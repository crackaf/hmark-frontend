import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";

import * as React from "react";
import About from "./about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Features from "./features";
import Home from "./Home";
import Watermark from "./watermark";

// markup
const IndexPage = () => {
  return (
    <div style={{ backgroundColor: "#ecf3fc" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watermark" element={<Watermark />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default IndexPage;
