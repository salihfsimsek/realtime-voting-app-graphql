import React from "react";

//Localization
import { useTranslation } from "react-i18next";

//Components
import Loading from "../Loading";

const Button = ({ text, disabled, type, onClickEvent, className }) => {
  const { t } = useTranslation();

  return (
    <button
      className={`button padding-0 ${className || ""}`}
      type={type || "button"}
      disabled={disabled || false}
      onClick={onClickEvent}
    >
      {disabled ? <Loading type="button-loading" /> : t(text)}
    </button>
  );
};

export default Button;
