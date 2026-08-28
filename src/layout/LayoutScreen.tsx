import { useContext } from "react";
import { Outlet } from "react-router";
import NavBarShop from "../components/NavBarShop";
import { ThemeContext } from "../context/ThemeContext";

const LayoutScreen = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <header
        className={`fixed top-0 w-screen p-2 ${theme === "dark" ? "dark-mode" : ""}`}
      >
        <NavBarShop />
      </header>
      <main className={`${theme === "dark" && "dark-mode"}`}>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutScreen;
