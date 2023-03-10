import React from "react";

//Redux
import { useSelector } from "react-redux";

//GraphQL
import { useSubscription } from "@apollo/client";
import { QUESTIONS_SUBSCRIPTION } from "../Queries/questions";

//Components
import QuestionCard from "../Components/QuestionCard";
import Loading from "../Components/Loading";
import SearchBox from "../Components/SearchBox";

const Homepage = () => {
  const searchText = useSelector((state) => state.searchField.value);
  const { loading, data } = useSubscription(QUESTIONS_SUBSCRIPTION, {
    variables: {
      searchText: `%${searchText}%`,
    },
  });

  if (loading) {
    return <Loading type="full" />;
  }

  return (
    <div className="homepage">
      <div className="container pt-2">
        <div className="row">
          <div className="homepage-searchbox col-12 d-md-none px-1">
            <SearchBox />
          </div>
          {data?.questions.map((question, index) => (
            <QuestionCard key={index} question={question} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
