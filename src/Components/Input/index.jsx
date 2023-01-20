import React from "react";

//Localization
import { useTranslation } from "react-i18next";

const Input = ({ value, setValue, placeholder, required }) => {
  const { t } = useTranslation();

  return (
    <input
      type="text"
      placeholder={t(placeholder)}
      value={value}
      onChange={setValue}
      className="input col-12"
      required={required}
    />
  );
};

export default Input;
