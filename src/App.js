import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./components/home/Home.jsx";
import Details from "./components/details/Details.jsx";
import Footer from "./components/footer/Footer.jsx";
import getData from "./redux/actions/getData.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  }, [dispatch]);

  return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/movies/:id" element = {<Details />} />
        </Routes>
        <hr style ={{borderColor: "#e3e3e3", margin: "0px"}}/>
        <Footer />
      </BrowserRouter>
     
  );
}

export default App;
