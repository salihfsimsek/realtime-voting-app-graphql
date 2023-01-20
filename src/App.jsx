import React from "react";

//React router dom
import { Routes, Route } from "react-router-dom";

//Pages
import Homepage from "./Pages/Homepage";
import QuestionDetail from "./Pages/QuestionDetail";
import CreateQuestion from "./Pages/CreateQuestion";

//Components
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/questions/:questionId" element={<QuestionDetail />} />
        <Route path="/create-question" element={<CreateQuestion />} />
      </Routes>
    </div>
  );
};

export default App;
