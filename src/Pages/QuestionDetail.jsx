import React, { useState } from "react";

//React router dom
import { useParams } from "react-router-dom";

//GraphQL
import { useSubscription, useMutation } from "@apollo/client";
import {
  QUESTION_DETAIL_SUBSCRIPTION,
  NEW_VOTE_MUTATION,
} from "../Queries/questions";

//Localization
import { useTranslation } from "react-i18next";

//Components
import OptionButton from "../Components/OptionButton";
import Button from "../Components/Button";
import VoteChart from "../Components/VoteChart";
import Loading from "../Components/Loading";

const QuestionDetail = () => {
  const { questionId } = useParams();
  const { t } = useTranslation();
  const { data, loading } = useSubscription(QUESTION_DETAIL_SUBSCRIPTION, {
    variables: {
      questionId: questionId,
    },
  });

  const [newVote, { loading: loadingVote }] = useMutation(NEW_VOTE_MUTATION);

  const [selectedOption, setSelectedOption] = useState(null);
  const [isVoted, setIsVoted] = useState(false);

  const calculateTotalAnswer = () => {
    const sum = data.questions_by_pk.options.reduce(
      (acc, current) => acc + current.votes_aggregate.aggregate.count,
      0
    );

    return sum;
  };

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
          {!isVoted && (
            <Button text={"Save"} disabled={loadingVote} type="submit" />
          )}
        </form>
        <hr />
        <div className="question-detail-container-right">
          {loadingVote ? (
            <Loading type="fit" />
          ) : isVoted ? (
            <VoteChart
              data={data.questions_by_pk.options}
              totalAns={calculateTotalAnswer()}
            />
          ) : (
            <span className="question-detail-container-right-message">
              {t("Results will be shown here after you vote")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
