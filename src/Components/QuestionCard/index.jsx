import React from "react";

//React router dom
import { useNavigate } from "react-router-dom";

const QuestionCard = ({ question }) => {
  const navigate = useNavigate();

  const calculateTotalAnswer = () => {
    const sum = question.options.reduce(
      (acc, current) => acc + current.votes_aggregate.aggregate.count,
      0
    );

    return sum;
  };

  return (
    <div
      className="question-card col-12 col-sm-6 col-lg-4"
      onClick={() => navigate("/questions/2")}
    >
      <div className="question-card-container">
        <span className="question-card-title">{question.title}</span>
        <span className="question-card-total">
          Total Answer: {calculateTotalAnswer()}
        </span>
      </div>
    </div>
  );
};

export default QuestionCard;
