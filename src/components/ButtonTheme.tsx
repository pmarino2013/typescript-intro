import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ButtonTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className=" rounded-full px-2 cursor-pointer border "
      onClick={toggleTheme}
    >
      <span className="text-sm">
        {theme === "dark" ? (
          <i className="fa fa-sun-o  text-amber-300" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-moon-o" aria-hidden="true"></i>
        )}
      </span>
    </button>
  );
};

export default ButtonTheme;
