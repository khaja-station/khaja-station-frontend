import React from "react";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";

interface Props {
  toggleTheme: () => void;
}
const TopNavbar: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <div onClick={toggleTheme} className="toggle-container">
      <SunIcon />
      <MoonIcon />
    </div>
  );
};

export default TopNavbar;
