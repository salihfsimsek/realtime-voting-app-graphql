import React from "react";

//Components
import Loading from "../Loading";

const SubmitButton = ({ text, disabled }) => {
  return (
    <button
      className="submit-button padding-0"
      type="submit"
      disabled={disabled || false}
    >
      {disabled ? <Loading type="button" /> : text}
    </button>
  );
};

export default SubmitButton;
