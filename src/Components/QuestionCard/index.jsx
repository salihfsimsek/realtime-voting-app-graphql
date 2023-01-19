import React from "react";

//React router dom
import { useNavigate } from "react-router-dom";

const QuestionCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="question-card col-12 col-sm-6 col-lg-4"
      onClick={() => navigate("/questions/2")}
    >
      <div className="question-card-container">
        <span className="question-card-title">
          Aklima tkailan bir soru var ve sizin tarafinizdan buna bir cevap
          alabilir miyim diye merak ediorum? Guncel durum hakkinda ne
          dusunyorsunuz?
        </span>
        <span className="question-card-total">Total Answer: 25</span>
      </div>
    </div>
  );
};

export default QuestionCard;
