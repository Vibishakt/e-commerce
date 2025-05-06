import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "components/TopBar";
import Footer from "components/Footer";
import Mens from "pages/Mens";
import Womens from "pages/Womens";
import Home from "pages/home";

function App() {
  return (
    <>
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="login" element={<Mens />} />
          <Route path="register" element={<Mens />} /> */}
          <Route path="mens" element={<Mens />} />
          <Route path="womens" element={<Womens />} />
          {/* <Route path="product/:id" element={<Womens />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Sample /> */}
    </>
  );
}

export default App;
