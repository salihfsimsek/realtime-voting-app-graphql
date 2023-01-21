/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

//i18n
import { useTranslation } from "react-i18next";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { changeSearchField } from "../../redux/searchFieldSlice";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBox = ({ className }) => {
  const data = useSelector((state) => state.searchField.value);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [input, setInput] = useState(data);

  useEffect(() => {
    let timeout = setTimeout(() => {
      dispatch(changeSearchField(input));
    }, 500);
    return () => clearTimeout(timeout);
  }, [input]);

  return (
    <div className={`searchbox ${className || ""}`}>
      <input
        type="text"
        placeholder={t("Search in Questions")}
        className="searchbox-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="searchbox-icon" />
    </div>
  );
};

export default SearchBox;
