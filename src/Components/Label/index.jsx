import React from "react";

//Localization
import { useTranslation } from "react-i18next";

const Label = ({ text }) => {
  const { t } = useTranslation();

  return <label className="label">{t(text)}</label>;
};

export default Label;
