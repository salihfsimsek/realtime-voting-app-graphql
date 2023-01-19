import React, { useState } from "react";

//React router dom
import { useParams } from "react-router-dom";

//GraphQL
import { useSubscription, useMutation } from "@apollo/client";
import {
  QUESTION_DETAIL_SUBSCRIPTION,
  NEW_VOTE_MUTATION,
} from "../Queries/questions";
import OptionButton from "../Components/OptionButton";
import SubmitButton from "../Components/SubmitButton";

const QuestionDetail = () => {
  const { questionId } = useParams();
  const { data, loading, error } = useSubscription(
    QUESTION_DETAIL_SUBSCRIPTION,
    {
      variables: {
        questionId: questionId,
      },
    }
  );

  const [newVote, { loading: loadingVote }] = useMutation(NEW_VOTE_MUTATION);

  const [selectedOption, setSelectedOption] = useState(null);
  const [isVoted, setIsVoted] = useState(false);

  console.log(data);

  const submitVote = (e) => {
    e.preventDefault();
    newVote({
      variables: {
        input: {
          option_id: selectedOption,
        },
      },
    }).then(() => setIsVoted(true));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="question-detail">
      <div className="container pt-2 question-detail-container">
        <form className="question-detail-container-left" onSubmit={submitVote}>
          <span className="question-detail-container-left-question">
            {data.questions_by_pk.title}
          </span>
          <div className="question-detail-container-left-options">
            {data.questions_by_pk.options.map((option) => (
              <OptionButton
                key={option.id}
                option={option}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            ))}
          </div>
          {!isVoted && <SubmitButton text="Save" />}
        </form>
        <hr />
        <div className="question-detail-container-right">
          Oy verdikten sonra sonuclar burada gosterilecektir.
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
