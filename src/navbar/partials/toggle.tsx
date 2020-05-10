import React from "react";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";
interface Props {
  toggleTheme: () => void;
}
function Toggle({ toggleTheme }: Props) {
  return (
    <div onClick={toggleTheme} className="toggle-container">
      <SunIcon />
      <MoonIcon />
    </div>
  );
}

export default Toggle;
