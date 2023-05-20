// import React from "react"
import React from "react";

// import the Home, Question and Score components from ./Pages
import Home from "./Pages/Home";
import Question from "./Pages/Question";
import Score from "./Pages/Score";
// import the BrowserRouter, Route and Routes components from react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import the App.css file for styling
import "./App.css";

// define the App component
const App = () => {
  // return the JSX for the App component
  return (
    // wrap the Routes component with the BrowserRouter component
    <BrowserRouter>
      {/*render the Routes component with the route paths and elements*/}
      <Routes>
        {/* render the Home component for the root path */}
        <Route path='/' element={<Home />} />
        {/* render the Question component for the question path */}
        <Route path='/question' element={<Question />} />
        {/* render the Score component for the score path */}
        <Route path='/score' element={<Score />} />
      </Routes>
    </BrowserRouter>
  );
};

// export the App component as default
export default App;
