import { useState, type ReactNode } from "react";
import { type Theme } from "../interfaces/theme";
import { ThemeContext } from "./ThemeContext";
// 'children' representa cualquier elemento visual o componente anidado en React.
interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme: Theme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Proveemos el objeto que coincide perfectamente con la interfaz ThemeContextType [4]
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
