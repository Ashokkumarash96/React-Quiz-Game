import React from "react";

import Home from "./Pages/Home";
import Question from "./Pages/Question";
import Score from "./Pages/Score";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/question' element={<Question />} />
        <Route path='/score' element={<Score />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
