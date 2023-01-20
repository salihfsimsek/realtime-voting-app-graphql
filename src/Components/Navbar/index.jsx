import React from "react";

//React router dom
import { Link } from "react-router-dom";

//Localization
import { useTranslation } from "react-i18next";

//Components
import SelectBox from "../SelectBox";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <Link to="/create-question">{t("Create")}</Link>
      <SelectBox />
    </nav>
  );
};

export default Navbar;
