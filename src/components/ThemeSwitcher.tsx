import { Fragment, useState, useEffect } from "react";
import { Switch } from "@patternfly/react-core";

export const ThemeSwitcher: React.FunctionComponent = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    // Check if dark theme is already applied
    const htmlElement = document.documentElement;
    const hasDarkClass = htmlElement.classList.contains("pf-v6-theme-dark");
    setIsDarkTheme(hasDarkClass);
  }, []);

  const handleThemeToggle = (
    _evt: React.FormEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const htmlElement = document.documentElement;

    if (checked) {
      htmlElement.classList.add("pf-v6-theme-dark");
    } else {
      htmlElement.classList.remove("pf-v6-theme-dark");
    }

    setIsDarkTheme(checked);
  };

  return (
    <Fragment>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          zIndex: 1000,
        }}
      >
        <Switch
          id="theme-switcher"
          label="Dark Theme"
          isChecked={isDarkTheme}
          onChange={handleThemeToggle}
        />
      </div>
    </Fragment>
  );
};
