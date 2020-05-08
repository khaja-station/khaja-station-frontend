import React from "react";
import { Theme } from "../enum/theme";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";

interface Props {
  theme: Theme;
  toggleTheme: () => void;
}
const Toggle: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <div onClick={toggleTheme} className="toggle-container">
      <SunIcon />
      <MoonIcon />
    </div>
  );
};

export default Toggle;
