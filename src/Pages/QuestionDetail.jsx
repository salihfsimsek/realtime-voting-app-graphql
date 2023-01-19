import React from "react";

//React router dom
import { useParams } from "react-router-dom";

const QuestionDetail = () => {
  const { questionId } = useParams();

  return <div>QuestionDetail {questionId}</div>;
};

export default QuestionDetail;
