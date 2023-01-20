import React, { useState } from "react";

//React router dom
import { useNavigate } from "react-router-dom";

//Localization
import { useTranslation } from "react-i18next";

//GraphQL
import { useMutation } from "@apollo/client";
import { NEW_QUESTION_MUTATION } from "../Queries/questions";

//Components
import Input from "../Components/Input";
import Label from "../Components/Label";
import Button from "../Components/Button";

const initialOptions = [{ title: "" }, { title: "" }];

const CreateQuestion = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const [newQuestion, { loading }] = useMutation(NEW_QUESTION_MUTATION);

  const [title, setTitle] = useState("");
  const [options, setOptions] = useState(initialOptions);

  const addNewOption = () => {
    setOptions((exOptions) => [...exOptions, { title: "" }]);
  };

  const handleChangeOptions = (e, index) => {
    const { value } = e.target;

    const newArray = options.map((option, i) => {
      if (index === i) {
        return {
          ...option,
          title: value,
        };
      }
      return option;
    });

    setOptions([...newArray]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filledOptions = options.filter((option) => option.title !== "");

    if (title === "" || filledOptions.length < 2) return;

    newQuestion({
      variables: {
        input: {
          title,
          options: {
            data: filledOptions,
          },
        },
      },
    }).then((result) => {
      setTitle("");
      setOptions(initialOptions);
      navigate(`/questions/${result.data.insert_questions_one.id}`);
    });
  };

  return (
    <div className="create-question">
      <div className="container create-question-container">
        <span className="create-question-container-title">
          {t("Create Question")}
        </span>
        <form
          className="row create-question-container-content"
          onSubmit={handleSubmit}
        >
          <Label text="Question" />
          <Input
            placeholder="Type your question here"
            value={title}
            setValue={(e) => setTitle(e.target.value)}
            required={true}
          />
          <Label text="Options" />
          {options.map((option, index) => (
            <Input
              placeholder="Type your option here"
              value={option.title}
              setValue={(e) => handleChangeOptions(e, index)}
            />
          ))}
          <Button
            text="Add Option"
            onClickEvent={addNewOption}
            className="transparent"
          />
          <Button
            text="Create Question"
            className="col-12 mt-4"
            type="submit"
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default CreateQuestion;
