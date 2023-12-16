import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../theme/ThemeContext";
import "./settings.css"; //

const Settings = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const { theme, toggleTheme } = useTheme();
  const isLightTheme = theme === 'light';

  const style = {
    backgroundColor: isLightTheme ? '#FFF' : '#363537',
    color: isLightTheme ? '#363537' : '#FAFAFA',
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "dir",
      i18n.language === "ar" ? "rtl" : "ltr"
    );
  }, [i18n.language]);

  return (
    <div className="settings-container"  style={style} >
      <h2 className="settings-title">{t("settings")}</h2>
      <div>
        <button className="language-toggle-button" onClick={toggleLanguage}>
          {i18n.language === "en" ? "عربي" : "English"}
        </button>
      </div>
      <div>
        <button className="theme-toggle-button" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
};

export default Settings;
