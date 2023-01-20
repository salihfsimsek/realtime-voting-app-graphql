import React from "react";

//Localization
import { useTranslation } from "react-i18next";

const SelectBox = () => {
  const { i18n } = useTranslation();

  const selectedLanguage = localStorage.getItem("language") || "en";

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
  };

  return (
    <select
      className="selectbox"
      value={selectedLanguage}
      onChange={changeLanguage}
    >
      <option value="en">EN</option>
      <option value="tr">TR</option>
    </select>
  );
};

export default SelectBox;
