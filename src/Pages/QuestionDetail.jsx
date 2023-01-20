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
import VoteChart from "../Components/VoteChart";
import Loading from "../Components/Loading";

const QuestionDetail = () => {
  const { questionId } = useParams();
  const { data, loading } = useSubscription(QUESTION_DETAIL_SUBSCRIPTION, {
    variables: {
      questionId: questionId,
    },
  });

  const [newVote, { loading: loadingVote }] = useMutation(NEW_VOTE_MUTATION);

  const [selectedOption, setSelectedOption] = useState(null);
  const [isVoted, setIsVoted] = useState(false);

  const submitVote = (e) => {
    e.preventDefault();
    if (!selectedOption) return;
    newVote({
      variables: {
        input: {
          option_id: selectedOption,
        },
      },
    }).then(() => setIsVoted(true));
  };

  if (loading) return <Loading type="full" />;

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
          {!isVoted && <SubmitButton text="Save" disabled={loadingVote} />}
        </form>
        <hr />
        <div className="question-detail-container-right">
          {loadingVote ? (
            <Loading type="fit" />
          ) : isVoted ? (
            <VoteChart data={data.questions_by_pk.options} />
          ) : (
            <span className="question-detail-container-right-message">
              Oy verdikten sonra sonuclar burada gosterilecektir.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
