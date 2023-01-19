import React from "react";

//Redux
import { useSelector } from "react-redux";

//GraphQL
import { useSubscription } from "@apollo/client";
import { QUESTIONS_SUBSCRIPTION } from "../Queries/questions";

//Components
import QuestionCard from "../Components/QuestionCard";

const Homepage = () => {
  const searchText = useSelector((state) => state.searchField.value);
  const { loading, error, data } = useSubscription(QUESTIONS_SUBSCRIPTION, {
    variables: {
      searchText: `%${searchText}%`,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="homepage">
      <div className="container pt-2">
        <div className="row">
          {data?.questions.map((question, index) => (
            <QuestionCard key={index} question={question} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
