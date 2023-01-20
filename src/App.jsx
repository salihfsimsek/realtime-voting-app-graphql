import React from "react";

//React router dom
import { Routes, Route } from "react-router-dom";

//Pages
import Homepage from "./Pages/Homepage";
import QuestionDetail from "./Pages/QuestionDetail";

//Components
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/questions/:questionId" element={<QuestionDetail />} />
      </Routes>
    </div>
  );
};

export default App;
