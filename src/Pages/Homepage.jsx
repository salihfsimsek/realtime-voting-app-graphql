import React from "react";

//Components
import QuestionCard from "../Components/QuestionCard";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="container pt-2">
        <div className="row">
          <QuestionCard />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
